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
    // const resizeObserver = ref<ResizeObserver | null>(null);

    onMounted(() => {
        // 判断设备类型(手机、平板、PC)
        const userAgent = navigator.userAgent;
        if (userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i)) {
            // 移动端
            const htmlEl = document.documentElement;
            htmlEl.style.setProperty('font-size', '12px');
            ctl.allowDrag = false;
            ctl.articleFullscreen = true;
            ctl.hideLeftSidebar = true;
            ctl.hideRightSidebar = true;
            ctl.hideActionBar = true;
            ctl.hideHeaderTopNav = true;
            ctl.hidePaths = true;
            ctl.hideCopyright = true;
        } else {
            // PC端
            const htmlEl = document.documentElement;
            htmlEl.style.setProperty('font-size', '16px');
            ctl.allowDrag = true;
            ctl.articleFullscreen = false;
            ctl.hideLeftSidebar = false;
            ctl.hideRightSidebar = false;
            ctl.hideActionBar = false;
            ctl.hideHeaderTopNav = false;
            ctl.hidePaths = false;
            ctl.hideCopyright = false;
        }

        /* resizeObserver.value = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            const htmlEl = document.documentElement;
            for (const entry of entries) {
                const { target } = entry;
                const { clientWidth } = target as HTMLElement;
                if (clientWidth >= 2560) {
                    htmlEl.style.setProperty('font-size', '18px');
                    ctl.allowDrag = true;
                    ctl.articleFullscreen = false;
                    ctl.hideLeftSidebar = false;
                    ctl.hideRightSidebar = false;
                    ctl.hideActionBar = false;
                    ctl.hideHeaderTopNav = false;
                    ctl.hidePaths = false;
                    ctl.hideCopyright = false;
                } else if (clientWidth >= 1920) {
                    htmlEl.style.setProperty('font-size', '16px');
                    ctl.allowDrag = true;
                    ctl.articleFullscreen = false;
                    ctl.hideLeftSidebar = false;
                    ctl.hideRightSidebar = false;
                    ctl.hideActionBar = false;
                    ctl.hideHeaderTopNav = false;
                    ctl.hidePaths = false;
                    ctl.hideCopyright = false;
                } else if (clientWidth >= 1280) {
                    htmlEl.style.setProperty('font-size', '14px');
                    ctl.allowDrag = false;
                    ctl.articleFullscreen = false;
                    ctl.hideLeftSidebar = false;
                    ctl.hideRightSidebar = false;
                    ctl.hideActionBar = false;
                    ctl.hideHeaderTopNav = false;
                    ctl.hidePaths = false;
                    ctl.hideCopyright = false;
                } else {
                    htmlEl.style.setProperty('font-size', '12px');
                    ctl.allowDrag = false;
                    ctl.articleFullscreen = true;
                    ctl.hideLeftSidebar = true;
                    ctl.hideRightSidebar = true;
                    ctl.hideActionBar = true;
                    ctl.hideHeaderTopNav = true;
                    ctl.hidePaths = true;
                    ctl.hideCopyright = true;
                }
            }
        });
        resizeObserver.value.observe(root.value as HTMLElement); */
    });

    onBeforeUnmount(() => {
        // resizeObserver.value?.disconnect();
    });
</script>

<style lang="scss">
    @import "./theme/light/var";
</style>
