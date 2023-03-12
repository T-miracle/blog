<script setup>
    import flexProperty from './components/flexProperty.vue'
</script>

# Flex 布局

## 概述

Flex 布局是一种基于“弹性盒子”的布局方式，它能够让容器中的元素自适应地伸缩和对齐，使得页面布局更加灵活和简单。

对于 Flex 布局的入门讲解，我强烈建议阅读阮一峰老师的文章：[**Flex 布局教程：语法篇**](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

我在这只简单演示一下用法

## 开始使用

假设 HTML 结构如下所示：

```html
<div class="flex-demo">
    <div></div>
    <div></div>
    <div></div>
    ...
</div>
```

设置 CSS：

```css
.flex-demo {
    display: flex; // 加上这句，使父元素变成弹性盒子
    // ...
}
.flex-demo > div {
    margin: 10px;
    // ...
}
```

## 属性用法

<flexProperty/>
