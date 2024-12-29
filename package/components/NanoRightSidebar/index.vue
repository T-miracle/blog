<template>
    <div
        class="absolute right-[var(--action-bar-size)] top-0 z-20 h-full w-[var(--sidebar-size)]"
        un-border="l-solid l-1px l-[var(--sidebar-border-color)]"
        un-p="t-[var(--header-size)] b-[var(--footer-size)]"
        style="background: var(--sidebar-bg)"
    >
        <div class="relative h-full w-full">
            <VPDocAsideOutline/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import VPDocAsideOutline from 'vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue';
</script>

<style scoped lang="scss">

</style>
