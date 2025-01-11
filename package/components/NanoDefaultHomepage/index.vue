<template>
    <div class="relative w-full h-full flex-center">
        <div class="w-80vw max-w-800px mb-12vh h-a flex-center flex-col py-10">
            <div
                class="relative w-60 h-60 max-w-80vw max-h-80vw"
                style="filter: drop-shadow(0 0 16px rgba(0,0,0,.36));"
                @click="$go(aboutMePath)"
            >
                <img class="w-full w-full rounded-sm cursor-pointer" :src="logo" alt=""/>
            </div>
            <div class="text-6 line-height-8 my-2 select-none">
                <strong class="text-white">{{ name }}</strong>
            </div>
            <div class="text-4 line-height-4 mb-2 select-none">
                <span class="text-gray-3">{{ motto }}</span>
            </div>
            <div
                v-if="socialLinks.length > 0"
                class="flex-center gap-2 flex-wrap rounded-full"
            >
                <div
                    v-for="v in links"
                    :key="v.link"
                    class="h-10 w-10 line-height-10 rounded-full bg-transparent hover:bg-[rgba(255,255,255,.12)]"
                    un-transition="colors duration-240 ease-in-out"
                    un-text="center white 6"
                    @click="$go(v.link, '_blank')"
                    v-html="v.icon"
                />
            </div>
            <div
                class="my-4 px-4 py-2 cursor-pointer"
                un-text="5.25 gray-4"
                un-border="~ solid 0.5 gray-4 rounded-2"
                un-hover="border-white text-white"
                un-transition="colors duration-300 ease"
                @click="$go('/learn/')"
            >
                OPEN BLOG ->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useData } from 'vitepress';

    const { site } = useData();
    import { DefaultTheme } from 'vitepress/types/default-theme';
    import { computed } from 'vue';
    const { logo, socialLinks, motto, name, aboutMePath } = site.value.themeConfig;

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
</script>

<style scoped lang="scss">

</style>
