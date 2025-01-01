<template>
    <div
        class="relative flex-center h-full cursor-pointer"
        @click="openDir"
    >
        <p class="text-[calc(var(--footer-size)*.4)] line-height-[calc(var(--footer-size)*.4)]">
            目录
        </p>
    </div>
</template>

<script setup lang="ts">
    import emitter from '../../emitter';

    function openDir() {
        emitter.emit('open-dir-modal');
        emitter.emit('open-backdrop');
    }
</script>

<style scoped lang="scss">

</style>
