<template>
    <div
        class="absolute left-[var(--action-bar-size)] top-0 z-20 h-full w-[var(--sidebar-left-size)]"
        un-p="t-[var(--header-size)] b-[var(--footer-size)]"
        un-border="r-solid r-1px r-[var(--sidebar-border-color)]"
        style="background: var(--sidebar-bg)"
    >
        <div class="relative w-full h-full">
            <div
                class="absolute top-0 left-0 w-full h-full z-1"
                un-border="b-1px b-solid b-[var(--sidebar-border-color)]"
            >
                <NanoSidebarDir/>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-0"/>
        </div>
        <!--draggable line-->
        <div class="absolute z-2 right--1 top-0 h-full w-1 bg-transparent cursor-col-resize"/>
    </div>
</template>

<script setup lang="ts">
    import NanoSidebarDir from '@NanoUI/NanoSidebarDir/index.vue';
</script>

<style scoped lang="scss">

</style>
