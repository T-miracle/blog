# 插槽`slot`

Vue 中的插槽（`Slot`）是一种功能强大的组件化技术，它允许我们**将父组件中的内容传递到子组件中进行渲染**。

插槽可以帮助我们编写高度可复用的组件，并将组件的渲染逻辑分离出来，提高了组件的可维护性和灵活性。

插槽有以下几种类型：

## 插槽类型

### 默认插槽

:::code-group
```vue [父组件]
<template>
    <childSlot>
        <template v-slot:default>
            这是放在默认插槽里的内容
        </template>
    </childSlot>
</template>
<script>
    import childSlot from './childSlot.vue'
</script>
```

```vue [子组件]
<template>
    <div>
        <slot/>
    </div>
</template>
```

```html [父组件渲染出来的内容]
<div>
    这是放在默认插槽里的内容
</div>
```
:::

父组件中还可以这样简写：

```vue
<template>
    <childSlot>
        这是放在默认插槽里的内容
    </childSlot>
</template>
<script>
    import childSlot from './childSlot.vue'
</script>
```

除了具名插槽中的内容，其余内容会默认放到子组件的默认插槽中

### 具名插槽

:::code-group
```vue [父组件]
<template>
    <childSlot>
        <template v-slot:header>
            <div>这是放在header里的内容</div>
        </template>
        <template v-slot:default>
            <div>这是放在默认插槽里的内容</div>
        </template>
        <template v-slot:footer>
            <div>这是放在footer里的内容</div>
        </template>
    </childSlot>
</template>
<script>
    import childSlot from './childSlot.vue'
</script>
```

```vue [子组件]
<template>
    <div>
        <slot name="header"/>
        <slot/>
        <slot name="footer"/>
    </div>
</template>
```

```html [父组件渲染出来的内容]
<div>
    <div>这是放在header里的内容</div>
    <div>这是放在默认插槽里的内容</div>
    <div>这是放在footer里的内容</div>
</div>
```
:::

### 动态插槽

通过中括号包裹，传入一个响应数据

:::code-group
```vue{4} [父组件]
<template>
    <childSlot>
        <template v-slot:[slotName]>
            <div>footer的内容被更改</div>
        </template>
    </childSlot>
</template>
<script setup>
    import { ref } from 'vue'
    import childSlot from './childSlot.vue'
    
    const slotName = ref('footer')
</script>
```

```vue [子组件]
<template>
    <div>
        <slot name="header">
            <div>这是放在header里的内容</div>
        </slot>
        <slot>
            <div>这是放在默认插槽里的内容</div>
        <slot>
        <slot name="footer">
            <div>这是放在footer里的内容</div>
        </slot>
    </div>
</template>
```

```html{4} [父组件渲染出来的内容]
<div>
    <div>这是放在header里的内容</div>
    <div>这是放在默认插槽里的内容</div>
    <div>footer的内容被更改</div>
</div>
```
:::

### 作用域插槽

作用域插槽的作用是**为了能在父组件中使用子组件绑定在插槽上的数据**

假设我们有父子两个组件：

:::code-group
```vue [父组件]
<template>
    <childSlot>
        <template v-slot:user>
            <div>{{ user.sex }}</div> // 报错 // [!code error]
        </template>
    </childSlot>
</template>
<script setup>
    import childSlot from './childSlot.vue'
</script>
```

```vue [子组件]
<template>
    <div>
        <slot name="user">
            <div>{{ user.name }}</div>
        </slot>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    
    const user = ref({
        name: '李四',
        sex: '男'
    })
</script>
```
:::

在父组件中直接使用`user`的数组报错，原因是`user`是子组件中定义的数据，父组件获取不到。

那么如何才能在父组件中使用子组件绑定的数据呢？

修改如下：

:::code-group
```vue{3} [父组件]
<template>
    <childSlot>
        <template v-slot:user="scope"> // 这里的`scope`是子组件绑定的所有数据的对象，其中`scope`这个值的名字是可以自定义的
            <div>{{ scope.user.sex }}</div>
        </template>
    </childSlot>
</template>
<script setup>
    import childSlot from './childSlot.vue'
</script>
```

```vue{3} [子组件]
<template>
    <div>
        <slot name="user" :user="user"> // 将数据绑定到插槽上
            <div>{{ user.name }}</div>
        </slot>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    
    const user = ref({
        name: '李四',
        sex: '男'
    })
</script>
```
:::

如果子组件绑定多个数据：

:::code-group
```vue{3} [父组件]
<template>
    <childSlot>
        <template v-slot:user="{ user, info }"> // 可以使用 ES6 的解构
            <div>{{ user.sex }}</div>
            <div>{{ info.text }}</div>
        </template>
    </childSlot>
</template>
<script setup>
    import childSlot from './childSlot.vue'
</script>
```

```vue{3} [子组件]
<template>
    <div>
        <slot name="user" :user="user" :info="info"> // 将数据绑定到插槽上
            <div>{{ user.name }}</div>
        </slot>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    
    const user = ref({
        name: '李四',
        sex: '男'
    })
    
    const info = ref({
        id: 1,
        text: '信息'
    })
</script>
```
:::

更详细请看：

[作用域插槽的使用场景有哪些？](/learn/web/vue/use_cases_for_scoped_slots.md)

## `v-slot`简写

正常情况下，我们都会使用 `#` 简化 `v-slot`：

```vue
// 简化前
<childSlot v-slot:header="scope"></childSlot>
// 简化后
<childSlot #header="scope"></childSlot>
```
