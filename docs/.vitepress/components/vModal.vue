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
    import {ElDialog} from 'element-plus';
    import {onMounted, ref} from 'vue';

    // 数据：对话框默认宽度
    const width = ref<string>('42%');

    const isBigScreen = () => {
        return window.screen.width > 1400
    }

    onMounted(() => {
        width.value = isBigScreen() ? '42%' : '95%';
    });
</script>

<style scoped lang="scss">
	.dialog-modal {
		:deep(.el-dialog) {
			--el-dialog-bg-color: #ffffff;

			.el-dialog__header > .el-dialog__title {
				color: var(--vp-c-text-1);
				font-weight: 450;
			}

			.el-dialog__body {
				max-height: calc(100vh - 55px);
				overflow: auto;
				padding: 0 20px 20px;
				color: var(--vp-c-text-1);
			}
		}
	}

	.dark .dialog-modal {
		:deep(.el-dialog) {
			--el-dialog-bg-color: #1e1e20;
		}
	}
</style>
