<template>
    <div class="relative h-screen w-screen">
        <NanoHeader/>
        <NanoBody/>
        <NanoFooter/>
    </div>
</template>

<script setup lang="ts">
    import NanoHeader from '@NanoUI/NanoHeader/index.vue';
    import NanoBody from '@NanoUI/NanoBody/index.vue';
    import NanoFooter from '@NanoUI/NanoFooter/index.vue';
</script>

<style lang="scss">
    @import "./theme/light/var";
</style>
