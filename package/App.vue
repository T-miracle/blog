<template>
    <div
        class="relative h-screen w-screen flex-center"
        style="background-size: cover; background-position: center; background-repeat: no-repeat;"
        :style="{ backgroundImage: `url(${ bgList[0] })` }"
    >
        <slot name="homePage">
            <div class="w-80vw max-w-800px mb-12vh h-a flex-center flex-col rounded-xl py-10">
                <div class="relative w-60 h-60 max-w-80vw max-h-80vw" @click="goPage(aboutMePath)">
                    <img class="w-full w-full rounded-sm cursor-pointer" :src="logo" alt=""/>
                </div>
                <div class="text-6 line-height-8 my-2 select-none">
                    <strong class="font-800 text-white">{{ name }}</strong>
                </div>
                <div class="text-4 line-height-4 mb-2 select-none">
                    <span class="text-gray-3">{{ motto }}</span>
                </div>
                <div
                    v-if="socialLinks.length > 0"
                    class="flex-center gap-2 flex-wrap rounded-full"
                >
                    <a
                        v-for="v in links"
                        :key="v.link"
                        class="h-10 w-10 line-height-10 rounded-full hover:bg-[rgba(255,255,255,.12)]"
                        un-text="center white 6"
                        :href="v.link"
                        target="_blank"
                        v-html="v.icon"
                    />
                </div>
                <div
                    class="my-4 px-4 py-2 cursor-pointer"
                    un-text="5.25 gray-4"
                    un-border="~ solid 0.5 gray-4 rounded-2"
                    un-hover="border-white text-white"
                    un-transition="colors duration-300 ease"
                    @click="goPage('/learn/')"
                >
                    OPEN BLOG ->
                </div>
            </div>
        </slot>

        <NanoContainer v-if="!onlyShowIndex"/>
    </div>
</template>

<script setup lang="ts">
    import NanoContainer from '@NanoUI/NanoContainer/index.vue';
    import { useData, useRouter } from 'vitepress';
    import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
    import { DefaultTheme } from 'vitepress/types/default-theme';
    import { controllerStore } from '@store/controller';

    const { frontmatter, site } = useData();

    console.log(useData().site.value);

    const { logo, socialLinks, backgrounds: bgList, motto, name, aboutMePath } = site.value.themeConfig;

    const router = useRouter();

    const links = computed(() => {
        return site.value?.themeConfig.socialLinks?.map((v: DefaultTheme.SocialLink) => {
            let icon: string;
            if (typeof v.icon === 'string') {
                icon = `<span class="iconfont icon-nano-${ v.icon?.toLowerCase() }"/>`;
            } else {
                icon = v.icon?.svg;
            }
            return {
                ...v,
                icon
            };
        }) || [];
    });

    function goPage(url: string) {
        url && router.go(url);
    }

    const onlyShowIndex = ref<boolean>(false);

    watch(() => frontmatter.value.layout, (value) => {
        onlyShowIndex.value = value === 'home';
    }, { immediate: true, deep: true });

    const ctl = controllerStore();
    const resizeObserver = ref<ResizeObserver | null>(null);

    onMounted(() => {
        const htmlEl = document.documentElement!;
        resizeObserver.value = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                const { target } = entry;
                const { clientWidth } = target as HTMLElement;
                ctl.onlyFullscreen = clientWidth < 960;
            }
        });
        resizeObserver.value.observe(htmlEl);
    });

    onUnmounted(() => {
        resizeObserver.value?.disconnect();
    });
</script>

<style lang="scss">
    @import "./theme/light/var";
</style>
