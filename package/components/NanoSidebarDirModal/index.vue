<template>
    <div
        v-if="ctl.showDirModal"
        class="nav-area fixed z-100 w-72vw h-screen bg-white flex flex-col"
        :class="{ 'open': openStatus }"
    >
        <NanoSidebarDir/>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from 'vue';
    import NanoSidebarDir from '@NanoUI/NanoSidebarDir/index.vue';
    import { controllerStore } from '@store/controller';

    const ctl = controllerStore();

    import emitter from '../../emitter';

    const openStatus = ref(false);

    onMounted(() => {
        emitter.on('open-dir-modal', () => {
            openStatus.value = true;
        });
        emitter.on('close-dir-modal', () => {
            openStatus.value = false;
        });
    });

    onUnmounted(() => {
        emitter.off('open-dir-modal');
        emitter.off('close-dir-modal');
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

    .nav-area {
        transform: translateX(-100%);
        transition: transform 0.25s ease;
        overscroll-behavior: contain;
    }

    .nav-area.open {
        transform: translateX(0);
        transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    }
</style>
