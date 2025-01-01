<template>
    <header
        class="shrink-0 z-100 w-full h-[var(--header-size)]"
        un-flex="~ justify-between"
        un-border="b-solid b-1px b-[var(--header-border-color)]"
        style="--s: var(--header-size); background: var(--header-bg)"
    >
        <!--header left-->
        <div class="relative flex-center gap-.8">
            <NanoLogo/>
            <NanoHeaderTopNav v-if="!ctl.hideHeaderTopNav"/>
        </div>
        <!--header right-->
        <div class="relative flex flex-row-reverse">
            <NanoWindowController/>
        </div>
    </header>
</template>

<script setup lang="ts">
    import NanoLogo from '@NanoUI/NanoLogo/index.vue';
    import NanoHeaderTopNav from '@NanoUI/NanoHeaderTopNav/index.vue';
    import NanoWindowController from '@NanoUI/NanoWindowController/index.vue';
    import { controllerStore } from '@store/controller';
    const ctl = controllerStore();
</script>

<style scoped lang="scss">

</style>
