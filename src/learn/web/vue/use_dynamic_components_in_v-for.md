# v-for中使用动态组件

假设我们有这么一个页面

```vue
<template>
    <div v-for="(item, index) in links" :key="index" :title="item.title">
        <component :is="item.icon"/>
        <a>{{ item.info }}</a>
    </div>
</template>
<script setup lang="ts">
    import { reactive } from 'vue';
    import phone from '@/components/svg/phone.vue';
    import email from '@/components/svg/email.vue';

    const links: {icon: string, info: string}[] = reactive([
        {
            icon: 'phone',
            info: '手机'
        },
        {
            icon: 'email',
            info: '邮箱'
        },
    ])
</script>
```

我们在`v-for`中使用了组件`component`，我们期望是组件最后渲染出来的是`svg`元素

然后，结果渲染出来的是

```html
<div>
    <phone />
    <a>手机</a>
</div>
<div>
    <email />
    <a>邮箱</a>
</div>
```

这明显是不对的，因为`phone`和`email`在`html`中属于未知标签

那么应该你怎么修改呢？

解决方式如下：

```vue
<script setup lang="ts">
    import { ComponentCustomOptions, reactive } from 'vue';
    import phone from '@/components/svg/phone.vue';
    import email from '@/components/svg/email.vue';

    const links: {icon: ComponentCustomOptions, info: string}[] = reactive([
        {
            icon: phone,
            info: '手机'
        },
        {
            icon: email,
            info: '邮箱'
        },
    ])
</script>
```
