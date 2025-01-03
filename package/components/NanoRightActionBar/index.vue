<template>
    <div
        class="relative shrink-0 h-full w-[var(--action-bar-size)]"
        un-border="l-1px l-solid l-[var(--action-bar-border-color)]"
        un-flex="~ col items-center justify-between"
        style="background: var(--action-bar-bg)"
    >
        <div
            class="w-full h-full py-1"
            un-flex="~ col gap-1 items-center"
        >
            <NanoActionBarButton
                v-for="item in actionRightBarTopBtnList"
                :key="item.id"
                :button="item"
            />
        </div>
        <div
            class="w-full h-full py-1"
            un-flex="~ col col-reverse gap-1 items-center"
        >
            <NanoActionBarButton
                v-for="item in actionRightBarBottomBtnList"
                :key="item.id"
                :button="item"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import NanoActionBarButton from '@NanoUI/NanoActionBarButton/index.vue';
    import StructureIcon from '@NanoIcon/structure.vue';
    import { ref, shallowRef } from 'vue';
    import { NanoActionBarButtonType } from '@NanoUI/NanoActionBarButton/type';
    import emitter from '../../emitter';

    const actionRightBarTopBtnList = ref<NanoActionBarButtonType[]>([
        { id: 'structure', icon: shallowRef(StructureIcon), clickFn: () => emitter.emit('toggle-structure-open-status') }
    ]);

    const actionRightBarBottomBtnList = ref<NanoActionBarButtonType[]>([]);
</script>
