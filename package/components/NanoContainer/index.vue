<template>
    <div
        ref="root"
        class="nano-theme absolute top-5vh left-5vw h-90vh w-90vw flex flex-col"
        :class="{ 'top-0! left-0! w-screen! h-screen!': fullscreen }"
    >
        <template v-if="!loading">
            <NanoHeader/>
            <NanoBody/>
            <NanoFooter/>
        </template>

        <NanoLoading v-else/>
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
    import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
    import { controllerStore } from '@store/controller';

    const ctl = controllerStore();

    const root = ref<HTMLElement | null>(null);
    const resizeObserver = ref<ResizeObserver | null>(null);
    const loading = ref(true);

    const fullscreen = computed(() => {
        return ctl.onlyFullscreen || ctl.fullscreen;
    });

    onMounted(() => {
        const rootEl = root.value!;
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
            setTimeout(() => {
                loading.value = false;
            }, 1200);
        });
        resizeObserver.value.observe(rootEl!);
    });

    onBeforeUnmount(() => {
        resizeObserver.value?.disconnect();
    });
</script>

<style scoped lang="scss">
</style>

