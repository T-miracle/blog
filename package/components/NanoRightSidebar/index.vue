<template>
    <div
        v-show="visible"
        class="relative shrink-0 h-full"
        un-border="l-solid l-1px l-[var(--sidebar-border-color)]"
        style="background: var(--sidebar-bg)"
    >
        <div class="relative h-full w-full flex flex-col">
            <NanoOutline
                v-if="!ctl.hideRightSidebar"
                ref="outline"
            />
        </div>
        <slot/>
    </div>
</template>

<script setup lang="ts">
    import NanoOutline from '@NanoUI/NanoOutline/index.vue';
    import { controllerStore } from '@store/controller';
    import { computed, ref } from 'vue';
    const ctl = controllerStore();

    const outline = ref<InstanceType<typeof NanoOutline> | null>(null);

    const visible = computed(() => {
        return outline.value?.visible ?? false;
    });
</script>

<style scoped lang="scss">

</style>
