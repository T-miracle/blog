<script setup lang="ts">
    import { ElButton } from 'element-plus';
    import { useRouter } from 'vitepress';

    const { go } = useRouter();

    function goPage(url: string) {
        go(url);
    }
</script>

<template>
    <div class="relative w-full flex justify-center flex-col items-center">
        <!--头部-->
        <div class="w-full flex justify-center mt-2 xl:mt-5">
            <!--带边框的Logo-->
            <div
                class="w-auto flex flex-col justify-center border-.5 border-solid border-#dbdddf rounded-full
                    overflow-hidden z-4 select-none bg-white"
            >
                <div class="w-80 h-80 rounded-full overflow-hidden">
                    <img
                        class="w-full h-full cursor-pointer pointer-events-none"
                        src="/logo.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <!--标题-->
        <div
            class="text-center font-120 text-[var(--vp-home-hero-name-color)] mt-2.5 text-8 line-height-5 md:text-9
                md:line-height-12 lg:text-10 lg:line-height-14 select-none cursor-pointer"
        >
            <span class="mx-2.5 text-blue-1.25 font-bold font-[Helvetica_Neue]">Tmiracle</span>
        </div>
        <div class="text-center">
            <span class="font-bold">全沾 BUG 开发者，Ctrl CV 工程师</span>
        </div>
        <!--跳转按钮-->
        <div class="relative w-full md:w-140 h-full grid grid-cols-2 grid-row-2 gap-2 mt-5">
            <el-button
                size="large"
                class="w-full m-0! flex items-center"
                type="success"
                @click="goPage('/learn/')"
            >
                <img
                    class="w-6 h-6 mr-2 shadow-none pointer-events-none"
                    src="/images/shuben.png"
                    alt=""
                />
                <span class="h-6 line-height-6">我的知识库</span>
            </el-button>
            <el-button
                size="large"
                class="w-full m-0! flex items-center"
                type="primary"
                @click="goPage('/translation-docs/')"
            >
                <img
                    class="w-6 h-6 mr-2 shadow-none pointer-events-none"
                    src="/images/fanyi.png"
                    alt=""
                />
                <span class="h-6 line-height-6">文档翻译</span>
            </el-button>
            <el-button
                size="large"
                class="w-full m-0! flex items-center"
                type="warning"
                @click="goPage('/nav/')"
            >
                <img
                    class="w-6 h-6 mr-2 shadow-none pointer-events-none"
                    src="/images/nav.svg"
                    alt=""
                />
                <span class="h-6 line-height-6">资源导航</span>
            </el-button>
            <a
                class="relative w-full m-0! flex"
                href="https://jq.qq.com/?_wv=1027&k=YX3jUWQe"
                target="_blank"
            >
                <el-button
                    size="large"
                    class="w-full flex items-center"
                    type="info"
                    plain
                >
                    <img
                        class="w-6 h-6 mr-2 shadow-none pointer-events-none"
                        src="/images/QQqun.png"
                        alt=""
                    />
                    <span class="h-6 line-height-6">QQ群</span>
                </el-button>
            </a>
        </div>
        <!--<a href="/learn/web/http/what_is_cross_domain.html#示例">button</a>-->
    </div>
</template>

<style scoped lang="scss">
    .vp-doc {
        img {
            box-shadow: none;
        }
    }
</style>
