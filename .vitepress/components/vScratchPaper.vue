<template>
    <div>
        <el-input
            v-model="textarea"
            :rows="10"
            type="textarea"
            placeholder="这是一张草稿纸，答案请在下面评论区提交~"
        />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { ElInput } from 'element-plus'

    const textarea = ref<string>('')
</script>

<style scoped lang="scss">

</style>
