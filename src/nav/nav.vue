<template>
    <div
        ref="navBox"
        class="relative nav"
    >
        <div class="relative left z-10 w-full star-point-bg">
            <div
                class="w-full p-5"
                un-flex="~ items-center gap-2 lg:gap-5"
            >
                <div class="w-40">
                    <h2 class="m-0! p-0! border-none! text-4.5! lg:text-6!">
                        资源导航
                    </h2>
                </div>
                <div class="w-40">
                    <ElInput
                        v-model="filter"
                        class="w-full mb-0! filter"
                        placeholder="名称筛选"
                        clearable
                    />
                </div>
                <div class="w-50">
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
            v-if="!loading && list.length !== 0"
            ref="listBox"
            class="relative grid gap-5 p-5 pt-0 w-full"
        >
            <div
                v-for="project in list"
                :key="project.name"
                class="relative rounded-2 p-3 bg-white transform transition-all transition-250"
                hover="shadow-emerald shadow-md transition-all transition-250"
                border="~ solid .25 gray-300 dark:gray-700"
                shadow="sm gray"
                dark="bg-#2c2e2f shadow-neutral"
            >
                <div class="relative">
                    <div class="grid grid-cols-[3rem_auto]">
                        <el-image
                            v-if="typeof project.icon === 'string'"
                            class="w-10 h-10 rounded-1 border-none"
                            :src="project.icon"
                            fit="contain"
                        />
                        <Component
                            :is="project.icon"
                            v-else
                            class="w-10 h-10 text-6"
                        />
                        <div class="relative flex flex-col">
                            <strong class="text-1.12em">
                                {{ project.name }}
                            </strong>
                            <div
                                class="line-clamp-2 h-8 whitespace-pre-wrap"
                                un-text="gray-400 .72em!"
                                line-height-3.75
                                :title="project.description"
                            >
                                {{ project.description }}
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 flex justify-between">
                        <div class="flex items-center justify-start gap-2">
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
                                class="ml-2 text-white dark:text-gray-8 hover:text-white hover:dark:text-gray-8"
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
                                    class="ml-2"
                                    size="small"
                                >
                                    <el-button
                                        class="ml-2 text-white dark:text-gray-8 hover:text-white hover:dark:text-gray-8"
                                        color="#9095E8"
                                        size="small"
                                        auto-insert-space
                                    >
                                        <span class="tracking-.5">访问</span>
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
                                                    class="w-full ml-3 text-white dark:text-gray-8 hover:text-white hover:dark:text-gray-8"
                                                    size="small"
                                                    color="#9095E8"
                                                    auto-insert-space
                                                    @click.stop="openLink(it.url)"
                                                >
                                                    {{ it.name }}
                                                </el-button>
                                                <div
                                                    class="cursor-pointer shrink-0 w-4.5 h-4.5"
                                                    hover="opacity-80"
                                                    title="Github"
                                                    @click.stop="openLink(it.github)"
                                                >
                                                    <githubIcon
                                                        v-if="it.github"
                                                        class="w-4.5 h-4.5"
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
                                <githubIcon class="w-4.5 h-4.5"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="loading"
            class="flex justify-center items-center min-h-[60vh]"
        >
            <div class="loader"/>
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
    import { onMounted, onUnmounted, reactive, ref, watch } from 'vue';
    import projects from './classify/index';
    import githubIcon from '@/icon/githubIcon.vue';
    import { Project, projectTypeArray } from '@/nav/type';
    import { every, includes, debounce } from 'lodash-es';

    const loading = ref<boolean>(true);
    const filter = ref<string>('');
    const typeList = ref<string[]>([]);
    const projectList = reactive<Project[]>(projects);
    const options = ref<{ label: string, value: string }[]>(projectTypeArray.map((item) => ({
        label: item,
        value: item
    })));
    const list = ref<Project[]>([]);

    watch(() => [ filter, typeList ], debounce(() => {
        list.value = projectList?.filter((item) => {
            return item.name?.toLowerCase().includes(filter.value?.toLowerCase()) &&
                (typeList.value.length === 0 || every(typeList.value, element => includes(item.type, element)));
        }).sort((a, b) => (b.level || 0) - (a.level || 0));
    }, 240), {
        deep: true,
        immediate: true
    });

    function openLink(link: string | undefined) {
        if (link) {
            window.open(link, '_blank');
        }
    }

    const navBox = ref<HTMLDivElement | null>(null);
    const listBox = ref<HTMLDivElement | null>(null);
    const resizeObserver = ref<ResizeObserver | null>(null);
    onMounted(() => {
        resizeObserver.value = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            entries.forEach((entry: ResizeObserverEntry) => {
                if (entry.target === navBox.value) {
                    const { clientWidth } = entry.target;
                    // console.log(clientWidth);
                    if (clientWidth >= 1440) {
                        listBox.value?.style.setProperty('grid-template-columns', 'repeat(4, 1fr)');
                    } else if (clientWidth >= 1280) {
                        listBox.value?.style.setProperty('grid-template-columns', 'repeat(3, 1fr)');
                    } else if (clientWidth >= 768) {
                        listBox.value?.style.setProperty('grid-template-columns', 'repeat(2, 1fr)');
                    } else {
                        listBox.value?.style.setProperty('grid-template-columns', 'repeat(1, 1fr)');
                    }
                }
            });
            setTimeout(() => {
                loading.value = false;
            }, 500);
        });
        navBox.value && resizeObserver.value.observe(navBox.value);
    });
    onUnmounted(() => {
        resizeObserver.value?.disconnect();
    });
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
</style>

<style lang="scss">
    .flex-option-list {
        .el-scrollbar__view.el-select-dropdown__list {
            max-width: 80%;
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

    /* HTML: <div class="loader"></div> */
    .loader {
        --d:22px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        color: #25b09b;
        box-shadow:
            calc(1*var(--d))      calc(0*var(--d))     0 0,
            calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
            calc(0*var(--d))      calc(1*var(--d))     0 2px,
            calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
            calc(-1*var(--d))     calc(0*var(--d))     0 4px,
            calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
            calc(0*var(--d))      calc(-1*var(--d))    0 6px;
        animation: l27 .6s infinite steps(8);
    }
    @keyframes l27 {
        100% {transform: rotate(1turn)}
    }
</style>
