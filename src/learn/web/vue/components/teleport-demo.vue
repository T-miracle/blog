<template>
    <div v-if="modelValue" class="modal" @click="closeModal">
        <teleport to="body">
            <div class="modal-content">
                <h2>模态框内容</h2>
                <button class="btn" @click="closeModal">关闭</button>
            </div>
        </teleport>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    const { modelValue } = defineProps({
        modelValue: Boolean
    });

    const emits = defineEmits([ 'update:modelValue' ]);

    const closeModal = () => {
        emits('update:modelValue', false);
    };
</script>

<style scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 20px;
        width: 240px;
        z-index: 9999;
        text-align: center;
    }

    .btn {
        margin-top: 10px;
        padding: 4px 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: indianred;
        color: white;
        cursor: pointer;
    }
</style>
