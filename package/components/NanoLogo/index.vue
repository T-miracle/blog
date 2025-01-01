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
        <span
            class="font-bold text-[calc(var(--header-size)*.4)]"
            style="font-family: var(--header-title-font-family), serif"
        >
            {{ site.title }}
        </span>
    </a>
</template>

<script setup lang="ts">
    import { useData } from 'vitepress';

    const { theme, site } = useData();
</script>

<style scoped lang="scss">

</style>
