<template>
    <div
        class="relative grow z-2 h-full bg-white min-w-0"
    >
        <!--content area-->
        <div class="relative w-full h-full">
            <slot v-if="page.isNotFound" name="not-found">
                <NotFound/>
            </slot>
            <OverlayScrollbarsComponent
                v-else
                ref="scrollbars"
                class="w-full h-full"
                :options="scrollbarOptions"
                defer
                @os-initialized="scrollbarInitialized"
            >
                <div :style="{ padding: articlePadding }">
                    <article
                        ref="article"
                        class="vp-doc VPDoc text-[var(--base-size)]"
                        :class="[ 'w-full' ]"
                        style="white-space: wrap;"
                    >
                        <Content/>
                    </article>
                    <div
                        class="flex items-center justify-end"
                        style="padding: calc(var(--base-size) * 2.5) calc(var(--base-size) * 1.5) 0"
                    >
                        <span class="text-gray">最后更新于：</span>
                        <strong class="text-slate-4">{{ datetime }}</strong>
                    </div>
                    <slot name="contentAfter">
                        <NanoComment/>
                    </slot>
                </div>
            </OverlayScrollbarsComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
    import NanoComment from '@NanoUI/NanoComment/index.vue';
    import 'overlayscrollbars/styles/overlayscrollbars.css';
    import scrollbarOptions from '../../config/scrollbarOptions';
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    import { computed, nextTick, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue';
    import { onContentUpdated, useData, useRoute } from 'vitepress';
    import emitter from '../../emitter';
    import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue';

    const { page, theme, frontmatter } = useData();
    const route = useRoute();
    const scrollbars = ref<InstanceType<typeof OverlayScrollbarsComponent> | null>(null);
    const article = ref<HTMLElement | null>(null);

    const datetime = ref('');

    // Listen for routing changes and scroll to the top
    watch(() => route.path, () => {
        nextTick(() => {
            scrollbars.value?.osInstance()?.elements()?.viewport?.scrollTo({ top: 0 });
        });
    }, {
        immediate: true
    });

    // Listen for hash changes
    function hashChange() {
        if (location.hash) {
            const _hashText = decodeURIComponent(location.hash.replace('#', ''));
            emitter.emit('scroll-to-hash', _hashText);
        }
    }

    function scrollbarInitialized() {
        // console.log('scrollbarInitialized');
        setTimeout(() => {
            hashChange();
        }, 0);
    }

    onContentUpdated(() => {
        // console.log('content updated');
        setTimeout(() => {
            hashChange();
        }, 0);
    });

    const resizeObserver = ref<ResizeObserver | null>(null);
    const articlePadding = ref<string>('calc(var(--base-size))');

    const date = computed(
        () => new Date(frontmatter.value.lastUpdated ?? page.value.lastUpdated)
    );

    onMounted(() => {
        watchEffect(() => {
            datetime.value = new Intl.DateTimeFormat(
                undefined,
                theme.value.lastUpdated?.formatOptions ?? {
                    dateStyle: 'short',
                    timeStyle: 'short'
                }
            ).format(date.value);
        });
        // console.log('mounted');
        // Listen for scroll-to-hash events
        emitter.on('scroll-to-hash', (hash: string) => {
            if (!hash) {
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

        resizeObserver.value = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                const { target } = entry;
                const { clientWidth } = target as HTMLElement;
                if (clientWidth < 768) {
                    articlePadding.value = 'calc(var(--base-size))';
                } else {
                    articlePadding.value = 'calc(var(--base-size)) calc(var(--base-size) * 2)';
                }
            }
        });
        resizeObserver.value.observe(article.value!);

        scrollbars.value?.osInstance()?.update();
    });

    onUnmounted(() => {
        emitter.off('scroll-to-hash');
        scrollbars.value?.osInstance()?.destroy();
    });
</script>

<style scoped lang="scss">

</style>
