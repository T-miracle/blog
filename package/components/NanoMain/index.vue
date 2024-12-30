<template>
    <div
        class="absolute bg-white mx-auto vp-doc"
        un-h="[calc(100vh-var(--header-size)-var(--footer-size))]"
        un-w="[calc(100vw-var(--action-bar-size)*2-var(--sidebar-size)*2)]"
        un-top="[var(--header-size)]"
        un-left="[calc(var(--action-bar-size)+var(--sidebar-size))]"
    >
        <!--draggable line-->
        <div class="absolute z-2 left-0 top-0 h-full w-.25 bg-transparent cursor-col-resize"/>
        <!--content area-->
        <div class="relative w-full h-full">
            <OverlayScrollbarsComponent
                ref="scrollbars"
                class="w-full h-full"
                :options="scrollbarOptions"
                defer
            >
                <article
                    ref="content"
                    class="px-10 py-6 VPDoc text-3.5"
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
    import { onMounted, ref, watch } from 'vue';
    import { useRoute } from 'vitepress';
    import emitter from '../../emitter';

    const scrollbars = ref<any | null>(null);
    const content = ref<HTMLElement | null>(null);

    const route = useRoute();

    // Listen for routing changes and scroll to the top
    watch(() => route.path, () => {
        scrollbars.value?.osInstance()?.elements()?.viewport?.scrollTo({ top: 0 });
    });

    onMounted(() => {
        emitter.on('scroll-to-hash', (hash: string) => {
            const target = document.getElementById(hash);
            if (!target) {
                return;
            }
            // Gets the distance of the target element relative to the top of the content viewport
            const targetTop =
                target.getBoundingClientRect().top -
                content.value!.getBoundingClientRect().top -
                Number.parseInt(
                    getComputedStyle(document.documentElement)
                        .fontSize.replace('px', '')
                );
            // Scroll to target element
            scrollbars.value?.osInstance()?.elements()?.viewport?.scrollTo({ top: targetTop, behavior: 'smooth' });
        });
    });
</script>

<style scoped lang="scss">

</style>
