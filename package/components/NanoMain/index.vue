<template>
    <div
        class="grow z-2 h-full bg-white min-w-0 vp-doc"
    >
        <!--content area-->
        <div class="relative w-full h-full">
            <OverlayScrollbarsComponent
                ref="scrollbars"
                class="w-full h-full"
                :options="scrollbarOptions"
                defer
            >
                <article
                    ref="article"
                    class="px-10 py-6 VPDoc text-4"
                    :class="[ 'w-full' ]"
                    style="white-space: wrap;"
                >
                    <Content ref="content"/>
                </article>
            </OverlayScrollbarsComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
    import 'overlayscrollbars/styles/overlayscrollbars.css';
    import scrollbarOptions from '../../config/scrollbarOptions';
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
    import { onContentUpdated, useRoute } from 'vitepress';
    import emitter from '../../emitter';

    const route = useRoute();
    const scrollbars = ref<any | null>(null);
    const article = ref<HTMLElement | null>(null);

    // Listen for routing changes and scroll to the top
    watch(() => route.path, () => {
        nextTick(() => {
            scrollbars.value?.osInstance()?.elements()?.viewport?.scrollTo({ top: 0 });
        });
    }, {
        immediate: true
    });

    function hashChange() {
        if (location.hash) {
            const _hashText = decodeURIComponent(location.hash.replace('#', ''));
            emitter.emit('scroll-to-hash', _hashText);
        }
    }

    onContentUpdated(() => {
        setTimeout(() => {
            hashChange();
        }, 240);
    });

    onMounted(() => {
        setTimeout(() => {
            hashChange();
        }, 240);
        // Listen for scroll-to-hash events
        emitter.on('scroll-to-hash', (hash: string) => {
            if (hash === '' || hash === null || hash === undefined) {
                return;
            }
            const target = document.getElementById(hash);
            if (!target) {
                return;
            }
            // Gets the distance of the target element relative to the top of the article viewport
            const targetTop =
                target.getBoundingClientRect().top -
                article.value!.getBoundingClientRect().top -
                Number.parseInt(
                    getComputedStyle(document.documentElement)
                        .fontSize.replace('px', '')
                );
            // Scroll to target element
            scrollbars.value?.osInstance()?.elements()?.viewport?.scrollTo({ top: targetTop, behavior: 'smooth' });
        });
    });

    onUnmounted(() => {
        emitter.off('scroll-to-hash');
    });
</script>

<style scoped lang="scss">

</style>
