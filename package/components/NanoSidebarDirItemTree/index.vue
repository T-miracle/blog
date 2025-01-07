<template>
    <div class="relative w-auto whitespace-nowrap">
        <div class="relative cursor-pointer select-none rounded-2">
            <div
                class="flex items-center flex-nowrap gap-1 py-.6 w-auto"
                :class="setClass"
                :style="{ paddingLeft: `${ level }rem` }"
                un-hover="bg-[var(--sidebar-hover-bg)]"
                @click.stop="collapse"
            >
                <div class="w-4 h-4 shrink-0">
                    <FoldArrow
                        v-if="!isEmpty(item.items)"
                        :class="[ !item.collapsed ? 'rotate-0' : 'rotate--90' ]"
                        @click.stop="collapse"
                    />
                </div>
                <div class="menu-icon flex-center" v-html="item.icon"/>
                <div
                    class="text-.875rem"
                    :class="[ item.link ? '' : 'text-blue-500' ]"
                    v-text="item.text"
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
    import { sidebarStore } from '@store/sidebar';
    import { computed, ref } from 'vue';
    import { SidebarType } from '../../type';

    const props = defineProps<{
        item: SidebarType
        level: number
    }>();

    const router = useRouter();
    const store = sidebarStore();

    const item = ref<SidebarType>(props.item);

    const collapse = () => {
        item.value.link && router.go(item.value.link);
        item.value.collapsed = !item.value.collapsed;
        store.$patch({
            currentId: item.value.id
        });
    };

    const setClass = computed(() => {
        return [
            store.currentId === item.value.id ? 'bg-[var(--sidebar-active-bg)]!' : ''
        ];
    });
</script>

<style scoped lang="scss">
    .menu-icon {
        :deep(svg), :deep(img) {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            margin-right: .5rem;
        }
    }
</style>
