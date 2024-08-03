<template>
    <div class="relative h-[calc(100vh-var(--vp-nav-height))] vp-doc max-w-1200 mx-auto">
        <div class="h-80 flex justify-center items-center sticky top-[var(--vp-nav-height)] z-1 bg-[var(--vp-c-bg)]">
            <el-input class="filter" size="large" placeholder="资源名称筛选" v-model="filterText"/>
        </div>
        <div class="relative w-full flex">
            <div class="relative w-94 h-[calc(100vh-(var(--vp-nav-height)+80px))] pd-20 shrink-0 sticky top-[calc(var(--vp-nav-height)+80px)]">
                <OverlayScrollbarsComponent class="h-full" :options="{ scrollbars: { autoHide: 'leave' } }">
                    <el-menu
                        class="sidebar !my-0 bg-transparent"
                        :default-active="defaultNav"
                        @select="selectMenuHandler"
                    >
                        <el-menu-item
                            class="sidebar-item h-54 px-20"
                            v-for="nav in navList"
                            :key="nav.name"
                            :index="nav.name"
                        >
                            <Component :is="nav.icon" class="text-36"/>
                        </el-menu-item>
                    </el-menu>
                </OverlayScrollbarsComponent>
            </div>
            <div class="relative h-full px-20 flex-1">
                <div class="relative border" v-for="item in navItem" :key="item.title">
                    <div class="text-2em font-bold line-height-2em mb-12">
                        <span>{{ item.title }}</span>
                    </div>
                    <div class="relative grid gap-20" xl="grid-cols-3" md="grid-cols-2">
                        <div class="rounded-8 p-12" border="& 1 solid" v-for="project in item.children">
                            <div class="grid grid-cols-[56px_auto]">
                                <el-image
                                    class="w-40 h-40"
                                    v-if="typeof project.icon === 'string'"
                                    :src="project.icon"
                                />
                                <Component class="w-40 h-40 text-24" v-else :is="project.icon"/>
                                <div>
                                    <div class="text-1.2em font-bold">{{ project.name }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ElImage, ElInput, ElMenu, ElMenuItem } from 'element-plus';
    import { computed, reactive, ref } from 'vue';
    import NavList from './classify/index';
    import { Nav } from './type';
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';

    const filterText = ref('');

    // 导航列表
    const navList: Nav[] = reactive(NavList);

    const defaultNav = ref<string>(NavList[0].name);

    const navItem = computed(() => {
        return navList.find(nav => nav.name === defaultNav.value)?.children || [];
    });

    function selectMenuHandler(index: string) {
        defaultNav.value = index;
    }
</script>

<style scoped lang="scss">
    .sidebar-item {
        opacity: 0.4;

        &.is-active {
            opacity: 1;
        }

        &:hover {
            background-color: var(--vp-c-bg-2);
        }
    }

    :deep(.el-tabs__header) {
        position: sticky;
        top: 0;
    }

    :deep(.el-tabs__content) {
        position: relative;
        height: 100%;

        .el-tab-pane {
            position: relative;
            height: 100%;
        }
    }

    .filter {
        :deep(.el-input__wrapper) {
            background: transparent;
        }

        /* 自定义占位符颜色 */
        & ::-webkit-input-placeholder {
            color: var(--vp-c-text-1);
        }

        & ::-moz-placeholder {
            color: var(--vp-c-text-1);
        }

        & ::-ms-input-placeholder {
            color: var(--vp-c-text-1);
        }

        & ::placeholder {
            color: var(--vp-c-text-1);
        }
    }
</style>
