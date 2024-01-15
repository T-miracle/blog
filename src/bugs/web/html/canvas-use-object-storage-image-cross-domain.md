# img 标签加载对象存储图片后再使用 canvas 调用当前图片，导致图片跨域的问题

::: tip 相关问题
> *new image 访问图片跨域问题*
>
> *canvas 访问对象存储图片跨域*
:::

## 问题描述

在页面上，img 元素和 canvas 元素同时调用了同一张对象存储的图片（有过期时间）

其中，img 元素的使用如下：

```vue
<!--使用了饿了么UI组件-->
<el-image :src="imageUrl"/>
```

而在另一个元素 canvas 中，同样这样调用了 `imageUrl` 这个图片地址

```js
this.image = new Image()
this.image.crossOrigin = 'anonymous'
this.image.src = this.imageUrl
// 其他渲染逻辑
```

但是如果你这样使用，会发现控制台报错：

```
Access to image at 'xxx' from origin 'xxx' has been blocked by CORS policy: // [!code error]
No 'Access-Control-Allow-origin' header is present on the requested resource. // [!code error]
```

## 解决思路

1. 因为图片来自云对象存储服务，所以首先要确定的是对象存储配置，是否开放了相应域名的 CORS 和白名单，
   否则在 `<img>` 或者 `<el-image>` 这一步，在页面上的图片就已经跨域了，会导致图片显示不出来
2. 如果图片在 `<img>` 或者 `<el-image>` 中正常使用，就可以排除对象存储配置的问题了。
   那么，就可以考虑 `crossOrigin` 相关的问题了，先说说 `crossOrigin` 是什么？MDN 上是如下解释的：

   ![crossOrigin](/images/crossOrigin.png)

   当你使用了 `<img>` 或者 `<el-image>` 去加载了图片，那么再在同一页面使用 `new image()`
   去加载这张图片，而且设置了 `crossOrigin` 的跨域属性为 `anonymous`。
   这样会导致跨域问题，因为加了 `crossOrigin` 属性，则表明图片就一定会按照 CORS 来请求图片,而通过CORS 请求到的图片可以再次被复用到
   canvas 上进行绘制

   简而言之：
    1. 通过 `<img>` 加载的图片，浏览器默认情况下会将其缓存起来
    2. 当我们从 JS 的代码中创建的 `<img>` 再去访问同一个图片时，浏览器就不会再发起新的请求，而是直接访问缓存的图片。但是由于
       JS 中的 `<img>` 设置了 `crossOrigin`，也就意味着它将要以 CORS 的方式请求，但缓存中的图片显然不是的，所以浏览器直接就拒绝了。
       连网络请求都没有发起。
    3. 在 Chrome 的调试器中，在 `network` 面板中，我们勾选了 `disable cache` 选项，验证了问题确实上所述，浏览器这时发起了请求并且
       JS 的 `<img>` 也能正常请求到图片

## 解决方案

所以，只需要在 `<img>` 或者 `<el-image>` 上，加上 `crossorigin="anonymous"` 就行了

```vue
<el-image :src="imageUrl" crossorigin="anonymous"/>
```

<vPageTips :links="[{text: '一个关于image访问图片跨域的问题', link: 'https://juejin.cn/post/6844903795726483463'}]"/>
