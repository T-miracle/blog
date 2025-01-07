<template>
    <div
        v-show="openStatus"
        class="relative w-full grow min-h-0"
    >
        <div
            class="shrink-0 relative w-full"
            :class="{ 'shadow-insert' : shadowShow }"
            un-h="[var(--sidebar-header-height)]"
            un-flex="~ justify-between items-center"
        >
            <p class="shrink-0 px-4 font-550 font-size-[var(--sidebar-header-font-size)] select-none">
                结构
            </p>
            <div
                class="flex-1 px-4 opacity-0 hover:opacity-100 transition-opacity duration-100"
                un-flex="~ justify-start gap-1 row-reverse"
            >
                <button
                    class="relative text-gray-300 flex-center rounded-1"
                    un-w="[var(--sidebar-header-button-size)]"
                    un-h="[var(--sidebar-header-button-size)]"
                    un-hover="bg-[var(--sidebar-header-button-hover-bg)]"
                    @click="openStatus = false"
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
            defer
            @os-scroll="scroll"
        >
            <div
                class="float-left pb-3 px-4 min-w-full w-auto"
                @click.stop
            >
                <NanoOutlineItem
                    v-if="headers.length"
                    :headers="headers"
                    :root="true"
                />
                <div
                    v-else
                    class="text-gray-4 text-3.25 select-none"
                >
                    暂无结构...
                </div>
            </div>
        </OverlayScrollbarsComponent>
    </div>
</template>

<script setup lang="ts">
    import NanoOutlineItem from '@NanoUI/NanoOutlineItem/index.vue';
    import { nextTick, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue';
    import { onContentUpdated, useData } from 'vitepress';
    // @ts-expect-error outline
    import { getHeaders } from 'vitepress/dist/client/theme-default/composables/outline';
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    import { controllerStore } from '@store/controller';
    import emitter from '../../emitter';
    import scrollbarOptions from '../../config/scrollbarOptions';
    import WindowMinimize from '@NanoIcon/windowMinimize.vue';
    import { debounce } from 'lodash-es';

    const ctl = controllerStore();
    const { frontmatter, theme } = useData();

    const key = ref(0);
    const shadowShow = ref(false);
    const headers = shallowRef<any[]>([]);
    const openStatus = ref<boolean>(true);
    const scrollbar = ref<any | null>(null);

    const scroll = debounce((e: any) => {
        shadowShow.value = e.elements().viewport.scrollTop > 0;
    }, 80, { leading: true, trailing: true });

    watch(() => frontmatter.value?.layout, (value) => {
        openStatus.value = !value;
    }, { immediate: true });

    onContentUpdated(() => {
        headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
        console.log('headers', headers.value);
    });

    onMounted(() => {
        nextTick(() => {
            if (!ctl.hideRightSidebar) {
                headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
            }
        });

        emitter.on('toggle-structure-open-status', () => {
            openStatus.value = !openStatus.value;
        });
    });

    onBeforeUnmount(() => {
        emitter.off('toggle-structure-open-status');
        scrollbar.value?.osInstance()?.destroy();
    });

    defineExpose({ openStatus });
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
