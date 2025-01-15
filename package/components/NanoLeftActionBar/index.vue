<template>
    <div
        class="relative shrink-0 h-full w-[var(--action-bar-size)]"
        un-border="r-1px r-solid r-[var(--action-bar-border-color)]"
        un-flex="~ col items-center justify-between"
        style="background: var(--action-bar-bg)"
    >
        <div
            class="w-full h-full py-1"
            un-flex="~ col gap-1 items-center"
        >
            <NanoActionBarButton
                v-for="item in actionLeftBarTopBtnList"
                :key="item.id"
                :button="item"
            />
        </div>
        <div
            class="w-full h-full py-1"
            un-flex="~ col col-reverse gap-1 items-center"
        >
            <NanoActionBarButton
                v-for="item in actionLeftBarBottomBtnList"
                :key="item.id"
                :button="item"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import NanoActionBarButton from '@NanoUI/NanoActionBarButton/index.vue';
    import ProjectIcon from '@NanoIcon/project.vue';
    import { ref, shallowRef } from 'vue';
    import emitter from '../../emitter';
    import { type NanoActionBarButtonType } from '@NanoUI/NanoActionBarButton/type';
    import { useData } from 'vitepress';
    const { frontmatter } = useData();

    const actionLeftBarTopBtnList = ref<Array<NanoActionBarButtonType>>([
        {
            id: 'project',
            icon: shallowRef(ProjectIcon),
            disabled: () => {
                return [ 'page' ].includes(frontmatter.value?.layout);
            },
            clickFn: () => {
                emitter.emit('toggle-dir-open-status');
            }
        }
    ]);

    const actionLeftBarBottomBtnList = ref<Array<NanoActionBarButtonType>>([]);
</script>

<style scoped lang="scss">

</style>
