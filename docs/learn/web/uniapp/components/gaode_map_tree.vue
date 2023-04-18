<template>
    <div class="tree-box">
        <el-tree :data="data" :props="props" node-key="label" :default-expanded-keys="expandKey">
            <template v-slot="{ node, data }">
                <div @click="emits('node-click', data.label)" style="width: 100%">
                    <el-icon :size="18" style="margin-right: 6px" v-html="data.type"/>
                    <span>{{ data.label }}</span>
                </div>
            </template>
        </el-tree>
    </div>
</template>

<script setup lang="ts">
    import {ElTree, ElIcon} from 'element-plus';
    import {reactive} from 'vue';
    import {
        ignoreIcon,
        jsIcon,
        jsonIcon,
        folderIcon,
        mdIcon,
        tsIcon,
        gradleIcon,
        xmlIcon
    } from '../../../../public/icons'

    const emits = defineEmits(['node-click'])

    const props = {
        children: 'children',
        label: 'label'
    };

    interface Tree {
        label: string,
        type?: string,
        func?: Function,
        children?: Tree[]
    }

    const expandKey = ['项目', 'app', 'src', 'main', 'assets', 'data']

    const data: Tree[] = reactive([
        {
            label: '项目',
            type: folderIcon,
            children: [
                {
                    label: 'app',
                    type: folderIcon,
                    children: [
                        {
                            label: 'libs',
                            type: folderIcon
                        },
                        {
                            label: 'src',
                            type: folderIcon,
                            children: [
                                {
                                    label: 'main',
                                    type: folderIcon,
                                    children: [
                                        {
                                            label: 'assets',
                                            type: folderIcon,
                                            children: [
                                                {
                                                    label: 'apps',
                                                    type: folderIcon,
                                                    children: [
                                                        {
                                                            label: '...'
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: 'data',
                                                    type: folderIcon,
                                                    children: [
                                                        {
                                                            label: 'dcloud_properties.xml',
                                                            type: xmlIcon
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'java',
                                    type: folderIcon,
                                    children: [
                                        {
                                            label: '...'
                                        }
                                    ]
                                },
                                {
                                    label: 'res',
                                    type: folderIcon,
                                    children: [
                                        {
                                            label: '...'
                                        }
                                    ]
                                },
                                {
                                    label: 'AndroidManifest.xml',
                                    type: xmlIcon
                                },
                            ]
                        },
                        {
                            label: 'build.gradle',
                            type: gradleIcon
                        },
                    ]
                },
            ]
        },

    ]);

</script>

<style scoped lang="scss">
	.dark {
		.tree-box {
			background-color: #161618;
		}
	}

	.tree-box {
		margin: 10px 0;
		padding: 10px;
		background-color: #292b30;
		border-radius: 8px;

		> .el-tree {
			background-color: transparent;
			color: white;
			--el-tree-node-hover-bg-color: rgba(137, 221, 255, 0.25);

			:deep(.el-tree-node__content:hover) {
				background-color: rgba(137, 221, 255, 0.25) !important;
			}
		}
	}
</style>
