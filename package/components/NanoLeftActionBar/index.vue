<template>
    <div
        class="absolute left-0 top-0 z-20 h-full w-[var(--action-bar-size)]"
        un-border="r-1px r-solid r-[var(--action-bar-border-color)]"
        un-p="t-[var(--header-size)] b-[var(--footer-size)]"
        un-flex="~ col items-center justify-between"
        style="background: var(--action-bar-bg)"
    >
        <div
            class="w-full h-full py-1"
            un-flex="~ col gap-1 items-center"
        >
            <button
                v-for="item in actionLeftBarTopBtnList"
                :key="item.id"
                class="w-[calc(var(--action-bar-size)*.72)] h-[calc(var(--action-bar-size)*.72)] cursor-pointer group"
                un-p="[calc(var(--action-bar-size)*.1)]"
                un-flex="center"
                un-rounded="[calc(var(--action-bar-size)*.2)]"
                un-hover="bg-[var(--action-bar-btn-hover-bg)]"
                un-focus="bg-[var(--action-bar-btn-focus-bg)]"
            >
                <Component
                    :is="item.icon"
                    class="w-full h-full fill-[#A0A3AD] group-focus:fill-white"
                />
            </button>
        </div>
        <div
            class="w-full h-full py-1"
            un-flex="~ col col-reverse gap-1 items-center"
        >
            <button
                v-for="item in actionLeftBarBottomBtnList"
                :key="item.id"
                class="w-[calc(var(--action-bar-size)*.8)] h-[calc(var(--action-bar-size)*.8)] cursor-pointer"
                un-p="[calc(var(--action-bar-size)*.1)]"
                un-flex="center"
                un-rounded="[calc(var(--action-bar-size)*.2)]"
                un-hover="bg-[var(--action-bar-btn-hover-bg)]"
                un-focus="bg-[var(--action-bar-btn-focus-bg)]"
            >
                <Component
                    :is="item.icon"
                    class="w-full h-full fill-[#A0A3AD] group-focus:fill-white"
                />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import ProjectIcon from '@NanoIcon/project.vue';
    import { ComponentCustomOptions, ref, shallowRef } from 'vue';

    const actionLeftBarTopBtnList = ref<{ id: string, icon: ComponentCustomOptions }[]>([
        { id: 'project', icon: shallowRef(ProjectIcon) }
    ]);

    const actionLeftBarBottomBtnList = ref<{ id: string, icon: ComponentCustomOptions }[]>([]);
</script>

<style scoped lang="scss">

</style>
