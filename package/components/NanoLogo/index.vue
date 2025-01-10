<template>
    <div class="relative flex-center px-[calc(var(--s)*0.25)] whitespace-nowrap pointer-events-none select-none">
        <img
            class="w-[calc(var(--s)*0.72)] h-[calc(var(--s)*0.72)] rounded-[calc(var(--s)*.1)]"
            :src="theme.logo"
            alt="logo"
        />
    </div>
</template>

<script setup lang="ts">
    import { useData } from 'vitepress';

    const { theme } = useData();
</script>

<style scoped lang="scss">

</style>
