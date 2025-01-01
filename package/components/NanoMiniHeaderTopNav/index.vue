<template>
    <div class="relative h-[var(--header-size)] flex items-center px-4">
        <p
            class="text-[calc(var(--header-size)*.4)] cursor-pointer"
            @click="openNavModal"
        >
            导航
        </p>
    </div>
</template>

<script setup lang="ts">
    import emitter from '../../emitter';

    function openNavModal() {
        emitter.emit('open-backdrop');
        emitter.emit('open-nav-modal');
    }
</script>

<style scoped lang="scss">

</style>
