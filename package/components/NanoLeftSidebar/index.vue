<template>
    <div
        v-show="visible"
        class="relative shrink-0 h-full"
        un-border="r-solid r-1px r-[var(--sidebar-border-color)]"
        un-flex="~ col"
        style="background: var(--sidebar-bg)"
    >
        <div class="relative w-full h-full flex flex-col">
            <NanoSidebarDir ref="dir"/>
            <!--<div class="grow w-full min-h-0"/>-->
        </div>
        <slot/>
    </div>
</template>

<script setup lang="ts">
    import NanoSidebarDir from '@NanoUI/NanoSidebarDir/index.vue';
    import { computed, ref } from 'vue';

    const dir = ref<InstanceType<typeof NanoSidebarDir> | null>(null);

    const visible = computed(() => {
        return dir.value?.visible ?? false;
    });
</script>

<style scoped lang="scss">

</style>
