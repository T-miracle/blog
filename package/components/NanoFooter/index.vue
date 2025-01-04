<template>
    <footer
        class="relative shrink-0 w-full h-[var(--footer-size)]"
        un-border="t-solid t-1px t-[var(--footer-border-color)]"
        un-flex="~ items-center justify-between shrink-0"
        style="background: var(--footer-bg);"
    >
        <div class="relative h-full min-w-0 grow flex items-center px-4">
            <NanoFooterDirOpenButton v-if="ctl.showDirModal"/>
            <NanoPaths v-if="!ctl.hidePaths"/>
        </div>
        <div class="relative h-full min-w-0 grow flex items-center flex-row-reverse px-4">
            <NanoCopyright v-if="!ctl.hideCopyright"/>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import NanoFooterDirOpenButton from '@NanoUI/NanoFooterDirOpenButton/index.vue';
    import NanoCopyright from '@NanoUI/NanoCopyright/index.vue';
    import NanoPaths from '@NanoUI/NanoPaths/index.vue';
    import { controllerStore } from '@store/controller';
    const ctl = controllerStore();
</script>

<style scoped lang="scss">

</style>
