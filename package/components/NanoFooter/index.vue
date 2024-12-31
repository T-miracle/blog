<template>
    <footer
        class="absolute left-0 bottom-0 z-100 w-full h-[var(--footer-size)] overflow-hidden"
        un-border="t-solid t-1px t-[var(--footer-border-color)]"
        un-flex="~ items-center justify-between shrink-0"
        style="background: var(--footer-bg);"
    >
        <div class="relative h-full min-w-0 grow flex items-center px-4">
            <NanoPaths v-if="!ctl.hidePaths"/>
        </div>
        <div class="relative h-full min-w-0 grow flex items-center flex-row-reverse px-4">
            <NanoCopyright v-if="!ctl.hideCopyright"/>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import NanoCopyright from '@NanoUI/NanoCopyright/index.vue';
    import NanoPaths from '@NanoUI/NanoPaths/index.vue';
    import { controllerStore } from '@store/controller';
    const ctl = controllerStore();
</script>

<style scoped lang="scss">

</style>
