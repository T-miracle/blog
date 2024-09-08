<template>
    <div class="relative h-[calc(100vh-var(--vp-nav-height))] vp-doc max-w-1200 mx-auto">
        <div class="relative w-full flex h-full">
            <el-tabs
                v-model="defaultNav"
                style="--el-tabs-header-height: 60px"
                class="sidebar !my-0 bg-transparent h-full w-full"
                tab-position="left"
            >
                <el-tab-pane
                    v-for="nav in navList"
                    :key="nav.name"
                    :name="nav.name"
                >
                    <template #label>
                        <Component
                            :is="nav.icon"
                            class="text-36 w-36 h-36"
                        />
                    </template>
                    <template #default>
                        <OverlayScrollbarsComponent
                            class="relative h-[calc(100vh-var(--vp-nav-height))] px-20 flex-1"
                            :options="{ scrollbars: { visibility: 'hidden' } }"
                        >
                            <div
                                v-for="item in nav.children"
                                :key="item.title"
                                class="relative border mb-40"
                            >
                                <div class="text-2em font-bold line-height-2em mb-12">
                                    <span class="text-#555555 dark:text-#dfe4ea">{{ item.title }}</span>
                                </div>
                                <div
                                    class="relative grid gap-20"
                                    xl="grid-cols-3"
                                    md="grid-cols-2"
                                >
                                    <div
                                        v-for="project in item.children"
                                        :key="project.name"
                                        class="rounded-8 p-12 bg-white transform transition-all transition-250"
                                        hover="shadow-emerald shadow-md transition-all transition-250"
                                        shadow="sm gray"
                                        dark="bg-#2c2e2f shadow-neutral"
                                    >
                                        <div class="grid grid-cols-[56px_auto]">
                                            <el-image
                                                v-if="typeof project.icon === 'string'"
                                                class="w-40 h-40 rounded-4"
                                                :src="project.icon"
                                                fit="contain"
                                            />
                                            <Component
                                                :is="project.icon"
                                                v-else
                                                class="w-40 h-40 text-24"
                                            />
                                            <div>
                                                <div class="text-1.12em">
                                                    {{ project.name }}
                                                </div>
                                                <div
                                                    class="line-clamp-2 h-30"
                                                    un-text="gray-400 .8em"
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
                                                        auto-insert-space
                                                        @click.stop="openLink(project.link)"
                                                    >
                                                        访问
                                                    </el-button>
                                                    <el-dropdown
                                                        v-if="Array.isArray(project.link)"
                                                        class="ml-8"
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
                                                                v-for="it in project.link"
                                                                :key="it.name"
                                                                class="relative"
                                                                dark="bg-#2c2e2f! hover:bg-#3E4042!"
                                                                rounded="first:[3px_3px_0_0] last:[0_0_3px_3px]"
                                                            >
                                                                <div class="w-full flex items-center flex-row-reverse z-2">
                                                                    <el-button
                                                                        class="w-full ml-12 text-white dark:text-gray-8 hover:text-white hover:dark:text-gray-8"
                                                                        size="small"
                                                                        color="#9095E8"
                                                                        auto-insert-space
                                                                        @click.stop="openLink(it.url)"
                                                                    >
                                                                        {{ it.name }}
                                                                    </el-button>
                                                                    <div
                                                                        class="cursor-pointer shrink-0 w-18 h-18"
                                                                        hover="opacity-80"
                                                                        title="Github"
                                                                        @click.stop="openLink(it.github)"
                                                                    >
                                                                        <githubIcon
                                                                            v-if="it.github"
                                                                            class="w-18 h-18"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </el-dropdown-item>
                                                        </template>
                                                    </el-dropdown>
                                                    <div
                                                        v-if="project.github"
                                                        class="cursor-pointer"
                                                        hover="opacity-80"
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
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ElButton, ElDropdown, ElDropdownItem, ElImage, ElTabPane, ElTabs, ElIcon } from 'element-plus';
    import { ArrowDown } from '@element-plus/icons-vue';
    import { reactive, ref } from 'vue';
    import NavList from './classify/index';
    import { Nav } from './type';
    import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
    import githubIcon from '@/icon/githubIcon.vue';

    // 导航列表
    const navList = reactive<Nav[]>(NavList);

    const defaultNav = ref<string>(NavList[0].name);

    function openLink(link: string | undefined) {
        if (link) {
            window.open(link, '_blank');
        }
    }
</script>

<style scoped lang="scss">
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
