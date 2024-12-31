<template>
    <OverlayScrollbarsComponent
        ref="scrollbar"
        class="shrink-0 w-full h-full"
        :options="onlyHorizontalScrollBarOptions"
        defer
    >
        <div class="relative h-full flex flex-nowrap items-center gap-1">
            <div
                v-for="(item, index) in pathList"
                :key="item.id"
                class="h-full flex-center shrink-0 gap-1 cursor-default"
                un-text="[var(--footer-path-text-color)] hover:[var(--footer-path-text-hover-color)]"
            >
                <div
                    class="text-[calc(var(--footer-size)*.4)] flex items-center path"
                    v-html="item.text"
                />
                <FoldArrow
                    v-if="index < pathList.length - 1"
                    class="rotate--90 w-3.25 h-3.25"
                />
            </div>
        </div>
    </OverlayScrollbarsComponent>
</template>

<script setup lang="ts">
    import { type SidebarItem, sidebarStore } from '@store/sidebar';
    import { computed, ref, watch } from 'vue';
    import FoldArrow from '@NanoIcon/foldArrow.vue';
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    import onlyHorizontalScrollBarOptions from '../../config/horizontalTopScrollBarOptions';
    import { useRoute } from 'vitepress';
    import { v4 } from 'uuid';

    const scrollbar = ref<any | null>(null);

    const route = useRoute();
    const store = sidebarStore();

    const paths = ref<SidebarItem[]>([]);

    watch(() => store.currentId, () => {
        paths.value = store.getCurrentPaths();
    }, { immediate: true });

    const pathList = computed(() => {
        if (paths.value.length === 0) {
            return [ {
                id: v4(),
                text: '💠' + route.data.title as string
            } ];
        } else {
            return paths.value;
        }
    });

    watch(() => pathList, () => {
        setTimeout(() => {
            scrollbar.value?.osInstance()?.elements()?.viewport?.scrollTo({ left: 9999, behavior: 'smooth' });
        }, 200);
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
