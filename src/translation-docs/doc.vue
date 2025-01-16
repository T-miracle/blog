<template>
    <div class="relative vp-doc">
        <h1 class="doc-h1">
            文档翻译
        </h1>
        <div class="doc-container">
            <el-input
                v-model="filterText"
                class="doc-container__filter"
                size="large"
                placeholder="筛选文档"
            />
            <div
                ref="box"
                class="relative w-full py-5"
                un-grid="~ gap-5"
            >
                <a
                    v-for="item in filterDocs"
                    :key="item.title"
                    class="relative block p-5 bg-[var(--vp-c-bg-soft)] rounded-3 decoration-none! transition-transform duration-300 ease-in-out overflow-hidden"
                    un-shadow="[0_4px_8px_-3px_rgba(0,0,0,.2)] dark:[0_4px_8px_-3px_rgba(255,255,255,.2)] hover:emerald"
                    un-border="~ solid .25 gray-300 dark:gray-700"
                    un-flex="~ col items-center justify-center"
                    :href="item.link"
                    target="_blank"
                >
                    <div
                        class="absolute right--2.5 top--2.5 h-15 w-15 rounded-full font-800"
                        un-flex="~ items-center justify-center"
                        un-transform="~ rotate--45"
                        un-border="~ 1 solid orange-300 dark:orange-700"
                        un-text="~ 4 orange-300 dark:orange-700"
                        :class="{ 'border-emerald-300! dark:border-emerald-700! text-emerald-300!  dark:text-emerald-700!' : item.status === '已翻译' }"
                    >
                        {{ item.status }}
                    </div>
                    <img
                        class="w-14 h-14 mb-2.5 pointer-events-none bg-transparent shadow-none!"
                        :src="item.logo"
                        alt=""
                    />
                    <strong class="text-[var(--vp-c-text-1)]">{{ item.title }}</strong>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ElInput } from 'element-plus';
    import { computed, onMounted, onUnmounted, ref } from 'vue';

    const docs = ref([
        {
            title: 'Kotlin 文档',
            status: '翻译中',
            link: 'https://docs.namichong.com/kotlin/',
            logo: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/Kotlin.svg'
        },
        {
            title: 'IntelliJ 平台插件 SDK 文档',
            status: '翻译中',
            link: 'https://docs.namichong.com/intellij-platform-sdk/',
            logo: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/JetBrains-SDK.svg'
        },
        {
            title: 'OverlayScrollbars',
            status: '已翻译',
            link: 'https://docs.namichong.com/overlayscrollbars/',
            logo: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/OverlayScrollbars.png'
        }
    ]);

    const filterText = ref('');

    const filterDocs = computed(() => {
        return docs.value.filter(item => item.title?.toLowerCase().indexOf(filterText.value?.toLowerCase()) !== -1);
    });

    const box = ref<HTMLDivElement | null>(null);
    const resizeObserver = ref<ResizeObserver | null>(null);
    onMounted(() => {
        resizeObserver.value = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            entries.forEach((entry: ResizeObserverEntry) => {
                if (entry.target === box.value) {
                    const { clientWidth } = entry.target;
                    // console.log(clientWidth);
                    if (clientWidth >= 1440) {
                        box.value?.style.setProperty('grid-template-columns', 'repeat(4, 1fr)');
                    } else if (clientWidth >= 1280) {
                        box.value?.style.setProperty('grid-template-columns', 'repeat(3, 1fr)');
                    } else if (clientWidth >= 768) {
                        box.value?.style.setProperty('grid-template-columns', 'repeat(2, 1fr)');
                    } else {
                        box.value?.style.setProperty('grid-template-columns', 'repeat(1, 1fr)');
                    }
                }
            });
        });
        box.value && resizeObserver.value.observe(box.value);
    });
    onUnmounted(() => {
        resizeObserver.value?.disconnect();
    });
</script>

<style scoped lang="scss">
    .doc-h1 {
        font-size: 2.4em;
        text-align: center;
        font-weight: 600;
        margin: 5px;
    }

    .doc-container {
        position: relative;
        width: 100%;
        margin: 0 auto 5px;
        padding: 5px 2.5px 12px;

        &__filter {
            width: min(400px, 100%);

            :deep(.el-input__wrapper) {
                background: transparent;
            }

            /* 自定义占位符颜色 */
            & ::-webkit-input-placeholder {
                color: var(--vp-c-text-1);
            }

            & ::-moz-placeholder {
                color: var(--vp-c-text-1);
            }

            & ::-ms-input-placeholder {
                color: var(--vp-c-text-1);
            }

            & ::placeholder {
                color: var(--vp-c-text-1);
            }
        }
    }
</style>
