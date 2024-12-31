<template>
    <div
        class="absolute right-[var(--action-bar-size)] top-0 z-20 h-full w-[var(--sidebar-right-size)]"
        un-border="l-solid l-1px l-[var(--sidebar-border-color)]"
        un-p="t-[var(--header-size)] b-[var(--footer-size)]"
        style="background: var(--sidebar-bg)"
    >
        <div class="relative h-full w-full">
            <NanoOutline v-if="!ctl.hideRightSidebar"/>
        </div>
        <!--draggable line-->
        <div class="absolute z-2 left--1 top-0 h-full w-1 bg-transparent cursor-col-resize"/>
    </div>
</template>

<script setup lang="ts">
    import NanoOutline from '@NanoUI/NanoOutline/index.vue';
    import { controllerStore } from '@store/controller';
    const ctl = controllerStore();
</script>

<style scoped lang="scss">

</style>
