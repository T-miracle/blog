---
lastUpdated: 2024/3/6 10:11
---

# Vue2 组件选项 extends 的用法

在 Vue 中，你可以使用 extends 选项来扩展一个已存在的组件。

这种方式允许你基于已有的组件定义新的组件，**继承已有组件的属性、方法和生命周期钩子**，并且可以在新组件中添加额外的逻辑或修改已有的属性、方法。

但是请注意，它只继承逻辑，并**不继承页面结构**，需要自己重写。

下面，我将定义两个组件页面（componentA 和 componentB）进行举例解释，其中 componentB 继承 componentA。

## 继承生命周期

::: code-group
```vue [componentB.vue] {6,8}
<template>
    <div></div>
</template>

<script>
    import ComponentA from './ComponentA.vue';
    export default {
        extends: ComponentA,
        beforeCreate() {
            console.log('ComponentB beforeCreate');
        },
        created() {
            console.log('ComponentB created');
        },
        beforeMount() {
            console.log('ComponentB beforeMount');
        },
        mounted() {
            console.log('ComponentB mounted');
        },
    };
</script>
```

```vue [componentA.vue]
<template>
    <div></div>
</template>

<script>
    export default {
        beforeCreate() {
            console.log('ComponentA beforeCreate');
        },
        created() {
            console.log('ComponentA created');
        },
        beforeMount() {
            console.log('ComponentA beforeMount');
        },
        mounted() {
            console.log('ComponentA mounted');
        }
    };
</script>
```
:::

调用 componentB 页面，控制台打印：

```
ComponentA beforeCreate
ComponentB beforeCreate
ComponentA created
ComponentB created
ComponentA beforeMount
ComponentB beforeMount
ComponentA mounted
ComponentB mounted
```

可以发现，ComponentA 和 ComponentB 的生命周期都被调用了，并且被继承的 ComponentA 组件的生命周期会比 ComponentB 优先执行。

## 继承或重写数据

::: code-group
```vue [componentB.vue]
<template>
    <div>
        <div>{{ message }}</div>
        <div>{{ message2 }}</div>
    </div>
</template>

<script>
    import ComponentA from './ComponentA.vue';
    export default {
        extends: ComponentA,
        data() {
            return {
                message2: '这是 ComponentB'
            };
        }
    };
</script>
```

```vue [componentA.vue]
<template>
    <div>
        <div>{{ message }}</div>
        <div>{{ message2 }}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: '你好 ComponentA',
                message2: '这是 ComponentA',
            };
        },
    };
</script>
```
:::

调用 componentB 页面，浏览器显示：

![](https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/vue-extends-image-1.png)

可以发现，componentA 的 message 被复用了，但是 message2 被重写覆盖了。

而且 `props` 也和 `data` 一样会这样继承或重写。

## 继承或重写方法

::: code-group
```vue [componentB.vue]
<template>
    <div>
        <button @click="func">点击1</button>
        <button @click="func2">点击2</button>
    </div>
</template>

<script>
    import ComponentA from './ComponentA.vue';
    export default {
        extends: ComponentA,
        methods: {
            func2() {
                console.log('func change');
            }
        }
    };
</script>
```

```vue [componentA.vue]
<template>
    <div></div>
</template>

<script>
    export default {
        methods: {
            func() {
                console.log('func');
            },
            func2() {
                console.log('func2');
            }
        }
    };
</script>
```
:::

浏览器渲染：

![](https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/vue-extends-image-2.png)

顺序点击页面的两个按钮，控制台打印：

```
func
func change
```

可以发现，func 方法被继承使用，但是 func2 方法被重写。

## 继承混入和子组件

::: code-group
```vue [componentB.vue] {3}
<template>
    <div>
        <ChildComponent propValue="prop change"/>
        <div>{{ mixinValue }}</div>
    </div>
</template>

<script>
    import ComponentA from './ComponentA.vue';
    export default {
        extends: ComponentA
    };
</script>
```

```vue [componentA.vue] {8,9,12,13}
<template>
    <div>
        <ChildComponent propValue="prop no change"/>
    </div>
</template>

<script>
    import mixins from './mixins';
    import ChildComponent from './ChildComponent.vue';

    export default {
        mixins: [ mixins ],
        components: { ChildComponent }
    };
</script>
```

```vue [ChildComponent.vue]
<template>
    <div>ChildComponent：{{ propValue }}</div>
</template>

<script>
    export default {
        props: {
            propValue: {
                type: String,
                default: ''
            }
        },
    };
</script>
```

```js [mixins.js]
export default {
    data() {
        return {
            mixinValue: 'mixin value'
        }
    }
}
```
:::

调用 componentB，浏览器渲染：

![](https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/vue-extends-image-3.png)

可以发现，componentB 并没有引入 mixins.js 和 ChildComponent 组件，但还是调用成功了。

同理，`emits` 也会被继承。

## 使用场景

多用于修改公共组件，当你不想改动原有组件，或无法改动依赖库中的组件时，可以使用该方式，基于原组件重写一个新的组件。

例如：重写 element-ui 的组件。





