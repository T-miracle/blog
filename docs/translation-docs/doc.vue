<template>
    <h1 class="doc-h1">技术文档翻译</h1>
    <div class="doc-container">
        <el-input class="doc-container__filter" size="large" placeholder="筛选文档" v-model="filterText"/>
        <div class="doc-container__item" v-for="item in filterDocs" :key="item.title">
            <a class="doc-container__item-link" :href="urlPrefix + item.link" target="_blank">
                <img :src="item.logo" alt="">
                <span>{{ item.title }}</span>
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
            logo: '/images/JetBrains-SDK.svg'
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
        padding: 20px 0 50px;

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
            margin: 1.2em 10px;
            border: 2px solid rgba(231, 231, 232, 0.24);
            border-radius: 6px;
            padding: 10px;
            transition: .4s ease-out;
            box-shadow: 0 0 4px 4px #e7e7e8;
            background-color: rgba(231, 231, 232, 0.24);

            &:hover {
                transition: .4s ease-out;
                transform: scale(1.05);
            }

            &-link {
                color: var(--vp-c-text-1);
                font-size: 1.2em;
                line-height: 1em;
                display: flex;
                align-items: center;

                > img {
                    width: 2em;
                    height: 2em;
                    margin-right: 12px;
                }
            }
        }
    }
</style>
