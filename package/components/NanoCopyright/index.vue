<template>
    <p
        class="text-gray-500 text-[calc(var(--footer-size)*.4)] underline"
        v-html="theme.footer.copyright"
    />
</template>

<script setup lang="ts">
    import { useData } from 'vitepress';

    const { theme } = useData();
</script>

<style scoped lang="scss">

</style>
