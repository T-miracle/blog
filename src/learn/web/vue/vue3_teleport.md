---
cbf: false
lastUpdated: 2023/12/24 23:07
---

# Vue3 Teleport组件的使用以及适用场景

`Teleport` 是 Vue 3 中新增的一个功能，用于实现在组件外部的任意位置渲染组件的内容。它类似于 Vue 2 中的 `portal` 概念，可以将组件的内容传送（teleport）到 DOM 树中的其他位置。

以下是 `Teleport` 组件的基本用法和适用场景：

## 基本用法：

:::code-group
```vue [Modal.vue]
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
    // ...
</style>
```

```vue [Parent.vue]
<template>
    <div>
        <button @click="toggleModal" style="background-color: #1a76ff; color: white; border-radius: 6px; padding: 4px 20px;">
            示例，点我看看
        </button>
        <TeleportDemo v-model="isModalVisible"/>
    </div>
</template>

<script setup>
    import TeleportDemo from './components/teleport-demo.vue';
    import { ref, watch } from 'vue';

    const isModalVisible = ref(false);

    watch(isModalVisible, val => {
        console.log(val);
    });

    const toggleModal = () => {
        isModalVisible.value = true;
    };
</script>
```
:::

<script setup>
    import TeleportDemo from './components/teleport-demo.vue';
    import { ref, watch } from 'vue';

    const isModalVisible = ref(false);
    
    watch(isModalVisible, val => {
        console.log(val);
    });

    const toggleModal = () => {
        isModalVisible.value = true;
    };
</script>
<div>
    <button @click="toggleModal" style="background-color: #1a76ff; color: white; border-radius: 6px; padding: 4px 20px;">示例，点我看看</button>
    <TeleportDemo v-model="isModalVisible"/>
</div>

点击上面按钮，按 `F12` 打开控制台可以查看 `body` 元素下的变化。

----

在上述示例中，`Teleport` 组件的 `to` 属性指定了传送目标，这里是 `body`，表示将组件的内容传送到 `body` 元素下。在 `Teleport` 内部，使用 `v-if` 控制组件的显示与隐藏。

## 适用场景：

1. **全局弹窗或提示框：** 使用 `Teleport` 可以方便地在组件外部的全局位置渲染弹窗或提示框，而不需要在组件内部定义占位符或使用全局状态管理。

2. **避免样式污染：** 如果某个组件的样式对整个应用产生了影响，而你又不想影响到其他组件，可以使用 `Teleport` 将该组件的内容渲染到 DOM 树的其他位置，避免样式的污染。

3. **复杂的动画效果：** 有时候需要在组件外部的特定位置实现一些复杂的动画效果，`Teleport` 可以使得动画元素脱离组件的层级，更容易控制和定制动画效果。

4. **处理 z-index 层级关系：** 有时候需要处理一些组件之间的层级关系，例如固定在页面顶部的导航栏，使用 `Teleport` 可以将其插入到合适的层级，避免影响其他组件的层级。

总的来说，`Teleport` 在需要将组件的内容传送到页面的其他位置时非常有用，特别是在处理全局组件、样式隔离、动画效果等场景下。
