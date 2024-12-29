<template>
    <div
        class="absolute bg-white mx-auto vp-doc"
        un-h="[calc(100vh-var(--header-size)-var(--footer-size))]"
        un-w="[calc(100vw-var(--action-bar-size)*2-var(--sidebar-size)*2)]"
        un-top="[var(--header-size)]"
        un-left="[calc(var(--action-bar-size)+var(--sidebar-size))]"
    >
        <div class="absolute z-2 left-0 top-0 h-full w-.25 bg-transparent cursor-col-resize"/>
        <div class="relative w-full h-full">
            <OverlayScrollbarsComponent
                ref="scrollbars"
                class="w-full h-full"
                :options="scrollbarOptions"
                defer
            >
                <article
                    class="px-10 py-6 VPDoc"
                    :class="[ 'w-full' ]"
                    style="white-space: wrap;"
                >
                    <Content/>
                </article>
            </OverlayScrollbarsComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
    import 'overlayscrollbars/styles/overlayscrollbars.css';
    import scrollbarOptions from '../../config/scrollbarOptions';
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    import { ref, watch } from 'vue';
    import { useRoute } from 'vitepress';

    const scrollbars = ref<any | null>(null);

    const route = useRoute();

    // 监听路由变化，滚动到顶部
    watch(() => route.path, () => {
        scrollbars.value?.osInstance()?.elements()?.viewport?.scrollTo({ top: 0 });
    });
</script>

<style scoped lang="scss">

</style>
