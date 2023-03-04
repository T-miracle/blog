# 指令有什么用？如何自定义一个指令？

## 什么是指令？

`Vue`中提供了一套**为数据驱动试图更为方便的操作**，这些操作被成为指令系统

我们看到的`v-`开头的行内属性，都是指令，不同的指令可以完成或者实现不同的功能

比如我们常见的`v-if`、`v-for`、`v-model`等都属于内置指令

## 如何自定义指令

注册一个自定义指令有**局部注册**和**全局注册**

### 局部注册

:::code-group

```vue [Vue2]
// 在`directive`中定义
<script>
    export default {
        directive: {
            focus: {
                inserted: function(el) {
                    el.focus(); //页面完成加载之后自动让输入框获取焦点的小功能
                }
            }
        }
    }
</script>
```

```vue [Vue3]
// 在 <script setup> 中，任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令
<script setup lang="ts">
    // 在模板中启用 v-focus
    const vFocus = {
        mounted: (el: HTMLElement) => el.focus()
    }
</script>
```

:::

### 全局注册

:::code-group

```js [Vue2]
import Vue from 'vue'

Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
})
```

```js [Vue2简写]
import Vue from 'vue'

Vue.directive('focus', (el) => {
    // 会在 `bind` 和 `update` 时都调用
    el.focus()
})
```

```ts [Vue3]
const app = createApp({})

app.directive('focus', {
    mounted: (el: HTMLElement) => {
        el.focus()
    }
})
```

```ts [Vue3简写]
const app = createApp({})

app.directive('focus', (el: HTMLElement) => {
    // 会在 `mounted` 和 `updated` 时都调用
    el.focus()
})
```

:::

### 使用方式

```vue

<template>
    <form>
        <!--绑定v-focus指令-->
        <input v-focus value=""/>
    </form>
</template>
```

## Vue2和Vue3的区别

### 函数钩子

| 2.x                  | 3.x               | 作用                                | 区别            |
|----------------------|-------------------|-----------------------------------|---------------|
| ✖                    | **created**       | 在元素的 `attribute` 或事件监听器被应用之前调用    | `vue2`没有该钩子函数 |
| **bind**             | **beforeMount**   | 只调用一次，指令绑定到元素后调用。在这里可以进行一次性的初始化设置 | 命名不同，功能一致     |
| **inserted**         | **mounted**       | 元素插入父元素后调用                        | 命名不同，功能一致     |
| ✖                    | **beforeUpdate**  | 在元素本身被更新之前调用                      | `vue2`没有该钩子函数 |
| **update**           | ✖                 | 当元素更新，但子元素尚未更新时，将调用此钩子            | `vue3`没有该钩子函数 |
| **componentUpdated** | **updated**       | 元素和所有子元素全部更新后调用                   | 命名不同，功能一致     |
| ✖                    | **beforeUnmount** | 在元素被卸载之前调用                        | `vue2`没有该钩子函数 |
| **unbind**           | **unmounted**     | 只调用一次，指令与元素解绑时调用                  | 命名不同，功能一致     |

### 函数钩子参数

| 2.x           | 3.x          | 作用                                                                         | 区别                                                                                             |
|---------------|--------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **el**        | **el**       | 指令所绑定的元素，可以用来直接操作 `DOM`                                                    | 无                                                                                              |
| **binding**   | **binding**  | 一个对象，包含以下属性                                                                | 无                                                                                              |
| ▶*name*       |              | 指令名，不包括`v-`前缀                                                              | `vue3.x`中没有                                                                                    |
| ▶*value*      | ▶*value*     | 指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`                              | 无                                                                                              |
| ▶*oldValue*   | ▶*oldValue*  | 指令绑定的前一个值，无论值是否改变都可用                                                       | `vue2.x`中仅在 `update` 和 `componentUpdated` 钩子中可用， `vue3`中仅在 `beforeUpdate` 和 `updated` 中可用      |
| ▶*expression* |              | 字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 "`1 + 1`"                   | `vue3.x`中没有                                                                                    |
| ▶*arg*        | ▶*arg*       | 传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 "`foo`"                           | 无                                                                                              |
| ▶*modifiers*  | ▶*modifiers* | 一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }` | 无                                                                                              |
|               | ▶*instance*  | 该指令的组件实例                                                                   | `vue2.x`中没有                                                                                    |
|               | ▶*dir*       | 指令定义的对象                                                                    | `vue2.x`中没有                                                                                    |
| **vnode**     | **vnode**    | `Vue` 编译生成的虚拟节点（绑定元素的底层`VNode`）                                            | 无                                                                                              |
| **oldVnode**  | **prevNode** | 上一个虚拟节点（之前的渲染中代表指令所绑定的`VNode`）                                             | 命名不同，`vue2.x`中仅在 `update` 和 `componentUpdated` 钩子中可用， `vue3`中仅在 `beforeUpdate` 和 `updated` 中可用 |

## 有哪些应用场景

- 一键复制内容

    示例：[vue-clipboard2](https://github.com/Inndy/vue-clipboard2)

- 防抖

    示例：[vue-debounce](https://github.com/dhershman1/vue-debounce)

- 图片懒加载

    示例：[vue-lazyload](https://github.com/hilongjw/vue-lazyload)

- 权限控制

    

- ...
