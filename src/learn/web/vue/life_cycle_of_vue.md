---
lastUpdated: 2023/9/17 02:12
---

# Vue的生命周期

## 生命周期是什么

生命周期`（Life Cycle）`的概念应用很广泛，特别是在政治、经济、环境、技术、社会等诸多领域经常出现，其基本涵义可以通俗地理解为“从摇篮到坟墓”`（Cradle-to-Grave）`
的整个过程在 Vue 中实例从创建到销毁的过程就是生命周期，即指从创建、初始化数据、编译模板、挂载 Dom 
→ 渲染、更新 → 渲染、卸载等一系列过程我们可以把组件比喻成工厂里面的一条流水线，每个工人（生命周期）站在各自的岗位，当任务流转到工人身边的时候，工人就开始工作

PS：在 Vue2 生命周期钩子会自动绑定 `this` 上下文到实例中，因此你可以访问数据，对 `property`
和方法进行运算这意味着你不能使用箭头函数来定义一个生命周期方法 (例如 `created: () => this.fetchTodos()`)

## 生命周期有哪些

Vue 生命周期总共可以分为这几个阶段：创建前后, 载入前后,更新前后,销毁前销毁后，以及一些特殊场景的生命周期

|     正常生命周期      |      描述       |               vue2               |               vue3                |                              备注                              |
|:---------------:|:-------------:|:--------------------------------:|:---------------------------------:|:------------------------------------------------------------:|
|     `setup`     |   组件实例被创建时    | <Badge type="danger" text="没有"/> |   <Badge type="tip" text="新增"/>   | `setup`是 Vue3 新增的生命周期钩子，<br/>它可以代替`beforeCreate` 和 `created` |
| `beforeCreate`  |   组件实例被创建之初   |   <Badge type="tip" text="✔"/>   | <Badge type="warning" text="更改"/> |       Vue3 中如果用组合式 API 则无法调用该钩子函数，<br/>但是如果使用组合式则可以调用        |
|    `created`    |  组件实例已经完全创建   |   <Badge type="tip" text="✔"/>   | <Badge type="warning" text="更改"/> |                              同上                              |
|  `beforeMount`  |    组件挂载之前     |   <Badge type="tip" text="✔"/>   |   <Badge type="tip" text="✔"/>    |                             未改变                              |
|    `mounted`    |  组件挂载到实例上去之后  |   <Badge type="tip" text="✔"/>   |   <Badge type="tip" text="✔"/>    |                             未改变                              |
| `beforeUpdate`  | 组件数据发生变化，更新之前 |   <Badge type="tip" text="✔"/>   |   <Badge type="tip" text="✔"/>    |                             未改变                              |
|    `updated`    |   组件数据更新之后    |   <Badge type="tip" text="✔"/>   |   <Badge type="tip" text="✔"/>    |                             未改变                              |
| `beforeDestroy` | 组件实例销毁（卸载）之前  |   <Badge type="tip" text="✔"/>   | <Badge type="warning" text="更改"/> |         vue3该生命周期的钩子函数还存在，<br/>但是改名为`beforeUnmount`          |
|   `destroyed`   | 组件实例销毁（卸载）之后  |   <Badge type="tip" text="✔"/>   | <Badge type="warning" text="更改"/> |           vue3该生命周期的钩子函数还存在，<br/>但是改名为`unmounted`            |

|    缓存生命周期     |             描述              |             vue2             |             vue3             | 备注  |
|:-------------:|:---------------------------:|:----------------------------:|:----------------------------:|:---:|
|  `activated`  | `keep-alive` 缓存的组件激活（重新进入）时 | <Badge type="tip" text="✔"/> | <Badge type="tip" text="✔"/> |     |
| `deactivated` | `keep-alive` 缓存的组件停用（再次离开）时 | <Badge type="tip" text="✔"/> | <Badge type="tip" text="✔"/> |     |

|      其他生命周期       |                           描述                           |               vue2                |             vue3             | 备注  |
|:-----------------:|:------------------------------------------------------:|:---------------------------------:|:----------------------------:|:---:|
|  `errorCaptured`  |                   捕获一个来自后代组件的错误时被调用                    | <Badge type="tip" text="2.5.0+"/> | <Badge type="tip" text="✔"/> |     |
|  `renderTracked`  | 调试钩子，当组件渲染过程中追踪到响应式依赖时调用<br/>仅在开发模式下可用，且在服务器端渲染期间不会被调用 | <Badge type="danger" text="没有"/>  | <Badge type="tip" text="✔"/> |     |
| `renderTriggered` | 调试钩子，当响应式依赖的变更触发了组件渲染时调用<br/>仅在开发模式下可用，且在服务器端渲染期间不会被调用 | <Badge type="danger" text="没有"/>  | <Badge type="tip" text="✔"/> |     |
| `serverPrefetch`  |            异步函数，在组件实例在服务器上被渲染之前调用，仅在 SSR 可用            | <Badge type="danger" text="没有"/>  | <Badge type="tip" text="✔"/> |     |

## 生命周期整体流程图

<vImageViewer
src='https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/life-cycle.jpg'
alt='点我查看vue2生命周期图'
inline="true"
/>

<vImageViewer
src='https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/lifecycle-vue3.png'
alt='点我查看vue3生命周期图'
inline="true"
/>

## 各生命周期中组件与数据的加载状态

我们以 Vue3 为例，创建一对父子组件：

:::code-group
```vue [父组件 parent.vue]
<template>
    <div>
        <div>
            <button @click="visible = !visible">{{ !visible ? '打开' : '关闭' }}子组件</button>
        </div>
        <child v-if="visible"/>
    </div>
</template>

<script>
    import child from './child.vue';

    export default {
        name: 'parent',
        components: {
            child
        },
        data() {
            return {
                visible: false
            }
        }
    };
</script>
```
```vue [子组件 child.vue]
<template>
    <div>
        <span>{{ testData }}</span>
        <button @click="updateData">修改值</button>
    </div>
</template>

<script>
    export default {
        name: 'child',
        data() {
            return {
                testData: '我是子页面'
            };
        },
        methods: {
            updateData() {
                this.testData = this.testData + '=';
            }
        },
        setup() {
            console.log('setup', /*this.$el, this.$data*/); // 如果放开注释会报错 // [!code error]
        },
        beforeCreate() {
            console.log('beforeCreate', this.$el, this.$data);
        },
        created() {
            console.log('created', this.$el, this.$data);
        },
        beforeMount() {
            console.log('beforeMount', this.$el, this.$data);
        },
        mounted() {
            console.log('mounted', this.$el, this.$data);
        },
        beforeUpdate() {
            console.log('beforeUpdate', this.$el, this.$data);
        },
        updated() {
            console.log('updated', this.$el, this.$data);
        },
        beforeUnmount() {
            console.log('beforeUnmount', this.$el, this.$data);
        },
        unmounted() {
            console.log('unmounted', this.$el, this.$data);
        },
        activated() {
            console.log('activated', this.$el, this.$data);
        },
        deactivated() {
            console.log('deactivated', this.$el, this.$data);
        }
    };
</script>
```
:::

**你可以打开控制台，点击下面按钮查看日志：**

<parent/>

-----------

- 当打开子组件

```console
setup
beforeCreate null ▶ Object { }
created null ▶ Proxy { <target>: {…}, <handler>: {…} }
beforeMount ▶ null ▶ Proxy { <target>: {…}, <handler>: {…} }
mounted ▶ <div id="child" data-v-d003c437="" data-v-8216dc0a=""> ▶ Proxy { <target>: {…}, <handler>: {…} }
```

- 当更新子组件

```console
beforeUpdate ▶ <div id="child" data-v-d003c437="" data-v-8216dc0a=""> ▶ Proxy { <target>: {…}, <handler>: {…} }
updated ▶ <div id="child" data-v-d003c437="" data-v-8216dc0a=""> ▶ Proxy { <target>: {…}, <handler>: {…} }
```

- 当关闭子组件

```console
beforeUnmount ▶ <div id="child" data-v-d003c437="" data-v-8216dc0a=""> ▶ Proxy { <target>: {…}, <handler>: {…} }
unmounted ▶ <div id="child" data-v-d003c437="" data-v-8216dc0a=""> ▶ Proxy { <target>: {…}, <handler>: {…} }
```

---------------

可见在 Vue3 中：

|     当生命周期为      |                  组件状态                   |                  数据状态                   |      触发时机      |
|:---------------:|:---------------------------------------:|:---------------------------------------:|:--------------:|
|     `setup`     | <badge type="danger" text="undefined"/> | <badge type="danger" text="undefined"/> |     进入组件时      |
| `beforeCreate`  |   <badge type="danger" text="null"/>    |    <badge type="danger" text="未加载"/>    |     组件开始创建     |
|    `created`    |   <badge type="danger" text="null"/>    |     <badge type="tip" text="已加载"/>      |     组件创建之后     |
|  `beforeMount`  |   <badge type="danger" text="null"/>    |     <badge type="tip" text="已加载"/>      |     组件开始安装     |
|    `mounted`    |     <badge type="tip" text="已加载"/>      |     <badge type="tip" text="已加载"/>      |     组件安装完毕     |
| `beforeUpdate`  |     <badge type="tip" text="已加载"/>      |     <badge type="tip" text="已加载"/>      |    仅当数据更新时     |
|    `updated`    |     <badge type="tip" text="已加载"/>      |     <badge type="tip" text="已加载"/>      |    仅当数据更新时     |
| `beforeUnmount` |     <badge type="tip" text="已加载"/>      |     <badge type="tip" text="已加载"/>      |    组件准备卸载前     |
|   `unmounted`   |     <badge type="tip" text="已加载"/>      |     <badge type="tip" text="已加载"/>      |     组件卸载之后     |
|   `activated`   |    <badge type="danger" text="未触发"/>    |    <badge type="danger" text="未触发"/>    | 仅当组件已被缓存，重新进入时 |
|  `deactivated`  |    <badge type="danger" text="未触发"/>    |    <badge type="danger" text="未触发"/>    | 仅当组件已被缓存，再次退出时 |

> <badge type="warning" text="注意"/> 在 Vue2 中 `beforeCreate`、`created`和`beforeMount`不显示为`null`和`未加载`，而是显示为`undefined`，其余没什么区别

## 结论

如果需要操作 DOM，我们应该在 `mounted` 中去进行，因为在此之前 DOM 没有挂载完

如果是请求数据，应该在 `created` 中或之后进行

<script setup>
    import parent from './components/parent.vue';
</script>
