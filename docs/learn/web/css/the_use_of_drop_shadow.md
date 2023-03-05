# drop-shadow属性的使用

## `drop-shadow`属性

CSS中的`drop-shadow`属性可以为元素添加一个阴影效果。

该属性可以接受多个值，用逗号隔开，分别表示阴影的水平偏移量、垂直偏移量、模糊半径和阴影颜色。

## `drop-shadow`属性和`box-shadow`的区别

`drop-shadow`属性和`box-shadow`属性都可以为元素添加阴影效果，但它们有以下几个区别：

- 适用范围不同：`box-shadow`适用于盒子模型元素，而`drop-shadow`可以用于任何元素。

- 兼容性不同：`drop-shadow`是CSS滤镜，只能在支持滤镜的浏览器上使用，而`box-shadow`的兼容性比较好。

- 可定制性不同：`box-shadow`可以设置多个阴影，而`drop-shadow`只能设置单个阴影。

- **阴影效果不同：`drop-shadow`产生的阴影效果更加真实，可以呈现出元素形状的轮廓，而`box-shadow`产生的阴影则是一个矩形。**

- 参数设置不同：`box-shadow`的参数包括水平偏移量、垂直偏移量、模糊半径、扩张半径和阴影颜色等，而`drop-shadow`的参数包括水平偏移量、垂直偏移量、模糊半径和阴影颜色，没有扩张半径这一参数。

## 具体用法

- `box-shadow`

```css
.box {
  /* 水平偏移量为2px，垂直偏移量为2px，模糊半径为5px，阴影颜色为黑色 */
  box-shadow: 2px 2px 5px black;
}
```

- `drop-shadow`

```css
.box {
  /* 水平偏移量为0，垂直偏移量为0，模糊半径为10px，阴影颜色为红色 */
  filter: drop-shadow(0 0 10px red);
}
```

## 总结

综上所述，`box-shadow`和`drop-shadow`都有各自的特点和使用场景，开发者需要根据具体的需求和兼容性考虑选择哪一种阴影效果。

需要注意的是，由于`drop-shadow`的兼容性较差，建议在使用时谨慎考虑浏览器的兼容性。

如果需要在较老的浏览器上实现阴影效果，可以考虑使用`box-shadow`属性或者使用图片或SVG代替。
