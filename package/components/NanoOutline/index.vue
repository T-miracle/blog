<template>
    <OverlayScrollbarsComponent class="w-full h-full" defer>
        <nav
            aria-labelledby="doc-outline-aria-label"
            class="float-left min-w-full"
            :class="{ 'block': headers.length > 0 }"
            ref="container"
        >
            <div
                aria-level="2"
                class="text-3.25 w-full px-4 py-1 flex justify-between items-center font-550"
                id="doc-outline-aria-label"
                role="heading"
            >
                <p>结构</p>
            </div>

            <div class="px-4">
                <NanoOutlineItem :headers="headers" :root="true"/>
            </div>
        </nav>
    </OverlayScrollbarsComponent>
</template>

<script setup lang="ts">
    import NanoOutlineItem from '@NanoUI/NanoOutlineItem/index.vue';
    import { shallowRef } from 'vue';
    import { onContentUpdated, useData } from 'vitepress';
    // @ts-expect-error outline
    import { getHeaders, type MenuItem } from 'vitepress/dist/client/theme-default/composables/outline';
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';

    const { frontmatter, theme } = useData();

    const headers = shallowRef<MenuItem[]>([]);

    onContentUpdated(() => {
        headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
    });
</script>

<style scoped lang="scss">

</style>
