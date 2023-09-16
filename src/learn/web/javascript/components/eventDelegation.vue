<template>
    <el-tooltip
        class="box-item"
        effect="dark"
        content="你可以点击试试看~"
        placement="right"
    >
        <div ref="content" id="content">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
            <div class="box">4</div>
        </div>
    </el-tooltip>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { ElTooltip, ElMessageBox } from 'element-plus';

    const content = ref<HTMLElement | null>(null);

    onMounted(() => {
        content.value.onclick = (e: MouseEvent) => {
            const box = e.target as HTMLElement;
            ElMessageBox({
                message: box.innerText,
                showConfirmButton: false,
                showCancelButton: true,
                cancelButtonText: '关闭',
                buttonSize: 'small',
                center: true,
                customStyle: { width: '120px' }
            }).catch(() => {});
        };
    });

</script>

<style scoped lang="scss">
    #content {
        height: 120px;
        width: 120px;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;

        .box {
            text-align: center;
            line-height: 60px;
            border: 1px solid blanchedalmond;
            cursor: pointer;

            &:nth-of-type(1) {
                background-color: #6ee7b7;
            }

            &:nth-of-type(2) {
                background-color: #89DDFF;
            }

            &:nth-of-type(3) {
                background-color: #C792EA;
            }

            &:nth-of-type(4) {
                background-color: #eab308;
            }
        }
    }
</style>
