<template>
    <div
        class="fixed top-0 left-0 h-screen w-screen"
        style="background-size: cover; background-position: center; background-repeat: no-repeat;"
        :style="{ backgroundImage: `url(${ bgList[0] })` }"
    >
        <slot name="homepage">
            <NanoDefaultHomepage/>
        </slot>

        <footer
            v-if="onlyShowIndex && footer?.copyright"
            class="homepage-record fixed bottom-0 left-0 z-10 w-full px-4 py-3 text-center text-sm text-gray-3"
            v-html="`备案号：${footer.copyright}`"
        />

        <NanoContainer v-if="!onlyShowIndex">
            <template #content-footer>
                <slot name="content-footer"/>
            </template>
        </NanoContainer>
    </div>
</template>

<script setup lang="ts">
    import NanoContainer from '@NanoUI/NanoContainer/index.vue';
    import NanoDefaultHomepage from '@NanoUI/NanoDefaultHomepage/index.vue';
    import { useData } from 'vitepress';
    import { onMounted, onUnmounted, ref, watch } from 'vue';
    import { controllerStore } from '@store/controller';

    const { frontmatter, site } = useData();
    const { backgrounds: bgList, footer } = site.value.themeConfig;

    // Tracks whether the current VitePress route is the standalone homepage.
    const onlyShowIndex = ref<boolean>(false);

    watch(() => frontmatter.value.layout, (value) => {
        onlyShowIndex.value = value === 'home';
    }, { immediate: true, deep: true });

    const ctl = controllerStore();
    const resizeObserver = ref<ResizeObserver | null>(null);

    onMounted(() => {
        const htmlEl = document.documentElement!;
        resizeObserver.value = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                const { target } = entry;
                const { clientWidth } = target as HTMLElement;
                ctl.onlyFullscreen = clientWidth < 960;
            }
        });
        resizeObserver.value.observe(htmlEl);
    });

    onUnmounted(() => {
        resizeObserver.value?.disconnect();
    });
</script>

<style lang="scss">
    @import "./theme/light/var";

    .homepage-record a {
        color: inherit;
    }
</style>
