<template>
    <div
        v-if="hasSidebar"
        class="relative flex-center h-full cursor-pointer"
        @click="openDir"
    >
        <p class="text-[calc(var(--s)*.4)]! line-height-[calc(var(--s)*.4)]">
            目录
        </p>
    </div>
</template>

<script setup lang="ts">
    import emitter from '../../emitter';
    // @ts-expect-error vitepress sidebar
    import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar';
    const { hasSidebar } = useSidebar();

    function openDir() {
        emitter.emit('open-dir-modal');
        emitter.emit('open-backdrop');
    }
</script>

<style scoped lang="scss">

</style>
