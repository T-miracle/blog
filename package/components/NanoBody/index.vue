<template>
    <div ref="container" class="relative grow flex items-stretch min-h-0">
        <NanoLeftActionBar v-if="!ctl.hideLeftActionBar" ref="leftActionBar"/>
        <NanoLeftSidebar v-if="!ctl.hideLeftSidebar" ref="leftSidebar" :style="leftSidebarLayout">
            <!--draggable line-->
            <div
                ref="leftDraggableLine"
                class="absolute z-4 right--2 top-0 h-full w-2 bg-transparent cursor-col-resize"
            />
        </NanoLeftSidebar>
        <NanoMain ref="main"/>
        <NanoRightSidebar v-if="!ctl.hideRightSidebar" ref="rightSidebar" :style="rightSidebarLayout">
            <!--draggable line-->
            <div
                ref="rightDraggableLine"
                class="absolute z-4 left-0 top-0 h-full w-2 bg-transparent cursor-col-resize"
            />
        </NanoRightSidebar>
        <NanoRightActionBar v-if="!ctl.hideRightActionBar" ref="rightActionBar"/>
    </div>
</template>

<script setup lang="ts">
    import NanoLeftSidebar from '@NanoUI/NanoLeftSidebar/index.vue';
    import NanoMain from '@NanoUI/NanoMain/index.vue';
    import NanoRightSidebar from '@NanoUI/NanoRightSidebar/index.vue';
    import NanoLeftActionBar from '@NanoUI/NanoLeftActionBar/index.vue';
    import NanoRightActionBar from '@NanoUI/NanoRightActionBar/index.vue';
    import { controllerStore } from '@store/controller';
    import { onMounted, ref, watch } from 'vue';
    import { drag } from '../../utils/drag';
    import { contentLayoutStore } from '@store/contentLayout';
    import { debounce } from 'lodash-es';

    const ctl = controllerStore();
    const layout = contentLayoutStore();

    const leftSidebarLayout = ref(layout.leftSidebarLayout);
    const rightSidebarLayout = ref(layout.rightSidebarLayout);

    watch(leftSidebarLayout, debounce((val) => {
        layout.setLeftSidebarLayout(val);
    }, 200), { deep: true });
    watch(rightSidebarLayout, debounce((val) => {
        layout.setRightSidebarLayout(val);
    }, 200), { deep: true });

    const container = ref<HTMLElement | null>(null);
    const leftActionBar = ref<InstanceType<typeof NanoLeftActionBar> | null>();
    const leftSidebar = ref<InstanceType<typeof NanoLeftSidebar> | null>();
    const rightSidebar = ref<InstanceType<typeof NanoRightSidebar> | null>();
    const rightActionBar = ref<InstanceType<typeof NanoRightActionBar> | null>();

    const leftDraggableLine = ref<HTMLDivElement | null>();
    const rightDraggableLine = ref<HTMLDivElement | null>();

    type OriginalDataType = {
        // container width
        cw: number;
        // left sidebar width
        lsw: number;
        // right sidebar width
        rsw: number;
        // left action bar width
        law: number;
        // right action bar width
        raw: number;
    };

    onMounted(() => {
        if (container.value && leftSidebar.value && rightSidebar.value && leftActionBar.value && rightActionBar.value) {
            const originalData = (): OriginalDataType => {
                return {
                    cw: container.value!.clientWidth,
                    lsw: leftSidebar.value!.$el.clientWidth,
                    rsw: rightSidebar.value!.$el.clientWidth,
                    law: leftActionBar.value!.$el.clientWidth,
                    raw: rightActionBar.value!.$el.clientWidth
                };
            };
            drag<OriginalDataType>({
                el: leftDraggableLine.value!,
                originalData,
                handlerFn: ({ x, originalData: { cw, law, lsw, rsw, raw } }) => {
                    const newWidth = lsw + x;
                    const otherElsWidth = law + raw + rsw;
                    if (cw - otherElsWidth - 400 < newWidth) {
                        return;
                    }
                    if (newWidth < 120) {
                        return;
                    }
                    leftSidebarLayout.value = { width: newWidth / cw * 100 + '%' };
                }
            });
            drag<OriginalDataType>({
                el: rightDraggableLine.value!,
                originalData,
                handlerFn: ({ x, originalData: { cw, law, lsw, rsw, raw } }) => {
                    const newWidth = rsw - x;
                    const otherElsWidth = law + raw + lsw;
                    if (cw - otherElsWidth - 400 < newWidth) {
                        return;
                    }
                    if (newWidth < 120) {
                        return;
                    }
                    rightSidebarLayout.value = { width: newWidth / cw * 100 + '%' };
                }
            });
        }
    });
</script>

<style scoped lang="scss">

</style>
