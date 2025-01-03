<template>
    <div
        class="relative shrink-0 h-full w-[var(--sidebar-right-size)]"
        :class="{ 'w-0': !openStatus }"
        un-border="l-solid l-1px l-[var(--sidebar-border-color)]"
        style="background: var(--sidebar-bg)"
    >
        <div class="relative h-full w-full flex flex-col">
            <NanoOutline
                v-if="!ctl.hideRightSidebar"
                ref="outline"
            />
        </div>
        <!--draggable line-->
        <div class="absolute z-2 left--1 top-0 h-full w-1 bg-transparent cursor-col-resize"/>
    </div>
</template>

<script setup lang="ts">
    import NanoOutline from '@NanoUI/NanoOutline/index.vue';
    import { controllerStore } from '@store/controller';
    import { computed, ref } from 'vue';
    const ctl = controllerStore();

    const outline = ref<InstanceType<typeof NanoOutline> | null>(null);

    const openStatus = computed(() => {
        return outline.value?.openStatus ?? false;
    });
</script>

<style scoped lang="scss">

</style>
