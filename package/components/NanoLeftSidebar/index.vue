<template>
    <div
        class="absolute left-[var(--action-bar-size)] top-0 z-20 h-full w-[var(--sidebar-size)]"
        un-border="r-solid r-1px r-[var(--sidebar-border-color)]"
        un-p="t-[var(--header-size)] b-[var(--footer-size)]"
        style="background: var(--sidebar-bg)"
    >
        <OverlayScrollbarsComponent
            :key="key"
            ref="scrollbar"
            class="w-full h-full"
            :options="scrollbarOptions"
            defer
        >
            <div
                class="relative py-3 px-3 w-auto!"
                @click.stop
            >
                <NanoSidebarDirTree
                    :key="key"
                    :list="sidebarGroups"
                />
            </div>
        </OverlayScrollbarsComponent>
    </div>
</template>

<script setup lang="ts">
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    // @ts-expect-error vitepress sidebar
    import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar';
    import NanoSidebarDirTree from '@NanoUI/NanoSidebarDirTree/index.vue';
    import scrollbarOptions from '../../config/scrollbarOptions';
    import { ref, watch } from 'vue';

    const { sidebarGroups, hasSidebar } = useSidebar();
    const key = ref(0);

    watch(
        sidebarGroups,
        () => {
            // console.log('sidebarGroups', sidebarGroups.value);
            key.value += 1;
        },
        {
            immediate: true,
            deep: true
        }
    );
</script>

<style scoped lang="scss">

</style>
