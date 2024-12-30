<template>
    <div class="relative w-full h-full">
        <div
            class="shrink-0 relative text-3.25 w-full px-4 py-1 font-550"
            :class="{ 'shadow-insert' : shadowShow }"
            un-flex="~ justify-between items-center"
        >
            <p class="font-550">目录</p>
        </div>
        <OverlayScrollbarsComponent
            :key="key"
            ref="scrollbar"
            class="w-full h-[calc(100%-2rem)]"
            :options="scrollbarOptions"
            @os-scroll="scroll"
            defer
        >
            <div
                class="float-left pb-3 px-3 min-w-full w-auto"
                @click.stop
            >
                <NanoSidebarDirTree
                    :key="key"
                    :list="store.sidebar"
                />
            </div>
        </OverlayScrollbarsComponent>
    </div>
</template>

<script setup lang="ts">
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    // @ts-expect-error vitepress sidebar
    import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar';
    import NanoSidebarDirTree from '@NanoUI/NanoSidebarDirTree/index.vue';
    import scrollbarOptions from '../../config/scrollbarOptions';
    import { onMounted, ref, watch } from 'vue';
    import { sidebarStore } from '@store/sidebar';
    import { useRoute } from 'vitepress';
    import { debounce } from 'lodash-es';

    const key = ref(0);
    const { sidebarGroups, hasSidebar } = useSidebar();
    const route = useRoute();
    const { path } = route;
    const store = sidebarStore();

    watch(
        () => [ sidebarGroups, path ],
        ([ value, value1 ]) => {
            store.setSidebar(value.value);
            store.positionSidebar(value1);
            key.value += 1;
        },
        {
            immediate: true,
            deep: true
        }
    );

    const shadowShow = ref(false);
    const scroll = debounce((e: any) => {
        shadowShow.value = e.elements().viewport.scrollTop > 0;
    }, 100, { leading: true, trailing: true });
</script>

<style scoped lang="scss">
    .shadow-insert::before {
        position: absolute;
        bottom: -4px;
        left: 0;
        border-bottom: 2px;
        display: block;
        content: '';
        height: 10px;
        width: 100%;
        box-shadow: inset 0 4px 4px -4px rgba(0, 0, 0, 0.05);
        overflow: hidden;
        touch-action: none;
        pointer-events: none;
    }
</style>
