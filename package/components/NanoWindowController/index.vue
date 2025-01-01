<template>
    <div class="h-full flex flex-row-reverse">
        <div
            class="relative h-full flex"
            un-hover="bg-red-600"
        >
            <button
                class="group flex-center h-full w-[calc(var(--header-size)*1.5)]"
                @click="showTip"
            >
                <Component
                    :is="closeIcon"
                    class="w-[calc(var(--header-size)*.4)] h-[calc(var(--header-size)*.4)] group-hover:fill-white"
                />
            </button>
        </div>
        <div
            class="relative h-full flex"
            un-hover="bg-[#EAEBED]"
        >
            <button
                class="group flex-center h-full w-[calc(var(--header-size)*1.5)]"
                @click="showTip"
            >
                <Component
                    :is="windowZoomOut"
                    class="w-[calc(var(--header-size)*.4)] h-[calc(var(--header-size)*.4)]"
                />
            </button>
        </div>
        <div
            class="relative h-full flex"
            un-hover="bg-[#EAEBED]"
        >
            <button
                class="group flex-center h-full w-[calc(var(--header-size)*1.5)]"
                @click="showTip"
            >
                <Component
                    :is="windowMinimize"
                    class="w-[calc(var(--header-size)*.4)] h-[calc(var(--header-size)*.4)]"
                />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import closeIcon from '@NanoIcon/close.vue';
    import windowZoomOut from '@NanoIcon/windowZoomOut.vue';
    import windowMinimize from '@NanoIcon/windowMinimize.vue';
    import { ElMessage  } from 'element-plus';

    function showTip() {
        ElMessage({
            message: '功能开发中...',
            type: 'error'
        });
    }
</script>

<style scoped lang="scss">

</style>
