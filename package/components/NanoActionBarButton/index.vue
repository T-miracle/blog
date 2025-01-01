<template>
    <button
        class="w-[calc(var(--action-bar-size)*.72)] h-[calc(var(--action-bar-size)*.72)] cursor-pointer group"
        un-p="[calc(var(--action-bar-size)*.1)]"
        un-flex="center"
        un-rounded="[calc(var(--action-bar-size)*.2)]"
        un-hover="bg-[var(--action-bar-btn-hover-bg)]"
        un-focus="bg-[var(--action-bar-btn-focus-bg)]"
        @click="button.clickFn"
    >
        <Component
            :is="button.icon"
            class="w-full h-full fill-[#A0A3AD] group-focus:fill-white"
        />
    </button>
</template>

<script setup lang="ts">
    import { NanoActionBarButtonType } from '@NanoUI/NanoActionBarButton/type';

    defineProps<{
        button: NanoActionBarButtonType
    }>();
</script>

<style scoped lang="scss">

</style>
