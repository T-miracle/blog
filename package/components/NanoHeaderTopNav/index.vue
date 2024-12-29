<template>
    <div class="relative h-[var(--header-size)] flex items-center gap-4 px-4">
        <template
            v-for="(nav, index) in navList"
            :key="nav.link"
        >
            <div
                class="relative w-full h-full line-height-[var(--header-size)]"
                v-if="!isEmpty(nav.items)"
                @click.stop="popups[index]?.open()"
                @mouseenter="popups[index]?.open()"
                @mouseleave="popups[index]?.close()"
            >
                <nav class="whitespace-nowrap cursor-default">{{ nav.text }}</nav>
                <NanoPopup
                    :ref="el => popups[index] = el"
                    class="px-2 py-1 top-[var(--header-size)] left-0"
                >
                    <div
                        v-for="subNav in nav.items"
                        :key="nav.link"
                        class="px-6 flex items-center"
                        un-hover="rounded-1.5 bg-[var(--header-nav-popup-hover-bg)]"
                        @click.stop="popups[index]?.close()"
                    >
                        <a :href="subNav.link">
                            <p class="text-3.6 line-height-6 whitespace-nowrap">{{ subNav.text }}</p>
                        </a>
                    </div>
                </NanoPopup>
            </div>
            <a
                v-else
                :href="nav.link"
                class="text-[var(--header-nav-color)] text-[calc(var(--header-size)*.4)] cursor-default"
                un-hover="underline"
            >
                <nav class="whitespace-nowrap">{{ nav.text }}</nav>
            </a>
        </template>
    </div>
</template>

<script setup lang="ts">
    import NanoPopup from '@NanoUI/NanoPopup/index.vue';
    import { useData } from 'vitepress';
    import { isEmpty } from 'lodash-es';
    import { ref } from 'vue';

    const { theme } = useData();
    // console.log('nav --->', theme.value.nav);

    const popups = ref<Array<any | null>>([]);

    const navList = theme.value.nav;
</script>

<style scoped lang="scss">

</style>
