<template>
    <div class="relative w-full h-full">
        <div
            class="shrink-0 relative w-full"
            :class="{ 'shadow-insert' : shadowShow }"
            un-h="[var(--sidebar-header-height)]"
            un-flex="~ justify-between items-center"
        >
            <p class="shrink-0 px-4 font-550 font-size-[var(--sidebar-header-font-size)]">目录</p>
            <div
                class="flex-1 px-4 opacity-0 hover:opacity-100 transition-opacity duration-100"
                un-flex="~ justify-start gap-1 row-reverse"
            >
                <button
                    class="relative text-gray-300 flex-center rounded-1"
                    un-w="[var(--sidebar-header-button-size)]"
                    un-h="[var(--sidebar-header-button-size)]"
                    un-hover="bg-[var(--sidebar-header-button-hover-bg)]"
                >
                    <WindowMinimize class="w-3/4 h-full fill-[var(--sidebar-header-button-color)]"/>
                </button>
            </div>
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
    import { ref, watch } from 'vue';
    import { sidebarStore } from '@store/sidebar';
    import { useRoute } from 'vitepress';
    import { debounce } from 'lodash-es';
    import WindowMinimize from '@NanoIcon/windowMinimize.vue';

    const key = ref(0);
    const { sidebarGroups } = useSidebar();
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
    }, 80, { leading: true, trailing: true });
</script>

<style scoped lang="scss">
    .shadow-insert::before {
        position: absolute;
        bottom: -1px;
        left: 0;
        display: block;
        content: '';
        width: 100%;
        height: 1px;
        background-color: var(--sidebar-border-color);
        overflow: hidden;
        touch-action: none;
        pointer-events: none;
    }
</style>
