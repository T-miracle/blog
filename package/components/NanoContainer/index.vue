<template>
    <div
        ref="container"
        class="nano-theme absolute"
        :style="{ ...containerLayoutStyle, ...animation }"
    >
        <div v-show="!loading" class="relative w-full h-full flex flex-col">
            <NanoHeader ref="header" @dblclick.self="ctl.fullscreen = !ctl.fullscreen"/>
            <NanoBody/>
            <NanoFooter/>
        </div>

        <NanoLoading v-show="loading"/>
        <NanoBackdrop/>
        <NanoNavModal/>
        <NanoSidebarDirModal/>
    </div>
</template>

<script setup lang="ts">
    import NanoHeader from '@NanoUI/NanoHeader/index.vue';
    import NanoBody from '@NanoUI/NanoBody/index.vue';
    import NanoFooter from '@NanoUI/NanoFooter/index.vue';
    import NanoLoading from '@NanoUI/NanoLoading/index.vue';
    import NanoBackdrop from '@NanoUI/NanoBackdrop/index.vue';
    import NanoNavModal from '@NanoUI/NanoNavModal/index.vue';
    import NanoSidebarDirModal from '@NanoUI/NanoSidebarDirModal/index.vue';
    import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
    import { controllerStore } from '@store/controller';
    import { contentLayoutStore, getWidthFromString, LayoutBaseInfo } from '@store/contentLayout';
    import { drag } from '../../utils/drag';
    import { debounce } from 'lodash-es';

    const ctl = controllerStore();
    const layout = contentLayoutStore();

    const container = ref<HTMLElement | null>(null);
    const header = ref<InstanceType<typeof NanoHeader> | null>();
    const resizeObserver = ref<ResizeObserver | null>(null);
    const loading = ref(true);
    const enableAnimation = ref(true);

    const animation = computed(() => {
        return enableAnimation.value ? {
            transition: 'top .12s, left .12s, width .12s, height .12s'
        } : {
            transition: 'width .12s, height .12s'
        };
    });

    const containerLayout = ref<LayoutBaseInfo>(layout.containerLayout);

    const containerLayoutStyle = computed(() => {
        return !ctl.onlyFullscreen && !ctl.fullscreen ? containerLayout.value : {
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh'
        };
    });

    watch(containerLayout, debounce((val) => {
        // console.log('containerLayout changed', val);
        layout.setContainerLayout(val);
    }, 200), { deep: true });

    onMounted(() => {
        const containerEl = container.value!;
        resizeObserver.value = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                const { target } = entry;
                const { clientWidth } = target as HTMLElement;
                if (clientWidth < 1280) {
                    ctl.allowDrag = false;
                    ctl.hideLeftSidebar = true;
                    ctl.hideRightSidebar = true;
                    ctl.hideLeftActionBar = true;
                    ctl.hideRightActionBar = true;
                    ctl.showDirModal = true;
                    ctl.hideHeaderTopNav = true;
                    ctl.hidePaths = true;
                    ctl.hideCopyright = true;
                } else {
                    ctl.allowDrag = true;
                    ctl.hideLeftSidebar = false;
                    ctl.hideRightSidebar = false;
                    ctl.hideLeftActionBar = false;
                    ctl.hideRightActionBar = false;
                    ctl.showDirModal = false;
                    ctl.hideHeaderTopNav = false;
                    ctl.hidePaths = false;
                    ctl.hideCopyright = false;
                }
            }
            if (loading.value) {
                setTimeout(() => {
                    loading.value = false;
                }, 1200);
            }
        });
        resizeObserver.value.observe(containerEl);

        type OriginLayout = {
            isFullscreen: boolean;
            notFullScreenWidth: number;
            screenWidth: number;
            screenHeight: number;
            left: number;
            top: number;
        };

        drag<OriginLayout>({
            el: header.value!.$el,
            originalData: () => {
                const { clientWidth, clientHeight } = document.documentElement;
                const { offsetLeft, offsetTop } = containerEl;
                const width = getWidthFromString(layout.container.changed?.width || layout.container.default?.width || '');
                return {
                    isFullscreen: ctl.fullscreen,
                    notFullScreenWidth: width,
                    screenWidth: clientWidth,
                    screenHeight: clientHeight,
                    left: offsetLeft,
                    top: offsetTop
                };
            },
            handlerFn: ({
                x,
                y,
                originalData: { isFullscreen, notFullScreenWidth, screenWidth, screenHeight, left, top },
                pointerWelt,
                initial
            }) => {
                let newLeft = left + x;
                const newTop = top + y;
                if (isFullscreen) {
                    ctl.fullscreen = false;
                    newLeft = initial.x - (initial.x / screenWidth) * notFullScreenWidth + x;
                }
                if (!pointerWelt.top && !pointerWelt.bottom && newTop > 0) {
                    containerLayout.value.top = newTop / screenHeight * 100 + '%';
                } else {
                    containerLayout.value.top = pointerWelt.bottom ? '98%' : '0';
                }
                if (!pointerWelt.left && !pointerWelt.right) {
                    containerLayout.value.left = newLeft / screenWidth * 100 + '%';
                }
            },
            beforeFn: () => enableAnimation.value = false,
            afterFn: () => enableAnimation.value = true
        });
    });

    onBeforeUnmount(() => {
        resizeObserver.value?.disconnect();
    });
</script>

<style scoped lang="scss">
</style>

