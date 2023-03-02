<!--展示列表-->
<template>
    <div class="display-list">
        <div class="display-box" v-for="(item, index) in list" :key="index">
            <a :href="item.link" target="_blank">
                <div class="img">
                    <img :src="item.img" alt="">
                </div>
                <div class="info">
                    <h2 class="title">{{ item.title }}</h2>
                    <div class="desc">{{ item.desc }}</div>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { list } = defineProps<{
        list: { img: string, link: string, title: string, desc: string }[]
    }>()
</script>

<style scoped lang="scss">
    .display-list {
        width: 100%;

        .display-box {
            border-radius: 6px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
            margin: 20px;

            &:hover {
                box-shadow: 0 0 5px rgba(32, 196, 171, 0.6);
                transform: scale(1.02);
            }

            > a {
                &:after {
                    display: block;
                    content: '';
                    clear: both;
                }

                .img {
                    float: left;
                    padding: 10px;
                    width: 80px;
                    height: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    > img {
                        max-width: 100%;
                        max-height: 100%;
                    }
                }

                .info {
                    float: left;
                    width: calc(100% - 80px);
                    height: 80px;
                    padding: 0 20px;
                    color: #1e1e20;

                    .title {
                        height: 40px;
                        font-size: 24px;
                        line-height: 40px;
                        margin: 0;
                        padding: 0;
                    }

                    .desc {
                        font-size: 14px;
                        line-height: 18px;
                        color: #606266;
                    }
                }
            }
        }
    }
</style>
