---
lastUpdated: 2023/12/24 21:42
---

# 透传属性（穿透属性）

透传属性是指在 Vue 组件中，将父组件中的某些属性直接传递给子组件，而无需在子组件中声明这些属性。
透传属性的主要作用是简化父子组件之间的数据传递，提高组件的可复用性和灵活性。

## `v-bind="$attrs"` 的使用

Vue 提供了 `$attrs` 对象，它包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。
通过使用 `v-bind` 将 `$attrs` 传递给子组件，可以实现透传属性。

:::code-group
```vue [父组件 ParentComponent.vue]
<template>
    <div class="parent">
        <ChildComponent some-prop="传递给孙组件的值" style="color: blue;"/>
    </div>
</template>

<script>
    import ChildComponent from './ChildComponent.vue';

    export default {
        components: {
            ChildComponent
        }
    };
</script>
```

```vue [子组件 ChildComponent.vue]
<template>
    <div class="child">
        <!--进行透传-->
        <GrandsonComponent v-bind="$attrs"/>
    </div>
</template>

<script>
    import GrandsonComponent from './Grandson.vue';

    export default {
        components: {
            GrandsonComponent
        },
        created() {
            console.log(this.$attrs) /* 打印： Object { "some-prop": "传递给孙组件的值" } */
        }
    };
</script>
```

```vue [孙组件 GrandsonComponent.vue]
<template>
    <div class="grandson">
        <!-- 孙组件可以直接获取到父组件传递的属性 -->
        <span>{{ someProp }}</span><!--打印出：传递给孙组件的值-->
    </div>
</template>

<script>
    export default {
        props: {
            someProp: String
        }
    };
</script>
```
:::

以上渲染成 HTML 结构为：

```html
<div class="parent">
    <div class="child" some-prop="传递给孙组件的值" style="color: blue;">
        <div class="grandson">
            <span>传递给孙组件的值</span>
        </div>
    </div>
</div>
```

可以利用上面的透传规则，对一个组件进行二次封装，并且不需要重复声明 `props`

## `inheritAttrs` 选项

`inheritAttrs` 选项是 Vue 组件实例的一个选项，它用于控制组件是否应该继承父组件的属性。
默认情况下，Vue 组件会自动继承父组件的非 prop 属性，以确保子组件能够在渲染根元素时包含这些属性。
但有时候你可能想要禁用这种继承行为，这时就可以使用 `inheritAttrs` 选项。

当 `inheritAttrs` 被设置为 `false` 时，Vue 将不再自动将父组件的非 prop 属性应用到子组件的根元素上。
这就给予了你更多的灵活性，可以自行决定如何处理这些属性。

从上面示例可以看到，父组件传递的属性，在子组件的根元素（带有`class="child"`的元素）上也被绑定了。
如果我们仅想要孙组件继承属性，而不想要子组件继承，可以使用 `inheritAttrs` 选项：

```vue {12} [子组件 ChildComponent.vue]
<template>
    <div class="child">
        <!--进行透传-->
        <GrandsonComponent v-bind="$attrs"/>
    </div>
</template>

<script>
    import GrandsonComponent from './Grandson.vue';

    export default {
        inheritAttrs: false, /* 设置为 false，子组件将不会继承父组件传递的属性 */
        components: {
            GrandsonComponent
        },
        created() {
            console.log(this.$attrs) /* 打印： Object { "some-prop": "传递给孙组件的值" } */
        }
    };
</script>
```

那么渲染出来的 HTML 结构将变成：

```html {2}
<div class="parent">
    <div class="child" style="color: blue;">
        <div class="grandson">
            <span>传递给孙组件的值</span>
        </div>
    </div>
</div>
```

可以发现 `some-prop` 属性已经不会在子组件上绑定了。

## 关于透传事件（`v-on="$listeners"`）

在 Vue2 中，如果要将事件像属性一样透传，需要使用 `v-on="$listeners"` 绑定在组件元素上。

但是，在 Vue3 中，已经将透传事件合并到透传属性里了，也就是说，只需要写 `v-bind="$attrs"` 就够了。
