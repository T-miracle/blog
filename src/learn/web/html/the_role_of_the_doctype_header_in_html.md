---
lastUpdated: 2023/9/17 02:12
---

# HTML中DOCTYPE头的作用是什么？

## 概述

`HTML` 文档类型声明，也被称为 `DOCTYPE`，是每个 `HTML` 或 `XHTML` 文档中需要的第一行代码。
`DOCTYPE` 声明是给 `Web` 浏览器的一个指令，说明网页是用什么版本的 `HTML` 写的。
这可以确保不同的网络浏览器对网页的解析方式是相同的。

在 `HTML 4.01` 中，`DOCTYPE` 声明是指文档类型定义（`DTD`）。
`DTD` 定义了一个 `XML` 文档的结构和元素。
因为 `HTML 4.01` 是基于标准通用标记语言（`SGML`）的，所以在 `DOCTYPE` 声明中提到 `DTD` 是必要的。

此外，`HTML 4.01` 的 `doctype` 要求声明 `strict`、`transitional` 或 `frameset`  `DTD`，每一种都有不同的使用情况，如下所述：

- 严格型 `DTD`：用于排除某些属性和元素的网页 —— W3C 希望随着 `CSS` 支持的增加而逐步淘汰这些属性和元素。
- 过渡型 `DTD`：用于包括某些属性和元素的网页 —— W3C 希望随着 `CSS` 支持的增加而逐步淘汰这些属性和元素。
- 框架型 `DTD`：用于带有框架的网页。

相比之下，`HTML5 DOCTYPE` 的声明要简单得多：它不再需要引用 `DTD`，因为它不再基于 `SGML`。请看下面的例子来比较 `HTML4.01` 和 `HTML5 DOCTYPE`。

## 示例

- `HTML5` 及以后的 `doctype` 语法：

```html
<!DOCTYPE html>
```

- 严格型 `HTML 4.01` 的 `doctype` 语法：

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

- 过渡型 `HTML 4.01` 的 `doctype` 语法：

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

- 框架型 `HTML 4.01` 的 `doctype` 语法：

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

## 历史

在 `HTML` 的形成期，`web` 标准还没有达成一致。浏览器供应商会以他们想要的方式创建新的特性。人们很少关注竞争性的浏览器。

其结果是，`web` 开发者不得不选择一个浏览器来开发他们的网站。这意味着网站在不支持的浏览器中无法很好地呈现。这种情况不能再继续下去了。

`W3C`（万维网联盟）制定了一套 `web` 标准来处理这种情况。所有的浏览器供应商和 `web` 开发人员都应该遵守这些标准。这将确保网站在不同的浏览器上都能很好地呈现。

该标准所要求的变化与一些现有的做法有很大的不同。遵循这些标准会破坏现有的不符合标准的网站。

为了解决这个问题，供应商开始在他们的浏览器中设置渲染模式。`web` 开发者需要在 `HTML` 文档的顶部添加一个 `doctype` 声明。`doctype` 声明将告诉浏览器对该文档使用何种渲染模式。

各个浏览器通常有三种不同的渲染模式：

- 完全标准模式是根据 W3C 网络标准来渲染页面。
- 怪异模式以不符合标准的方式渲染页面。
- 准标准模式接近于完全标准模式，但具有支持少量怪异的特性。

在现代的 `HTML5` 时代，`web` 标准在所有主要的浏览器中都得到了充分的实施。网站一般都是以符合标准的方式开发的。
正因为如此，`HTML5 doctype` 声明的存在只是为了告诉浏览器以完全标准模式来渲染文档。

## 使用

除了注释之外，`doctype` 声明必须是 `HTML` 文档中的第一行代码，如果需要，注释可以放在前面。对于现代 `HTML5` 文档，`doctype` 声明应该如下：

```html
<!DOCTYPE html>
```

<vPageTips :links="[
        {text: 'HTML 中的 DOCTYPE 声明是什么？', link: 'https://www.freecodecamp.org/chinese/news/what-is-the-doctype-declaration-in-html/'}
    ]">
    本文章转载于
</vPageTips>
