<template>
    <header
        class="nano-header relative shrink-0 w-full h-[var(--s)] rounded-[6px_6px_0_0]"
        :class="{ 'rounded-0!': ctl.onlyFullscreen }"
        un-border="b-solid b-1px b-[var(--footer-border-color)]"
        un-flex="~ justify-between"
    >
        <!--header left-->
        <div class="relative h-full flex-center">
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
    .nano-header {
        background: var(--header-bg);
        --s: calc(var(--base-size) * 2.2);
    }

    @media screen and (max-width: 1280px) {
        .nano-header {
            --s: calc(var(--base-size) * 2.8) !important;
        }
    }
</style>
