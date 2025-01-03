<template>
    <div
        class="relative shrink-0 h-full w-[var(--sidebar-left-size)]"
        :class="{ 'w-0': !openStatus }"
        un-border="r-solid r-1px r-[var(--sidebar-border-color)]"
        un-flex="~ col"
        style="background: var(--sidebar-bg)"
    >
        <div class="relative w-full h-full flex flex-col">
            <NanoSidebarDir ref="dir"/>
            <div class="grow w-full h-0"/>
        </div>
        <!--draggable line-->
        <div class="absolute z-2 right--1 top-0 h-full w-1 bg-transparent cursor-col-resize"/>
    </div>
</template>

<script setup lang="ts">
    import NanoSidebarDir from '@NanoUI/NanoSidebarDir/index.vue';
    import { computed, ref } from 'vue';

    const dir = ref<InstanceType<typeof NanoSidebarDir> | null>(null);

    const openStatus = computed(() => {
        return dir.value?.openStatus ?? false;
    });
</script>

<style scoped lang="scss">

</style>
