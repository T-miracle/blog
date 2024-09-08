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
        <div class="w-full flex justify-center mt-8 xl:mt-20">
            <!--带边框的Logo-->
            <div
                class="w-auto flex flex-col justify-center border-2 border-solid border-#dbdddf rounded-full
                    overflow-hidden z-16 select-none bg-white"
            >
                <div class="w-6xl h-6xl rounded-full overflow-hidden">
                    <img
                        class="w-100% h-100% cursor-pointer pointer-events-none"
                        src="/logo.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <!--标题-->
        <div
            class="text-center font-600 text-[var(--vp-home-hero-name-color)] mt-10 text-32 line-height-40 md:text-36
                md:line-height-48 lg:text-40 lg:line-height-56 select-none cursor-pointer"
        >
            <span class="mx-10 text-blue-5 font-bold">Tmiracle</span>
        </div>
        <div class="text-center">
            <span class="font-bold">全沾 BUG 开发者，Ctrl CV 工程师</span>
        </div>
        <!--跳转按钮-->
        <div class="relative w-full md:w-560 h-100% grid grid-cols-2 grid-row-2 gap-8 mt-20">
            <el-button
                size="large"
                class="w-full m-0! flex items-center"
                type="primary"
                @click="goPage('/nav/')"
            >
                <img
                    class="w-24 h-24 mr-8 shadow-none pointer-events-none"
                    src="/images/nav.svg"
                    alt=""
                />
                <span class="h-24 line-height-24"> 实用资源导航</span>
            </el-button>
            <el-button
                size="large"
                class="w-full m-0! flex items-center"
                type="warning"
                @click="goPage('/translation-docs/')"
            >
                <img
                    class="w-24 h-24 mr-8 shadow-none pointer-events-none"
                    src="/images/fanyi.png"
                    alt=""
                />
                <span class="h-24 line-height-24">技术文档翻译</span>
            </el-button>
            <el-button
                size="large"
                class="w-full m-0! flex items-center"
                type="success"
                @click="goPage('/learn/')"
            >
                <img
                    class="w-24 h-24 mr-8 shadow-none pointer-events-none"
                    src="/images/shuben.png"
                    alt=""
                />
                <span class="h-24 line-height-24">我的知识库</span>
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
                >
                    <img
                        class="w-24 h-24 mr-8 shadow-none pointer-events-none"
                        src="/images/QQqun.png"
                        alt=""
                    />
                    <span class="h-24 line-height-24">QQ群</span>
                </el-button>
            </a>
        </div>
        <!--内容部分-->
        <div class="relative w-screen h-100% xl:w-screen-xl flex flex-wrap mt-20">
            <div class="flex-shrink-0 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-10">
                <article class="h-100% flex flex-col bg-[var(--vp-c-bg-soft)] rounded-12 p-24 shadow-lg">
                    <h2 class="font-600 line-height-24 text-16 mt-0! pt-10! border-t-0!">
                        技术文档翻译
                    </h2>
                    <p class="h-100% flex-1 font-500 pt-8 text-14 line-height-24 text-[var(--vp-c-text-2)]">
                        目前我正在逐步翻译一些国外的技术文档，以便之后自己查阅，如果你也有这个想法，欢迎加入我
                    </p>
                </article>
            </div>
            <div class="flex-shrink-0 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-10">
                <article class="h-100% flex flex-col bg-[var(--vp-c-bg-soft)] rounded-12 p-24 shadow-lg">
                    <h2 class="font-600 line-height-24 text-16 mt-0! pt-10! border-t-0!">
                        我的知识库
                    </h2>
                    <p class="h-100% flex-1 font-500 pt-8 text-14 line-height-24 text-[var(--vp-c-text-2)]">
                        记录编程道路上所需的重点知识，以及各种奇思妙想的编程技巧
                    </p>
                </article>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .vp-doc {
        img {
            box-shadow: none;
        }
    }
</style>
