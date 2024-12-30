<template>
    <div class="relative w-auto whitespace-nowrap">
        <div class="relative cursor-pointer select-none rounded-2">
            <div
                @click.stop="collapse"
                class="flex items-center flex-nowrap gap-1 py-.6 w-auto"
                :class="setClass"
                un-hover="bg-[var(--sidebar-hover-bg)]"
                :style="{ paddingLeft: `${ level }rem` }"
            >
                <div class="w-4 h-4 shrink-0">
                    <FoldArrow
                        v-if="!isEmpty(item.items)"
                        :class="[ !item.collapsed ? 'rotate-0' : 'rotate--90' ]"
                        @click.stop="collapse"
                    />
                </div>
                <div
                    class="menu-item"
                    :class="[ item.link ? '' : 'text-blue-500' ]"
                    v-html="item.text"
                />
            </div>
        </div>
        <div
            v-show="!item.collapsed"
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
    import NanoTreeSubItem from './index.vue';
    import FoldArrow from '@NanoIcon/foldArrow.vue';
    import { isEmpty } from 'lodash-es';
    import { useRouter } from 'vitepress';
    import { SidebarItem, sidebarStore } from '@store/sidebar';
    import { computed } from 'vue';

    const { item } = defineProps<{
        item: SidebarItem
        level: number
    }>();
    const router = useRouter();
    const store = sidebarStore();

    const collapse = () => {
        item.link && router.go(item.link);
        item.collapsed = !item.collapsed;
        store.currentId = item.id!;
    };

    const setClass = computed(() => {
        return [
            store.currentId === item.id ? 'bg-[var(--sidebar-active-bg)]!' : ''
        ]
    });
</script>

<style scoped lang="scss">
    .menu-item {
        width: auto;
        display: flex;
        align-items: center;
        font-size: .875rem;

        :deep(.icon) {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            margin-right: .5rem;
        }
    }
</style>
