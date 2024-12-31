<template>
    <div class="h-full w-a shrink-0 whitespace-nowrap">
        <p
            class="text-gray-500 text-[calc(var(--footer-size)*.4)] underline"
            v-html="theme.footer.copyright"
        />
    </div>
</template>

<script setup lang="ts">
    import { useData } from 'vitepress';

    const { theme } = useData();
</script>

<style scoped lang="scss">

</style>
