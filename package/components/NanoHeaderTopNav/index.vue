<template>
    <div class="relative h-[var(--header-size)] flex items-center gap-4 px-4">
        <template
            v-for="(nav, index) in navList"
            :key="nav.link"
        >
            <div
                v-if="!isEmpty(nav.items)"
                class="relative w-full h-full flex-center text-[calc(var(--header-size)*.4)]"
                @click.stop="popups[index]?.open()"
                @mouseenter="popups[index]?.open()"
                @mouseleave="popups[index]?.close()"
            >
                <nav class="whitespace-nowrap cursor-default">
                    {{ nav.text }}
                </nav>
                <NanoPopup
                    :ref="el => popups[index] = el"
                    class="px-2 py-1 top-[var(--header-size)] left-0"
                >
                    <div
                        v-for="subNav in nav.items"
                        :key="subNav.link"
                        class="px-6 flex items-center"
                        un-hover="rounded-1.5 bg-[var(--header-nav-popup-hover-bg)]"
                        @click.stop="popups[index]?.close()"
                    >
                        <a
                            :href="subNav.link"
                            @click="changeFooterPath(subNav.text)"
                        >
                            <p class="text-[calc(var(--header-size)*.4)] line-height-6 whitespace-nowrap">
                                {{ subNav.text }}
                            </p>
                        </a>
                    </div>
                </NanoPopup>
            </div>
            <a
                v-else
                :href="nav.link"
                class="text-[var(--header-nav-color)] text-[calc(var(--header-size)*.4)] cursor-default"
                un-hover="underline"
                @click="changeFooterPath(nav.text)"
            >
                <nav class="whitespace-nowrap">{{ nav.text }}</nav>
            </a>
        </template>
    </div>
</template>

<script setup lang="ts">
    import NanoPopup from '@NanoUI/NanoPopup/index.vue';
    import { useData, useRoute } from 'vitepress';
    import { isEmpty } from 'lodash-es';
    import { ref, watch } from 'vue';
    import { sidebarStore } from '@store/sidebar';
    import emitter from '../../emitter';

    const { theme } = useData();
    const route = useRoute();

    const popups = ref<Array<any | null>>([]);

    const navList = theme.value.nav;

    const store = sidebarStore();

    function changeFooterPath(title: string) {
        emitter.emit('change-path', title);
    }

    watch(() => store.sidebar, () => {
        if (store.sidebar.length > 0) {
            store.positionSidebar(route.path);
        }
    }, { immediate: true });
</script>

<style scoped lang="scss">

</style>
