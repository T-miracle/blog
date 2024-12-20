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
                class="relative w-full py-20"
                un-grid="~ 20 cols-1 md:cols-2 xl:cols-3 gap-20"
            >
                <a
                    v-for="item in filterDocs"
                    :key="item.title"
                    class="relative block p-20 bg-[var(--vp-c-bg-soft)] rounded-12 decoration-none! transition-transform duration-300 ease-in-out overflow-hidden"
                    un-shadow="[0_4px_8px_-3px_rgba(0,0,0,.2)] dark:[0_4px_8px_-3px_rgba(255,255,255,.2)] hover:emerald"
                    un-border="~ solid 1 gray-300 dark:gray-700"
                    un-flex="~ col items-center justify-center"
                    :href="item.link"
                    target="_blank"
                >
                    <div
                        class="absolute right--10 top--10 h-60 w-60 rounded-full font-800"
                        un-flex="~ items-center justify-center"
                        un-transform="~ rotate--45"
                        un-border="~ 4 solid orange-300 dark:orange-700"
                        un-text="~ 16 orange-300 dark:orange-700"
                    >
                        {{ item.status }}
                    </div>
                    <img
                        class="w-56 h-56 mb-10 pointer-events-none bg-transparent shadow-none!"
                        :src="item.logo"
                        alt=""
                    />
                    <div class="text-[var(--vp-c-text-1)] font-bold">{{ item.title }}</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ElInput } from 'element-plus';
    import { computed, ref } from 'vue';

    const docs = ref([
        {
            title: 'IntelliJ 平台插件 SDK 文档',
            status: '翻译中',
            link: 'https://docs.namichong.com/intellij-platform-sdk/',
            logo: '/images/JetBrains-SDK.svg',
            github: 'https://github.com/T-miracle/intellij-sdk-docs/discussions'
        },
        {
            title: 'Kotlin 中文文档',
            status: '翻译中',
            link: 'https://docs.namichong.com/kotlin/',
            logo: '/images/Kotlin.svg',
            github: 'https://github.com/T-miracle/kotlin-docs-cn/discussions'
        }
    ]);

    const filterText = ref('');

    const filterDocs = computed(() => {
        return docs.value.filter(item => item.title?.toLowerCase().indexOf(filterText.value?.toLowerCase()) !== -1);
    });
</script>

<style scoped lang="scss">
    .doc-h1 {
        font-size: 2.4em;
        text-align: center;
        font-weight: 600;
        margin: 20px;
    }

    .doc-container {
        position: relative;
        max-width: 960px;
        margin: 0 auto 20px;
        padding: 20px 10px 50px;

        &__filter {

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
