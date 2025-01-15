<template>
    <div class="relative w-auto whitespace-nowrap">
        <div class="relative cursor-pointer select-none rounded-2">
            <div
                class="py-[calc(var(--base-size)*.15)] w-auto"
                :style="setStyle"
                un-hover="bg-[var(--sidebar-hover-bg)]"
                un-flex="~ items-center nowrap gap-[calc(var(--base-size)*.25)]"
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
                    :class="[ item.link ? 'text-gray-6' : 'text-blue-500' ]"
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
        if (!item.value.disabled && !item.value.readonly) {
            item.value.collapsed = !item.value.collapsed;
        }
        store.$patch({
            currentId: item.value.id
        });
    };

    const setStyle = computed(() => {
        const style: Array<Record<string, string | number>> = [
            { paddingLeft: `calc(var(--base-size)*${ props.level })` }
        ];
        if (store.currentId === item.value.id) {
            style.push({ background: 'var(--sidebar-active-bg)' });
        }
        if (item.value.disabled) {
            style.push({ pointerEvents: 'none', opacity: .65 });
        }
        return style;
    });
</script>

<style scoped lang="scss">
    .menu-icon {
        :deep(svg), :deep(img) {
            display: inline-block;
            width: calc(var(--base-size) * 1.125);
            height: calc(var(--base-size) * 1.125);
            margin-right: calc(var(--base-size) * .25);
        }
    }
</style>
