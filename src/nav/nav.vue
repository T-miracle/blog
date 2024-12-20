<template>
    <div class="relative nav">
        <div class="relative left z-10 w-full nav-filter">
            <div
                class="max-w-1200 mx-auto p-20"
                un-flex="~ items-center gap-8 lg:gap-20"
            >
                <div class="w-160">
                    <h2 class="m-0! p-0! border-none! text-18! lg:text-24!">
                        资源导航
                    </h2>
                </div>
                <div class="w-160">
                    <ElInput
                        v-model="filter"
                        class="w-full mb-0! filter"
                        placeholder="名称筛选"
                        clearable
                    />
                </div>
                <div class="w-200">
                    <ClientOnly>
                        <ElSelect
                            v-model="typeList"
                            class="w-full mb-0! filter"
                            popper-class="flex-option-list"
                            placeholder="标签筛选"
                            collapse-tags
                            collapse-tags-tooltip
                            multiple
                            clearable
                        >
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </ElSelect>
                    </ClientOnly>
                </div>
            </div>
        </div>
        <div
            class="relative grid gap-20 p-20 pt-0 max-w-1200 mx-auto"
            xl="grid-cols-3"
            md="grid-cols-2"
        >
            <div
                v-for="project in list"
                :key="project.name"
                class="relative rounded-8 p-12 bg-white transform transition-all transition-250"
                hover="shadow-emerald shadow-md transition-all transition-250"
                border="~ solid 1 gray-300 dark:gray-700"
                shadow="sm gray"
                dark="bg-#2c2e2f shadow-neutral"
            >
                <div class="relative">
                    <div class="grid grid-cols-[56px_auto]">
                        <el-image
                            v-if="typeof project.icon === 'string'"
                            class="w-40 h-40 rounded-4 border-none"
                            :src="project.icon"
                            fit="contain"
                        />
                        <Component
                            :is="project.icon"
                            v-else
                            class="w-40 h-40 text-24"
                        />
                        <div class="relative flex flex-col">
                            <div class="text-1.12em">
                                {{ project.name }}
                            </div>
                            <div
                                class="line-clamp-2 h-30"
                                un-text="gray-400 .72em"
                                line-height-15
                                :title="project.description"
                            >
                                {{ project.description }}
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 flex justify-between">
                        <div class="flex items-center justify-start gap-8">
                            <ElTag
                                v-for="tag in project.type"
                                :key="tag"
                                size="small"
                                effect="plain"
                            >
                                {{ tag }}
                            </ElTag>
                        </div>
                        <div class="flex items-center justify-start flex-row-reverse">
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
                            <ClientOnly>
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
                            </ClientOnly>
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
</template>

<script setup lang="ts">
    import 'element-plus/theme-chalk/dark/css-vars.css';
    import {
        ElButton,
        ElDropdown,
        ElDropdownItem,
        ElImage,
        ElIcon,
        ElInput,
        ElSelect,
        ElOption,
        ElTag
    } from 'element-plus';
    import { ArrowDown } from '@element-plus/icons-vue';
    import { reactive, ref, computed } from 'vue';
    import projects from './classify/index';
    import githubIcon from '@/icon/githubIcon.vue';
    import { Project, projectTypeArray } from '@/nav/type';
    import { every, includes } from 'lodash-es';

    const filter = ref<string>('');
    const typeList = ref<string[]>([]);
    const projectList = reactive<Project[]>(projects);
    const options = ref<{ label: string, value: string }[]>(projectTypeArray.map((item) => ({
        label: item,
        value: item
    })));
    const list = computed(() => {
        return projectList?.filter((item) => {
            return item.name?.toLowerCase().includes(filter.value?.toLowerCase()) &&
                (typeList.value.length === 0 || every(typeList.value, element => includes(item.type, element)));
        }).sort((a, b) => (b.level || 0) - (a.level || 0));
    });

    function openLink(link: string | undefined) {
        if (link) {
            window.open(link, '_blank');
        }
    }
</script>

<style scoped lang="scss">
    .filter {
        :deep(.el-input__wrapper), :deep(.el-select__wrapper) {
            background-color: transparent;
        }
    }

    .nav :deep(img) {
        box-shadow: unset;
    }

    .nav-filter {
        backdrop-filter: saturate(50%) blur(4px);
        -webkit-backdrop-filter: saturate(50%) blur(4px);
        background-image: radial-gradient(transparent 1px, var(--vp-c-bg-soft) 1px);
        background-size: 4px 4px;

        @media screen and (min-width: 960px) {
            & {
                position: sticky;
                top: var(--vp-nav-height);
            }
        }
    }
</style>

<style lang="scss">
    .flex-option-list {
        .el-scrollbar__view.el-select-dropdown__list {
            max-width: 80vw;
            display: flex;
            flex-wrap: wrap;

            @media screen and (min-width: 960px) {
                max-width: 560px;
            }

            .el-select-dropdown__item {
                width: 140px;
            }
        }
    }
</style>
