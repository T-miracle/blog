<template>
    <div ref="body" class="relative grow flex items-stretch min-h-0">
        <NanoLeftActionBar v-if="!ctl.hideLeftActionBar" ref="leftActionBar"/>
        <NanoLeftSidebar v-if="!ctl.hideLeftSidebar" ref="leftSidebar">
            <!--draggable line-->
            <div
                ref="leftDraggableLine"
                class="absolute z-2 right--1 top-0 h-full w-1 bg-transparent cursor-col-resize"
            />
        </NanoLeftSidebar>
        <NanoMain ref="main"/>
        <NanoRightSidebar v-if="!ctl.hideRightSidebar" ref="rightSidebar">
            <!--draggable line-->
            <div
                ref="rightDraggableLine"
                class="absolute z-2 left--1 top-0 h-full w-1 bg-transparent cursor-col-resize"
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
    import { onMounted, ref } from 'vue';
    import { dragChangeWidth } from '../../utils/dragChangeWidth';

    const ctl = controllerStore();

    const body = ref<HTMLElement | null>(null);
    const leftActionBar = ref<InstanceType<typeof NanoLeftActionBar> | null>();
    const leftSidebar = ref<InstanceType<typeof NanoLeftSidebar> | null>();
    const rightSidebar = ref<InstanceType<typeof NanoRightSidebar> | null>();
    const rightActionBar = ref<InstanceType<typeof NanoRightActionBar> | null>();

    const leftDraggableLine = ref<HTMLDivElement | null>();
    const rightDraggableLine = ref<HTMLDivElement | null>();

    onMounted(() => {
        dragChangeWidth({
            parentEl: body.value!,
            targetEl: leftSidebar.value!.$el,
            dragEl: leftDraggableLine.value!,
            otherEls: [ rightSidebar.value!.$el, leftActionBar.value!.$el, rightActionBar.value!.$el ]
        });
        dragChangeWidth({
            parentEl: body.value!,
            targetEl: rightSidebar.value!.$el,
            dragEl: rightDraggableLine.value!,
            otherEls: [ leftSidebar.value!.$el, leftActionBar.value!.$el, rightActionBar.value!.$el ],
            reverseDirection: true
        });
    });
</script>

<style scoped lang="scss">

</style>
