# font-synthesis属性导致中文斜体不生效的问题

## `font-synthesis`有什么用？

大多数标准西方字体包含斜体和粗体变体，但许多新颖（`novelty`）的字体不包括这些。
用于中文、日文、韩文和其他语标文字（`logographic script`）的字体往往不含这些变体，同时，从默认字体中生成、合成这些变体可能会妨碍文本的易读性。
在这些情况下，可能最好关闭浏览器默认的 `font-synthesis` 字体合成特性

`font-synthesis` 属性的作用就是**控制浏览器可以合成（`synthesize`）缺失的字体、粗体或斜体**

## `font-synthesis`属性值

- ### `none`

    此关键词表示不合成粗体字型（`typeface`）或斜体字型。

- ### `weight`

    此关键词表示，如果需要的话，可以合成粗体字型。

- ### `style`

    此关键词表示，如果需要的话，可以合成斜体字型。

## `font-synthesis: none`会导致某些中文字体的斜体失效

这是我用`vitpress`时发现的一个问题，在`vitepress`中使用斜体时，除了英文字体生效外，中文字体死活不生效

后面调试`CSS`后发现，是因为`html`上的`font-synthesis: none`导致的

应该让`em`标签允许字体合成：

```css
em {
    font-synthesis: style;
}
```
