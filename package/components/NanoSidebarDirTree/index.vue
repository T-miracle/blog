<template>
    <NanoSidebarDirTree
        v-for="item in list"
        :key="item.text"
        :level="0"
        :item="item"
    />
</template>

<script setup lang="ts">
    import NanoSidebarDirTree from '@NanoUI/NanoSidebarDirItemTree/index.vue';
    import type { DefaultTheme } from 'vitepress/theme';
    import { SidebarItem } from '@store/sidebar';

    defineProps<{
        list: SidebarItem[];
    }>();
</script>

<style scoped lang="scss">

</style>
