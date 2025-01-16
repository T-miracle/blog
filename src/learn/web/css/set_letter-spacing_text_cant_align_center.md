---
lastUpdated: 2024/6/17 15:41
---

# 设置letter-spacing后文本无法居中的问题

## 问题描述

假设我们有一段文本，在盒子内居中，示例：

```html
<div style="width: 240px; text-align: center; border: 1px solid black;">
    <span style="background-color: yellowgreen;">这是一段文本</span>
</div>
```

<div style="width: 240px; text-align: center; border: 1px solid black;">
    <span style="background-color: yellowgreen;">这是一段文本</span>
</div>

如果我们给文本添加一些字间距：

```html {2}
<div style="width: 240px; text-align: center; border: 1px solid black;">
    <span style="background-color: yellowgreen; letter-spacing: 4px;">这是一段文本</span>
</div>
```

<div style="width: 240px; text-align: center; border: 1px solid black;">
    <span style="background-color: yellowgreen; letter-spacing: 8px;">这是一段文本</span>
</div>

可以发现，实际上最后一个字后面也有一段空白间距，这导致文本无法在盒子内无法正常居中：

![](https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/letter-spacing-demo-1.png)

## 解决方式

可以使用 [`text-indent`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-indent) 来设置一个往右的缩进：

```html {1}
<div style="width: 240px; text-align: center; border: 1px solid black; text-indent: 4px;">
    <span style="background-color: yellowgreen; letter-spacing: 4px;">这是一段文本</span>
</div>
```

<div style="width: 240px; text-align: center; border: 1px solid black; text-indent: 4px;">
    <span style="background-color: yellowgreen; letter-spacing: 4px;">这是一段文本</span>
</div>

眼睛可能看不出区别，但实际上，`text-indent` 给文本前面设置了一段 `4px` 的缩进，这个可以使用浏览器控制台查看。

![](https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/letter-spacing-demo-2.png)
