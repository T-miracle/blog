<template>
    <div
        v-if="ctl.showDirModal"
        class="absolute top-0 left-0 z-100 w-0 h-full transition-all duration-250 ease-in-out overflow-hidden"
        :class="{ 'w-80!': openStatus }"
    >
        <div class="h-full w-full bg-white flex flex-col rounded-[6px_0_0_6px]">
            <NanoSidebarDir/>
        </div>
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

</style>
