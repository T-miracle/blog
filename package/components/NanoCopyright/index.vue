<template>
    <p v-html="theme.footer.copyright"/>
</template>

<script setup lang="ts">
    import { useData } from 'vitepress';

    const { theme } = useData();
</script>

<style scoped lang="scss">

</style>
