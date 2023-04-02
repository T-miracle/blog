<!-- 封装对话框，解决 SSR 问题 -->
<template>
    <div class="dialog-modal">
        <ClientOnly>
            <ElDialog v-bind="$attrs" :draggable="true" :width="width">
                <slot></slot>
            </ElDialog>
        </ClientOnly>
    </div>

</template>

<script setup lang="ts">
    import { ElDialog } from 'element-plus';
    import { onMounted, ref } from 'vue';

    // 数据：对话框默认宽度
    const width = ref<string>('35%');

    const isBigScreen = () => {
        return window.screen.width > 1400
    }

    onMounted(() => {
        width.value = isBigScreen() ? '35%' : '90%';
    });
</script>

<style scoped lang="scss">
    .dialog-modal {
        :deep(.el-dialog__body) {
            padding: 0 20px 20px;
        }
    }
</style>
