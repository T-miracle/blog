<template>
    <OverlayScrollbarsComponent
        class="w-full h-full"
        defer
    >
        <nav
            ref="container"
            aria-labelledby="doc-outline-aria-label"
            class="float-left min-w-full"
            :class="{ 'block': headers.length > 0 }"
        >
            <div
                id="doc-outline-aria-label"
                aria-level="2"
                class="text-3.25 w-full px-4 py-1 flex justify-between items-center font-550"
                role="heading"
            >
                <p>结构</p>
            </div>

            <div class="px-4">
                <NanoOutlineItem
                    :headers="headers"
                    :root="true"
                />
            </div>
        </nav>
    </OverlayScrollbarsComponent>
</template>

<script setup lang="ts">
    import NanoOutlineItem from '@NanoUI/NanoOutlineItem/index.vue';
    import { nextTick, onMounted, shallowRef } from 'vue';
    import { onContentUpdated, useData } from 'vitepress';
    // @ts-expect-error outline
    import { getHeaders } from 'vitepress/dist/client/theme-default/composables/outline';
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    import { controllerStore } from '@store/controller';

    const ctl = controllerStore();

    const { frontmatter, theme } = useData();

    const headers = shallowRef<any[]>([]);

    onContentUpdated(() => {
        headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
    });

    onMounted(() => {
        nextTick(() => {
            if (!ctl.hideRightSidebar) {
                headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
            }
        });
    });
</script>

<style scoped lang="scss">

</style>
