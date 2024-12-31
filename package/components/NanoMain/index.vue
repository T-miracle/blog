<template>
    <div
        class="absolute bg-white mx-auto vp-doc"
        un-h="[calc(100vh-var(--header-size)-var(--footer-size))]"
        un-top="[var(--header-size)]"
        :style="mainClass"
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
    import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
    import { onContentUpdated, useRoute } from 'vitepress';
    import emitter from '../../emitter';
    import { controllerStore } from '@store/controller';

    const ctl = controllerStore();

    const scrollbars = ref<any | null>(null);
    const article = ref<HTMLElement | null>(null);

    const route = useRoute();

    const mainClass = computed(() => {
        if (ctl.articleFullscreen) {
            return {
                width: '100%',
                left: 0
            };
        }
        if (ctl.hideRightSidebar) {
            return {
                width: 'calc(100% - var(--action-bar-size) - var(--sidebar-left-size))',
                left: 'calc(var(--action-bar-size) + var(--sidebar-left-size))'
            };
        } else {
            return {
                width: 'calc(100% - var(--action-bar-size) * 2 - var(--sidebar-left-size) - var(--sidebar-right-size))',
                left: 'calc(var(--action-bar-size) + var(--sidebar-left-size))'
            };
        }
    });

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
            // console.log('scroll-to-hash', _hashText);
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
