<template>
    <NanoLeftActionBar v-if="!ctl.hideActionBar"/>
    <NanoLeftSidebar v-if="!ctl.hideLeftSidebar"/>
    <NanoMain/>
    <NanoRightSidebar v-if="!ctl.hideRightSidebar"/>
    <NanoRightActionBar v-if="!ctl.hideActionBar"/>
</template>

<script setup lang="ts">
    import NanoLeftSidebar from '@NanoUI/NanoLeftSidebar/index.vue';
    import NanoMain from '@NanoUI/NanoMain/index.vue';
    import NanoRightSidebar from '@NanoUI/NanoRightSidebar/index.vue';
    import NanoLeftActionBar from '@NanoUI/NanoLeftActionBar/index.vue';
    import NanoRightActionBar from '@NanoUI/NanoRightActionBar/index.vue';
    import { controllerStore } from '@store/controller';
    const ctl = controllerStore();
</script>

<style scoped lang="scss">

</style>
