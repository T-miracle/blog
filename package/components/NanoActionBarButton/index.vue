<template>
    <button
        class="w-[calc(var(--action-bar-size)*.72)] h-[calc(var(--action-bar-size)*.72)] cursor-pointer group"
        un-p="[calc(var(--action-bar-size)*.1)]"
        un-flex="center"
        un-rounded="[calc(var(--action-bar-size)*.2)]"
        :un-hover="disabled ? 'bg-transparent' : 'bg-[var(--action-bar-btn-hover-bg)]'"
        :un-focus="disabled ? 'bg-transparent' : 'bg-[var(--action-bar-btn-focus-bg)]'"
        :class="{ 'cursor-not-allowed! opacity-50' : disabled }"
        @click.stop="triggerClickFn"
    >
        <Component
            :is="button.icon"
            class="w-full h-full fill-[#A0A3AD]"
            :class="{ 'group-hover:fill-[#FFFFFF]' : !disabled }"
        />
    </button>
</template>

<script setup lang="ts">
    import { NanoActionBarButtonType } from '@NanoUI/NanoActionBarButton/type';
    import { computed } from 'vue';

    const props = defineProps<{
        button: NanoActionBarButtonType
    }>();

    const disabled = computed(() => {
        return props.button.disabled ? props.button.disabled() : false;
    });

    function triggerClickFn() {
        if (disabled.value) return;
        props.button.clickFn();
    }
</script>

<style scoped lang="scss">

</style>
