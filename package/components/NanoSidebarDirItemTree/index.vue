<template>
    <div class="relative w-auto whitespace-nowrap">
        <div class="relative cursor-pointer select-none rounded-2">
            <div
                class="flex items-center flex-nowrap gap-[calc(var(--base-size)*.25)] py-[calc(var(--base-size)*.125)] w-auto"
                :class="setClass"
                :style="{ paddingLeft: `calc(var(--base-size)*${ level })` }"
                un-hover="bg-[var(--sidebar-hover-bg)]"
                @click.stop="collapse"
            >
                <div class="w-[calc(var(--base-size)*1)] h-[calc(var(--base-size)*1)] shrink-0">
                    <FoldArrow
                        v-if="!isEmpty(item.items)"
                        :class="[ !item.collapsed ? 'rotate-0' : 'rotate--90' ]"
                        @click.stop="collapse"
                    />
                </div>
                <div class="menu-icon flex-center" v-html="item.icon"/>
                <div
                    class="text-[calc(var(--base-size)*.975)]!"
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
            width: calc(var(--base-size)*1.125);
            height: calc(var(--base-size)*1.125);
            margin-right: calc(var(--base-size)*.25);
        }
    }
</style>
