<template>
    <a
        href="/"
        class="relative flex-center px-1.2 gap-4 whitespace-nowrap"
    >
        <img
            class="w-[calc(var(--s)*0.72)] h-[calc(var(--s)*0.72)] rounded-[calc(var(--s)*.1)]"
            :src="theme.logo"
            alt="logo"
        />
        <span style="font: var(--header-title-font)">{{ site.title }}</span>
    </a>
</template>

<script setup lang="ts">
    import { useData } from 'vitepress';

    const { theme, site } = useData();
</script>

<style scoped lang="scss">

</style>
