<template>
    <div class="absolute h-full w-full flex flex-col">
        <NanoHeader/>
        <NanoBody/>
        <NanoFooter/>

        <NanoBackdrop/>
        <NanoNavModal/>
        <NanoSidebarDirModal/>
    </div>
</template>

<script setup lang="ts">
    import NanoHeader from '@NanoUI/NanoHeader/index.vue';
    import NanoBody from '@NanoUI/NanoBody/index.vue';
    import NanoFooter from '@NanoUI/NanoFooter/index.vue';
    import NanoBackdrop from '@NanoUI/NanoBackdrop/index.vue';
    import NanoNavModal from '@NanoUI/NanoNavModal/index.vue';
    import NanoSidebarDirModal from '@NanoUI/NanoSidebarDirModal/index.vue';
</script>

<style scoped lang="scss">
</style>

