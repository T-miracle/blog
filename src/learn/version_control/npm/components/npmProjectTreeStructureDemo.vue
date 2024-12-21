<template>
    <div class="tree-box">
        <el-tree
            :data="data"
            :props="props"
            node-key="label"
            :default-expanded-keys="['lib']"
        >
            <template #default="{ node, data }">
                <el-icon
                    :size="18"
                    style="margin-right: 6px"
                    v-html="data.type"
                />
                <span>{{ data.label }}</span>
            </template>
        </el-tree>
    </div>
</template>

<script setup lang="ts">
    import { ElTree, ElIcon } from 'element-plus';
    import { reactive } from 'vue';
    import { ignoreIcon, jsIcon, jsonIcon, folderIcon, mdIcon, tsIcon } from '@/public/icons';

    const props = {
        children: 'children',
        label: 'label'
    };

    interface Tree {
        label: string,
        type: string,
        children?: Tree[]
    }

    const data: Tree[] = reactive([
        {
            label: 'lib',
            type: folderIcon,
            children: [
                {
                    label: 'index.ts',
                    type: tsIcon
                },
                {
                    label: 'index.js',
                    type: jsIcon
                },
                {
                    label: 'index.d.ts',
                    type: tsIcon
                }
            ]
        },
        {
            label: 'node_modules',
            type: folderIcon,
            children: [
                {
                    label: '一些依赖文件...',
                    type: folderIcon
                }
            ]
        },
        {
            label: '.gitignore',
            type: ignoreIcon
        },
        {
            label: 'package.json',
            type: jsonIcon
        },
        {
            label: 'package-lock.json',
            type: jsonIcon
        },
        {
            label: 'README.md',
            type: mdIcon
        },
        {
            label: 'tsconfig.json',
            type: jsonIcon
        }
    ]);

</script>

<style scoped lang="scss">
    .tree-box {
        margin: 10px 0;
        padding: 10px;
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
