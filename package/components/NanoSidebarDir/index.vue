<template>
    <div
        v-show="visible"
        class="relative w-full grow min-h-0 flex flex-col"
    >
        <div
            class="shrink-0 relative w-full"
            :class="{ 'shadow-insert' : shadowShow }"
            un-h="[var(--sidebar-header-height)]"
            un-flex="~ justify-between items-center"
        >
            <p
                class="shrink-0 px-[var(--base-size)] font-550 font-size-[var(--sidebar-header-font-size)] select-none"
            >
                目录
            </p>
            <div
                class="flex-1 px-[var(--base-size)] opacity-0 hover:opacity-100 transition-opacity duration-100"
                un-flex="~ justify-start gap-[calc(var(--base-size)*.25)] row-reverse"
            >
                <button
                    class="relative text-gray-300 flex-center rounded-1"
                    un-w="[var(--sidebar-header-button-size)]"
                    un-h="[var(--sidebar-header-button-size)]"
                    un-hover="bg-[var(--sidebar-header-button-hover-bg)]"
                    @click="visible = false"
                >
                    <WindowMinimize class="w-3/4 h-full fill-[var(--sidebar-header-button-color)]"/>
                </button>
            </div>
        </div>
        <div class="grow w-full min-h-0">
            <OverlayScrollbarsComponent
                :key="key"
                ref="scrollbar"
                class="w-full h-full"
                :options="scrollbarOptions"
                defer
                @os-scroll="scroll"
            >
                <div
                    class="float-left pb-[calc(var(--base-size)*.75)] px-[calc(var(--base-size)*.75)] min-w-full w-auto"
                    :class="{ 'pt-[calc(var(--base-size)*.75)]' : ctl.hideLeftSidebar }"
                    @click.stop
                >
                    <NanoSidebarDirTree
                        v-if="store.sidebar.length"
                        :key="key"
                        :list="store.sidebar"
                    />
                    <div
                        v-else
                        class="text-gray-4 text-[calc(var(--base-size)*.8125)] select-none px-[calc(var(--base-size)*.25)]"
                    >
                        暂无目录...
                    </div>
                </div>
            </OverlayScrollbarsComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    // @ts-expect-error vitepress sidebar
    import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar';
    import NanoSidebarDirTree from '@NanoUI/NanoSidebarDirTree/index.vue';
    import scrollbarOptions from '../../config/scrollbarOptions';
    import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
    import { sidebarStore } from '@store/sidebar';
    import { useData, useRoute } from 'vitepress';
    import { debounce } from 'lodash-es';
    import WindowMinimize from '@NanoIcon/windowMinimize.vue';
    import emitter from '../../emitter';
    import { controllerStore } from '@store/controller';

    const key = ref(0);
    const { sidebarGroups } = useSidebar();
    const route = useRoute();
    const { path } = route;
    const store = sidebarStore();
    const ctl = controllerStore();
    const scrollbar = ref<any | null>(null);

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


    const { frontmatter } = useData();
    const visible = ref(!ctl.hideDir);

    watch(() => frontmatter.value?.layout, (value) => {
        if (ctl.hideDir) {
            return;
        }
        visible.value = !value;
    }, { immediate: true });

    onMounted(() => {
        emitter.on('toggle-dir-open-status', () => {
            ctl.hideDir = !ctl.hideDir;
            visible.value = !ctl.hideDir;
        });
    });

    onBeforeUnmount(() => {
        emitter.off('toggle-dir-open-status');
        scrollbar.value?.osInstance()?.destroy();
    });

    defineExpose({
        visible
    });
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
