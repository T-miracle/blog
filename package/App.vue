<template>
    <div
        ref="root"
        class="relative h-screen w-screen"
    >
        <NanoContainer/>
    </div>
</template>

<script setup lang="ts">
    import NanoContainer from '@NanoUI/NanoContainer/index.vue';
    import { onBeforeUnmount, onMounted, ref } from 'vue';
    import { controllerStore } from '@store/controller';

    const ctl = controllerStore();

    const root = ref<HTMLElement | null>(null);
    const resizeObserver = ref<ResizeObserver | null>(null);

    onMounted(() => {
        const htmlEl = document.documentElement;
        resizeObserver.value = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                const { target } = entry;
                const { clientWidth } = target as HTMLElement;
                if (clientWidth >= 2560) {
                    htmlEl.style.setProperty('font-size', '18px');
                    ctl.allowDrag = true;
                    ctl.hideLeftSidebar = false;
                    ctl.hideRightSidebar = false;
                    ctl.hideLeftActionBar = false;
                    ctl.hideRightActionBar = false;
                    ctl.hideHeaderTopNav = false;
                    ctl.hidePaths = false;
                    ctl.hideCopyright = false;
                } else if (clientWidth >= 1920) {
                    htmlEl.style.setProperty('font-size', '16px');
                    ctl.allowDrag = true;
                    ctl.hideLeftSidebar = false;
                    ctl.hideRightSidebar = false;
                    ctl.hideLeftActionBar = false;
                    ctl.hideRightActionBar = false;
                    ctl.hideHeaderTopNav = false;
                    ctl.hidePaths = false;
                    ctl.hideCopyright = false;
                } else if (clientWidth >= 1280) {
                    htmlEl.style.setProperty('font-size', '14px');
                    ctl.allowDrag = false;
                    ctl.hideLeftSidebar = false;
                    ctl.hideRightSidebar = false;
                    ctl.hideLeftActionBar = false;
                    ctl.hideRightActionBar = true;
                    ctl.hideHeaderTopNav = false;
                    ctl.hidePaths = false;
                    ctl.hideCopyright = false;
                } else {
                    htmlEl.style.setProperty('font-size', '12px');
                    ctl.allowDrag = false;
                    ctl.hideLeftSidebar = true;
                    ctl.hideRightSidebar = true;
                    ctl.hideLeftActionBar = true;
                    ctl.hideRightActionBar = true;
                    ctl.hideHeaderTopNav = true;
                    ctl.hidePaths = true;
                    ctl.hideCopyright = true;
                }
            }
        });
        resizeObserver.value.observe(htmlEl);
    });

    onBeforeUnmount(() => {
        resizeObserver.value?.disconnect();
    });
</script>

<style lang="scss">
    @import "./theme/light/var";
</style>
