---
lastUpdated: 2023/12/24 22:08
---

# keep-live是什么？如何使用？

`keep-alive` 是 Vue.js 提供的一个抽象组件，用于缓存不活动的组件实例，以避免在组件切换时多次创建和销毁实例。这有助于提高性能，特别是在有大量动态组件切换的情况下。

## 基础使用

通过使用 `keep-alive`，你可以将某个组件包裹起来，使其在组件切换时保持活动状态，而不会被重新渲染。

`keep-alive` 提供了两个生命周期钩子：`activated` 和 `deactivated`，用于在组件被缓存和激活时执行相应的逻辑。

以下是一个简单的使用示例：

```vue
<template>
    <div>
        <keep-alive>
            <component :is="currentComponent"></component>
        </keep-alive>

        <button @click="toggleComponent">Toggle Component</button>
    </div>
</template>

<script>
    import ComponentA from './ComponentA.vue';
    import ComponentB from './ComponentB.vue';

    export default {
        data() {
            return {
                currentComponent: 'ComponentA'
            };
        },
        components: {
            ComponentA,
            ComponentB
        },
        methods: {
            toggleComponent() {
                this.currentComponent = this.currentComponent === 'ComponentA' ? 'ComponentB' : 'ComponentA';
            }
        }
    };
</script>
```

在这个例子中，`keep-alive` 包裹了一个动态组件，而按钮的点击事件会切换当前显示的组件。
当一个组件被切换时，`keep-alive` 会缓存旧的组件实例，而不是销毁它，从而保持组件的状态。
这样，当切回已缓存的组件时，会触发 `activated` 钩子，而离开的组件则触发 `deactivated` 钩子。

在组件内部，你可以通过在组件定义中添加 `activated` 和 `deactivated` 钩子来执行相关逻辑，例如数据的请求和释放。

:::code-group
```vue [ComponentA.vue]
<template>
    <div>
        <h2>Component A</h2>
    </div>
</template>

<script>
    export default {
        activated() {
            console.log('Component A activated');
            // 执行激活时的逻辑
        },
        deactivated() {
            console.log('Component A deactivated');
            // 执行离开时的逻辑
        }
    };
</script>
```

```vue [ComponentB.vue]
<template>
    <div>
        <h2>Component B</h2>
    </div>
</template>

<script>
    export default {
        activated() {
            console.log('Component B activated');
            // 执行激活时的逻辑
        },
        deactivated() {
            console.log('Component B deactivated');
            // 执行离开时的逻辑
        }
    };
</script>
```
:::

这样，使用 `keep-alive` 就能够实现组件的缓存和状态保持的效果。

## `include` 属性

`include` 属性允许你明确指定哪些组件应该被 `keep-alive` 缓存。它接受一个字符串或正则表达式数组，只有匹配的组件才会被缓存。

```vue
<keep-alive :include="['ComponentA', /ComponentB.*/]">
    <component :is="currentComponent"></component>
</keep-alive>
```

## `exclude` 属性

与 `include` 相反，`exclude` 属性允许你指定哪些组件不应该被 `keep-alive` 缓存。同样，它接受一个字符串或正则表达式数组。

```vue
<keep-alive :exclude="['ComponentC', /ComponentD.*/]">
    <component :is="currentComponent"></component>
</keep-alive>
```

## `max` 属性

`max` 属性用于限制 `keep-alive` 缓存的最大组件实例数量。当缓存达到这个数量时，最早缓存的组件实例会被销毁。

```vue
<keep-alive :max="5">
    <component :is="currentComponent"></component>
</keep-alive>
```

在这个例子中，最多会缓存 5 个组件实例。
