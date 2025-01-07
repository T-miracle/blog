<template>
    <OverlayScrollbarsComponent
        ref="scrollbar"
        class="shrink-0 w-full h-full"
        :options="onlyHorizontalScrollBarOptions"
        defer
    >
        <div class="relative h-full flex flex-nowrap items-center gap-[calc(var(--base-size)*.25)]">
            <div
                v-for="(item, index) in paths"
                :key="item.id"
                class="h-full flex-center shrink-0 gap-[calc(var(--base-size)*.25)] cursor-default"
                un-text="[var(--footer-path-text-color)] hover:[var(--footer-path-text-hover-color)]"
            >
                <div
                    class="flex items-center path"
                >
                    <p v-if="item.icon" class="flex items-center" v-html="item.icon"/>
                    <p class="flex items-center text-[calc(var(--base-size)*.875)]!" v-html="item.text"/>
                </div>
                <FoldArrow
                    v-if="index < paths.length - 1"
                    class="rotate--90 w-[calc(var(--base-size)*.875)] h-[calc(var(--base-size)*.875)]"
                />
            </div>
        </div>
    </OverlayScrollbarsComponent>
</template>

<script setup lang="ts">
    import { sidebarStore } from '@store/sidebar';
    import { onMounted, ref, watch } from 'vue';
    import FoldArrow from '@NanoIcon/foldArrow.vue';
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    import onlyHorizontalScrollBarOptions from '../../config/horizontalTopScrollBarOptions';
    import { v4 } from 'uuid';
    import emitter from '../../emitter';
    import { useData, useRoute } from 'vitepress';
    import { flatMap } from 'lodash-es';
    import { SidebarType } from '../../type';

    const { path } = useRoute();
    const { theme } = useData();

    const scrollbar = ref<InstanceType<typeof OverlayScrollbarsComponent> | null>(null);
    const store = sidebarStore();

    const paths = ref<SidebarType[]>([]);
    const navList = theme.value.nav;

    watch(() => store.currentId, () => {
        if (store.currentId) {
            paths.value = store.getCurrentPaths();
        } else {
            const navFlat = flatMap(navList, e => e.items || e);
            const currentNav = navFlat.find(e => e.link === path);
            if (currentNav) {
                paths.value = [ {
                    id: v4(),
                    text: '💠' + currentNav.text
                } ];
            }
        }
    }, { immediate: true });

    watch(() => paths, () => {
        setTimeout(() => {
            scrollbar.value?.osInstance()?.elements()?.viewport?.scrollTo({ left: 9999, behavior: 'smooth' });
        }, 200);
    }, { immediate: true });

    onMounted(() => {
        emitter.on('change-path', (title: string) => {
            paths.value = [ {
                id: v4(),
                text: '💠' + title
            } ];
        });
        scrollbar.value?.osInstance()?.destroy();
    });
</script>

<style scoped lang="scss">
    .path {
        :deep(.icon) {
            display: inline-block;
            width: calc(var(--base-size) * 1.125);
            height: calc(var(--base-size) * 1.125);
            margin-right: calc(var(--base-size) * .5);
        }
    }
</style>
