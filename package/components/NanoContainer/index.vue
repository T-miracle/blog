<template>
    <NanoModal
        ref="container"
        v-model:fullscreen="ctl.fullscreen"
        v-model:layout="containerLayout"
        :drag-el="headerEl"
        :visible="true"
        :width-range="[ '22vw', '100vw' ]"
        :height-range="[ '60vh', '100vh' ]"
        class="nano-theme"
    >
        <div class="relative w-full h-full flex flex-col">
            <NanoHeader ref="header" @dblclick.self="ctl.fullscreen = !ctl.fullscreen"/>
            <NanoBody>
                <template #content-footer>
                    <slot name="content-footer"/>
                </template>
            </NanoBody>
            <NanoFooter/>
        </div>

        <NanoLoading v-show="loading"/>
        <NanoBackdrop/>
        <NanoNavModal/>
        <NanoSidebarDirModal/>
    </NanoModal>
</template>

<script setup lang="ts">
    import NanoHeader from '@NanoUI/NanoHeader/index.vue';
    import NanoBody from '@NanoUI/NanoBody/index.vue';
    import NanoFooter from '@NanoUI/NanoFooter/index.vue';
    import NanoLoading from '@NanoUI/NanoLoading/index.vue';
    import NanoBackdrop from '@NanoUI/NanoBackdrop/index.vue';
    import NanoNavModal from '@NanoUI/NanoNavModal/index.vue';
    import NanoSidebarDirModal from '@NanoUI/NanoSidebarDirModal/index.vue';
    import NanoModal from '@NanoUI/NanoModal/index.vue';
    import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
    import { controllerStore } from '@store/controller';
    import { contentLayoutStore } from '@store/contentLayout';

    const ctl = controllerStore();
    const layout = contentLayoutStore();

    const container = ref<InstanceType<typeof NanoModal> | null>(null);
    const header = ref<InstanceType<typeof NanoHeader> | null>();
    const resizeObserver = ref<ResizeObserver | null>(null);
    const loading = ref(true);

    const headerEl = computed(() => header.value?.$el);
    const containerLayout = computed({
        get: () => layout.containerLayout,
        set: (value) => layout.setContainerLayout(value)
    });

    onMounted(() => {
        const containerEl = container.value!.$el;
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
    });

    onBeforeUnmount(() => {
        resizeObserver.value?.disconnect();
    });
</script>

<style scoped lang="scss">
</style>

