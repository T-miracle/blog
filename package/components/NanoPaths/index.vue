<template>
    <OverlayScrollbarsComponent
        class="shrink-0 w-full h-full"
        :options="onlyHorizontalScrollBarOptions"
        defer
    >
        <div class="relative h-full flex flex-nowrap items-center gap-1">
            <div
                v-for="(item, index) in paths"
                :key="item.id"
                class="flex-center shrink-0 gap-1 cursor-default"
                un-text="[var(--footer-path-text-color)] hover:[var(--footer-path-text-hover-color)]"
            >
                <div class="text-[calc(var(--footer-size)*.4)] flex items-center path" v-html="item.text"></div>
                <FoldArrow
                    v-if="index < paths.length - 1"
                    class="rotate--90 w-3.25 h-3.25"
                />
            </div>
        </div>
    </OverlayScrollbarsComponent>
</template>

<script setup lang="ts">
    import { type SidebarItem, sidebarStore } from '@store/sidebar';
    import { ref, watch } from 'vue';
    import FoldArrow from '@NanoIcon/foldArrow.vue';
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    import onlyHorizontalScrollBarOptions from '../../config/horizontalTopScrollBarOptions';

    const store = sidebarStore();

    const paths = ref<SidebarItem[]>([]);

    watch(() => store.currentId, () => {
        paths.value = store.getCurrentPaths();
    }, { immediate: true });
</script>

<style scoped lang="scss">
    .path {
        :deep(.icon) {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            margin-right: .5rem;
        }
    }
</style>
