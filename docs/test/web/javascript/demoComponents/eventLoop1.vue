<template>
    <el-carousel class="carousel" height="560px" :autoplay="false" indicator-position="outside">
        <el-carousel-item>
            <strong>1</strong>
            <vEventLoop
                :stackInfos="['console.log(\'开始\')']"
            />
        </el-carousel-item>
        <el-carousel-item>
            <strong>2</strong>
            <vEventLoop
                :consoleInfos="['开始']"
            />
        </el-carousel-item>
    </el-carousel>
</template>

<script setup lang="ts">
    import { ElCarousel, ElCarouselItem } from 'element-plus'
    import VEventLoop from '../../../../utils/components/vEventLoop.vue';
</script>

<style scoped lang="scss">
    .carousel {
        border: 1px solid lightslategrey;

        strong {
            position: absolute;
            left: 10px;
            top: 10px;
            font-size: 36px;
        }
    }
</style>
