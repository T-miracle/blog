<template>
    <div class="relative w-auto">
        <div
            class="relative cursor-pointer select-none rounded-2"
            :class="[ isActiveLink ? 'bg-[var(--sidebar-active-bg)]' : '' ]"
            un-focus="bg-[var(--sidebar-focus-bg)]!"
            un-hover="bg-[var(--sidebar-hover-bg)]"
            tabindex="0"
            @dblclick="collapse"
        >
            <VPLink
                :href="item.link"
                :rel="item.rel"
                :target="item.target"
                class="flex items-center flex-nowrap gap-1 py-.6 w-auto"
                :style="{ paddingLeft: `${ level }rem` }"
            >
                <div class="w-4 h-4 shrink-0">
                    <FoldArrow
                        v-if="!isEmpty(item.items)"
                        :class="[ !collapsed ? 'rotate-0' : 'rotate--90' ]"
                        @click="collapse"
                    />
                </div>
                <div
                    class="menu-item"
                    :class="[ item.link ? '' : 'text-blue-400 font-600' ]"
                    style="white-space: nowrap;"
                    v-html="item.text"
                />
            </VPLink>
        </div>
        <div
            v-show="!collapsed"
            class="relative"
        >
            <NanoTreeSubItem
                v-for="subItem in item.items || []"
                :key="subItem.text"
                :level="level + 1"
                :item="subItem"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
    import NanoTreeSubItem from './index.vue';
    import FoldArrow from '@NanoIcon/foldArrow.vue';
    import { isEmpty } from 'lodash-es';
    import type { DefaultTheme } from 'vitepress/theme';
    import { computed } from 'vue';
    import { useSidebarControl } from '../../vitepress/sidebar';

    const props = defineProps<{
        item: DefaultTheme.SidebarItem
        level: number
    }>();

    const {
        collapsed,
        isActiveLink,
        toggle
    } = useSidebarControl(computed(() => props.item));

    function collapse(e: MouseEvent | Event) {
        if ('key' in e && e.key !== 'Enter') {
            return;
        }
        toggle();
    }
</script>

<style scoped lang="scss">
    .menu-item {
        width: auto;
        display: flex;
        align-items: center;
        font-size: .9rem;

        :deep(.icon) {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            margin-right: .5rem;
        }
    }
</style>
