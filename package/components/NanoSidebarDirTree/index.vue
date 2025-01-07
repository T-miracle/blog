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
    import { SidebarType } from '../../type';

    defineProps<{
        list: SidebarType[];
    }>();
</script>

<style scoped lang="scss">

</style>
