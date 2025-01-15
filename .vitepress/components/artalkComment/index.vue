<template>
    <div v-if="type === 'artalk' && visible" class="relative w-full h-a my-12 p-6 bg-#F7F8FA rounded-6px">
        <strong class="block text-[calc(var(--base-size)*1.25)]! mb-4!">大佬~留个评论吧~</strong>
        <div id="comment"/>
    </div>
</template>

<script setup lang="ts">
    import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
    import { useData, useRoute } from 'vitepress';
    import 'artalk/Artalk.css';
    import Artalk from 'artalk';

    const route = useRoute();
    const { site: _site, frontmatter } = useData();
    const { type, options: { server, site } } = _site.value.themeConfig.comments;
    const artalk = ref<Artalk | null>(null);
    const visible = ref(false);

    function init() {
        artalk.value?.destroy();
        if (frontmatter.value.comment === false) {
            visible.value = false;
        } else {
            visible.value = true;
            nextTick(() => {
                artalk.value = Artalk.init({
                    el: '#comment',
                    pageKey: route.path,
                    server,
                    site
                });
            });
        }
    }

    watch(() => route.path, () => {
        init();
    });

    onMounted(() => {
        init();
    });

    onUnmounted(() => {
        artalk.value?.destroy();
    });
</script>

<style lang="scss" scoped>
    :deep(.artalk) {
        > .atk-list {
            .atk-list-header .atk-comment-count .atk-comment-count-num {
                font-size: 16px !important;
            }

            > .atk-list-body {
                min-height: 0;

                .atk-list-no-comment {
                    height: unset;
                    color: deepskyblue;
                }
            }
        }

        .atk-list-footer {
            display: none;
        }
    }
</style>
