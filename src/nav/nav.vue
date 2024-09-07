<template>
    <div class="relative h-[calc(100vh-var(--vp-nav-height))] vp-doc max-w-1200 mx-auto">
        <div class="h-80 flex justify-center items-center z-1 px-12">
            <el-input class="filter" size="large" placeholder="资源名称筛选" v-model="filterText"/>
        </div>
        <div class="relative w-full flex h-[calc(100vh-(var(--vp-nav-height)+80px))]">
            <div class="relative w-94 pd-20 shrink-0 h-full">
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
            <OverlayScrollbarsComponent
                class="relative h-full px-20 flex-1"
                :options="{ scrollbars: { visibility: 'hidden' } }"
            >
                <div class="relative border mb-40" v-for="item in navItem" :key="item.title">
                    <div class="text-2em font-bold line-height-2em mb-12">
                        <span class="text-#555555 dark:text-#dfe4ea">{{ item.title }}</span>
                    </div>
                    <div class="relative grid gap-20" xl="grid-cols-3" md="grid-cols-2">
                        <div
                            class="rounded-8 p-12 bg-white transform transition-all transition-250"
                            hover="shadow-emerald shadow-md transition-all transition-250"
                            shadow="sm gray"
                            dark="bg-#2c2e2f shadow-neutral"
                            v-for="project in item.children"
                        >
                            <div class="grid grid-cols-[56px_auto]">
                                <el-image
                                    class="w-40 h-40 rounded-4"
                                    v-if="typeof project.icon === 'string'"
                                    :src="project.icon"
                                    fit="contain"
                                />
                                <Component class="w-40 h-40 text-24" v-else :is="project.icon"/>
                                <div>
                                    <div class="text-1.12em">{{ project.name }}</div>
                                    <div
                                        class="line-clamp-2 h-30"
                                        text="gray-400 .8em"
                                        line-height-15
                                        :title="project.description"
                                    >
                                        {{ project.description }}
                                    </div>
                                    <div class="mt-8 flex items-center justify-start flex-row-reverse">
                                        <el-button
                                            v-if="typeof project.link === 'string'"
                                            class="ml-8 text-white dark:text-gray-8 hover:text-white hover:dark:text-gray-8"
                                            size="small"
                                            color="#9095E8"
                                            @click.stop="openLink(project.link)"
                                            auto-insert-space
                                        >
                                            访问
                                        </el-button>
                                        <el-dropdown
                                            class="ml-8"
                                            v-if="Array.isArray(project.link)"
                                            size="small"
                                        >
                                            <el-button
                                                class="ml-8 text-white dark:text-gray-8 hover:text-white hover:dark:text-gray-8"
                                                color="#9095E8"
                                                size="small"
                                                auto-insert-space
                                            >
                                                <span class="tracking-2">访问</span>
                                                <el-icon class="el-icon--right">
                                                    <arrow-down/>
                                                </el-icon>
                                            </el-button>
                                            <template #dropdown>
                                                <el-dropdown-item
                                                    class="relative"
                                                    dark="bg-#2c2e2f! hover:bg-#3E4042!"
                                                    rounded="first:[3px_3px_0_0] last:[0_0_3px_3px]"
                                                    v-for="item in project.link"
                                                    :key="item.name"
                                                >
                                                    <div class="w-full flex items-center flex-row-reverse z-2">
                                                        <el-button
                                                            class="w-full ml-12 text-white dark:text-gray-8 hover:text-white hover:dark:text-gray-8"
                                                            size="small"
                                                            color="#9095E8"
                                                            @click.stop="openLink(item.url)"
                                                            auto-insert-space
                                                        >
                                                            {{ item.name }}
                                                        </el-button>
                                                        <div
                                                            class="cursor-pointer shrink-0 w-18 h-18"
                                                            hover="opacity-80"
                                                            title="Github"
                                                            @click.stop="openLink(item.github)"
                                                        >
                                                            <githubIcon v-if="item.github" class="w-18 h-18"/>
                                                        </div>
                                                    </div>
                                                </el-dropdown-item>
                                            </template>
                                        </el-dropdown>
                                        <div
                                            class="cursor-pointer"
                                            hover="opacity-80"
                                            v-if="project.github"
                                            title="Github"
                                            @click.stop="openLink(project.github)"
                                        >
                                            <githubIcon class="w-18 h-18"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OverlayScrollbarsComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ElButton, ElDropdown, ElDropdownItem, ElIcon, ElImage, ElInput, ElMenu, ElMenuItem } from 'element-plus';
    import { ArrowDown } from '@element-plus/icons-vue';
    import { computed, reactive, ref } from 'vue';
    import NavList from './classify/index';
    import { Nav } from './type';
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    import githubIcon from '@/icon/githubIcon.vue';

    const filterText = ref('');

    // 导航列表
    const navList = reactive<Nav[]>(NavList);

    const defaultNav = ref<string>(NavList[0].name);

    const navItem = computed(() => {
        return navList.find(nav => nav.name === defaultNav.value)?.children || [];
    });

    function selectMenuHandler(index: string) {
        defaultNav.value = index;
    }

    function openLink(link: string | undefined) {
        link && window.open(link, '_blank');
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
