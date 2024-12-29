<template>
    <div class="tree-box">
        <el-tree
            :data="data"
            :props="props"
            node-key="label"
            :default-expanded-keys="expandKey"
        >
            <template #default="{ node, data }">
                <div
                    style="width: 100%; display: flex; align-items: center"
                    @click="emits('node-click', data.label)"
                >
                    <el-icon
                        :size="18"
                        style="margin-right: 6px"
                        v-html="data.type"
                    />
                    <span>{{ data.label }}</span>
                    <span class="desc">{{ data.desc }}</span>
                </div>
            </template>
        </el-tree>
    </div>
</template>

<script setup lang="ts">
    import { ElTree, ElIcon } from 'element-plus';
    import { reactive } from 'vue';
    import {
        androidIcon,
        folderIcon,
        gradleIcon,
        xmlIcon
    } from '@/public/icons';

    const emits = defineEmits([ 'node-click' ]);

    const props = {
        children: 'children',
        label: 'label'
    };

    interface Tree {
        label: string,
        type?: string,
        desc?: string,
        children?: Tree[]
    }

    const expandKey = [ '项目', 'app', 'libs', 'src', 'main', 'assets', 'data' ];

    const data: Tree[] = reactive<Tree[]>([
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
                            type: folderIcon,
                            children: [
                                {
                                    label: 'geolocation-amap-release.aar',
                                    type: androidIcon
                                },
                                {
                                    label: 'map-amap-release.aar',
                                    type: androidIcon,
                                    desc: '# vue页面需要'
                                },
                                {
                                    label: 'weex_amap-release.aar',
                                    type: androidIcon,
                                    desc: '# nvue页面需要'
                                }
                            ]
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
                                }
                            ]
                        },
                        {
                            label: 'build.gradle',
                            type: gradleIcon
                        }
                    ]
                }
            ]
        }

    ]);

</script>

<style scoped lang="scss">
	.tree-box {
        background-color: #292b30;
		margin: 10px 0;
		padding: 10px;
		border-radius: 8px;

		> .el-tree {
			background-color: transparent;
			color: white;
			--el-tree-node-hover-bg-color: rgba(137, 221, 255, 0.25);

			.desc {
                margin-left: 10px;
				font-weight: 400;
				font-size: .8em;
				color: rgba(185, 170, 170, 0.8);
                transform: translateY(3px);
			}

			:deep(.el-tree-node__content:hover) {
				background-color: rgba(137, 221, 255, 0.25) !important;
			}
		}
	}
</style>
