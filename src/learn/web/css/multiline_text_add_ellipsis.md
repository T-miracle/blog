---
lastUpdated: 2023/9/17 02:12
---

# 文本多行自动省略号

```css
.box {
    display: -webkit-box;
    /* 将元素设置为超出隐藏 */
    overflow: hidden;
    /* 文本设置为省略号 */
    text-overflow: ellipsis;
    /* 定义第几行省略号 */
    -webkit-line-clamp: 2;
    /* 需要设置高度 */
    height: 48px;
    -webkit-box-orient: vertical;
}
```
