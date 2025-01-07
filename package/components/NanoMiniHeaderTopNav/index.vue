<template>
    <div class="relative h-[var(--s)] flex items-center px-[calc(var(--s)*.15)]">
        <p
            class="text-[calc(var(--s)*.4)]! cursor-pointer"
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
