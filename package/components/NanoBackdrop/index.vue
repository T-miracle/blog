<template>
    <transition name="fade">
        <div
            v-if="openStatus"
            class="z-99 fixed w-screen h-screen bg-[rgba(0,0,0,.6)]"
            un-transition="opacity duration-.2s"
            @click="close"
        />
    </transition>
</template>

<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from 'vue';
    import emitter from '../../emitter';

    const openStatus = ref(false);

    function close() {
        openStatus.value = false;
        emitter.emit('close-nav-modal');
        emitter.emit('close-dir-modal');
    }

    onMounted(() => {
        emitter.on('open-backdrop', () => {
            openStatus.value = true;
        });
        emitter.on('close-backdrop', () => {
            openStatus.value = false;
        });
    });

    onUnmounted(() => {
        emitter.off('open-backdrop');
        emitter.off('close-backdrop');
    });
</script>

<style scoped lang="scss">
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-leave-active {
        transition-duration: .25s;
    }
</style>
