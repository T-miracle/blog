<template>
    <header
        class="relative shrink-0 w-full h-[var(--header-size)] overflow-hidden"
        un-flex="~ justify-between"
        style="--s: var(--header-size); background: var(--header-bg)"
    >
        <!--header left-->
        <div class="relative h-full flex-center gap-.8">
            <NanoLogo/>
            <NanoHeaderTopNav v-if="!ctl.hideHeaderTopNav"/>
            <NanoMiniHeaderTopNav v-else/>
        </div>
        <!--header right-->
        <div class="relative h-full flex flex-row-reverse">
            <NanoWindowController/>
        </div>
    </header>
</template>

<script setup lang="ts">
    import NanoLogo from '@NanoUI/NanoLogo/index.vue';
    import NanoHeaderTopNav from '@NanoUI/NanoHeaderTopNav/index.vue';
    import NanoMiniHeaderTopNav from '@NanoUI/NanoMiniHeaderTopNav/index.vue';
    import NanoWindowController from '@NanoUI/NanoWindowController/index.vue';
    import { controllerStore } from '@store/controller';
    const ctl = controllerStore();
</script>

<style scoped lang="scss">

</style>
