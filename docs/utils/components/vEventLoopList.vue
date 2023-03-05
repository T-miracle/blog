<template>
    <el-tabs type="border-card" tab-position="right" class="event-loop-tabs" v-if="dataList">
        <el-tab-pane v-for="item in dataList" :key="item.id" :label="item.id">
            <div>
                <v-event-loop v-bind="item.content.eventLoopData"/>
            </div>
            <div class="event-loop-tabs-text" v-for="(desc, idx) in item.content.desc" :key="idx" v-html="desc"></div>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
    import { ElTabs, ElTabPane } from 'element-plus';
    import VEventLoop from './vEventLoop.vue';

    type dataListType = {
        id: number,
        content: {
            eventLoopData?: {
                /*栈内容*/
                stack?: string[]
                /*APIs内容*/
                apis?: {
                    time?: string,
                    info: string
                }[]
                /*event-loop图标旋转*/
                loop?: boolean
                /*队列信息*/
                queue?: string[][]
                /*控制台内容*/
                console?: string[]
                /*控制台标记*/
                consoleIndex?: number
            },
            desc?: string[]
        }
    }

    const { dataList } = defineProps<{
        dataList: dataListType[]
    }>();
</script>

<style scoped lang="scss">
    .event-loop-tabs {
        margin: 20px 0;

        .event-loop-tabs-text {
            color: red;
            font-family: "Microsoft YaHei UI", sans-serif;
            font-weight: bold;
        }
    }

    :deep(.el-tabs__item.is-right) {
        padding: 0 4px;
        text-align: center;
        user-select: none;
    }
</style>
