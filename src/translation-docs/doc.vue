<template>
    <h1 class="doc-h1">技术文档翻译</h1>
    <div class="doc-container">
        <el-input class="doc-container__filter" size="large" placeholder="筛选文档" v-model="filterText"/>
        <div class="doc-container__item" v-for="item in filterDocs" :key="item.title">
            <a class="doc-container__item-link" :href="urlPrefix + item.link" target="_blank">
                <img :src="item.logo" alt="">
                <div class="box-right">
                    <div class="title">{{ item.title }}</div>
                    <div class="links">
                        <a @click.stop :href="item.github" target="_blank">
                            <img src="/images/github.png" alt="" style="width: 1.2em; height: 1.2em;">
                            加入翻译社区
                        </a>
                    </div>
                </div>

            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ElInput} from "element-plus";
    import {computed, onMounted, ref} from "vue";

    const urlPrefix = ref('https://blog.namichong.com/translation-docs');

    const docs = ref([
        {
            title: 'IntelliJ 平台插件 SDK 文档（翻译中...）',
            link: '/intellij-platform-sdk/index.html',
            logo: '/images/JetBrains-SDK.svg',
            github: 'https://github.com/T-miracle/intellij-sdk-docs/discussions'
        },
        {
            title: 'Kotlin 中文文档（翻译中...）',
            link: '/kotlin-docs/index.html',
            logo: '/images/Kotlin.svg',
            github: 'https://github.com/T-miracle/kotlin-docs-cn/discussions'
        }
    ]);

    const filterText = ref('')

    const filterDocs = computed(() => {
        return docs.value.filter(item => item.title.indexOf(filterText.value) !== -1)
    })
</script>

<style scoped lang="scss">
    .doc-h1 {
        font-size: 2.4em;
        text-align: center;
        font-weight: 600;
        margin: 20px;
    }

    .doc-container {
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

        &__item {
            margin: 1.2em 0;
            border: 2px solid rgba(231, 231, 232, 0.24);
            border-radius: 6px;
            padding: 10px;
            box-shadow: 0 0 4px 4px #e7e7e8;
            background-color: rgba(231, 231, 232, 0.24);
            /* transition: .4s ease-out;

            &:hover {
                transition: .4s ease-out;
                transform: scale(1.05);
            } */

            &-link {
                display: block;
                overflow: hidden;
                color: var(--vp-c-text-1);
                height: 56px;

                .box-right {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 56px;
                }

                img {
                    display: block;
                    float: left;
                    width: 56px;
                    height: 56px;
                    margin-right: 12px;
                }

                .title {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 20px;
                    height: 24px;
                    line-height: 24px;
                }

                .links {
                    position: relative;
                    display: flex;

                    > a {
                        display: flex;
                        align-items: center;
                        color: var(--vp-c-text-1);
                        padding: 0 6px;
                        text-decoration: underline;

                        > img {
                            margin-right: 5px;
                        }
                    }
                }
            }

            @media screen and (max-width: 768px) {
                &-link {
                    height: 48px;
                }

                .box-right {
                    height: 48px;
                }

                img {
                    width: 48px;
                    height: 48px;
                }

                .title {
                    font-size: 16px;
                    height: 20px;
                    line-height: 20px;
                }

                .links {
                    > a {
                        font-size: .75em;
                    }
                }
            }
        }
    }
</style>
