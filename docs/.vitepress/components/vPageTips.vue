<template>
    <div class="page-tips">
        <div class="page-tips__title">
            <slot>本文章部分借鉴于：</slot>
        </div>
        <div class="page-tips__links">
            <div v-for="(item, index) in links" :key="index">
                <a :href="item.link" target="_blank">{{ item.text }}</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { links } = defineProps<{
        links: {text: string, link: string}[]
    }>()
</script>

<style scoped lang="scss">
    .page-tips {
        margin: 80px 0 0;
        padding: 0 15px;

        .page-tips__title {
            font-size: .9em;
            color: #707070;
            margin-bottom: 10px;
        }

        .page-tips__links {
            font-size: .8em;

            div {
                cursor: pointer;
            }
        }
    }
</style>
