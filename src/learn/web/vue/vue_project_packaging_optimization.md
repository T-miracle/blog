---
lastUpdated: 2024/1/31 22:40
---

# vue项目上线打包时如何做性能优化

在 Vue.js 项目上线打包时，可以采取以下一些性能优化措施：

## build打包时移除所有的console

可以使用`babel-plugin-transform-remove-console`插件移除所有 console

安装：

:::code-group

```shell [npm]
npm install -D babel-plugin-transform-remove-console
```

```shell [yarn]
yarn add -D babel-plugin-transform-remove-console
```

:::

在项目的`babel.config.js`进行配置：

```js
// 这是项目发布阶段需要用到的babel 插件
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
    prodPlugins.push('transform-remove-console')
}

module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk'
            }
        ],
        // 发布产品时候的插件
        ...prodPlugins
    ]
}
```

## 启用 Gzip 压缩

gzip是一种压缩技术，他可以将原来的内容压缩成之前的三分之一甚至更小，这样用户浏览页面的速度将会快很多，增加极好的用户体验。

gzip压缩页面需要浏览器和服务器两者都支持，大多浏览器都支持这项技术（chrome、Firefox、Safari...），所以不用担心，主要是服务端怎么使用。

首先我们需要安装依赖：

- Webpack项目

:::code-group

```shell [npm]
npm install compression-webpack-plugin --save-dev
```

```shell [yarn]
yarn add -D compression-webpack-plugin
```

:::

配置：

```js
// 在`vue.config.js`中配置
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    plugins: [ new CompressionPlugin() ],
    chainWebpack: (config) => {
        // 生产环境，开启js\css压缩
        if (process.env.NODE_ENV === 'production') {
            config.plugin('CompressionPlugin').use(new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, // 匹配文件名
                threshold: 10240, // 对超过5k的数据压缩(默认10k)
                minRatio: 0.8,
                deleteOriginalAssets: false // 删除源文件(默认false)
            }))
        }
    }
}
```

- Vite项目

安装：

:::code-group

```shell [npm]
npm i vite-plugin-compression --save-dev
```

```shell [yarn]
yarn add -D vite-plugin-compression
```

:::

配置：

```ts
import { defineConfig } from "vite";
import compressPlugin from "vite-plugin-compression";

export default defineConfig({
    plugins: [
        compressPlugin({
            verbose: true, // 默认即可
            disable: false, //开启压缩(不禁用)，默认即可
            deleteOriginFile: false, //删除源文件
            threshold: 10240, //压缩前最小文件大小
            algorithm: 'gzip', //压缩算法
            ext: '.gz' //文件类型
        })
    ]
})
```

> <badge type="warning" text="注意"/> 在 Vue 项目中配置了`Gzip`后，需要在后端或者Nginx上同样开启Gzip配置才会生效

## 路由按需加载

路由懒加载的方式有两种，一种是 `require` 另一种是 `import` 。

当路由按需加载后，那么Vue服务在第一次加载时的压力就能够相应的小一些，不会出现超长白屏的问题。

下面是两种路由懒加载的写法：

```ts
// require
component: resolve => (require([ '@/components/HelloWorld' ], resolve))
// import
component: () => import('@/components/HelloWorld')
```

## UI框架按需加载

像`Element UI`和`Ant Design`这类框架，尽量不要一次性全部加载，应该使用按需加载或者自动按需加载的插件

- 按需加载示例

```ts
// 单独组件按需加载
import { ElMessageBox } from 'element-plus';
```

- 自动按需加载示例（以vite项目为例）

```ts
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
    plugins: [
        // 自动按需导入ElementPlus组件
        AutoImport({
            resolvers: [
                ElementPlusResolver()
            ]
        }),
        Components({
            resolvers: [
                ElementPlusResolver()
            ]
        }),
    ]
})
```

## 优化图片

- 可以减少图片的体积，从而加快图片的加载速度。
- 也可以使用云服务的对象存储，并绑定CDN

## 去除 `.map`文件

正常项目打包完之后，dist里面会有一个.map文件，其实我们不需要，所以需要开启配置

```js
module.exports ={
    productionSourceMap: false
}
```

## 静态资源使用 CDN

使用 CDN 可以将静态资源部署到全球多个地点，从而加速资源的加载。

## 服务器端渲染（SSR）

使用服务器端渲染可以在首次加载页面时将页面完全渲染出来，从而提高应用程序的加载速度和 SEO。

## 使用缓存

使用浏览器缓存、HTTP 缓存等方式可以减少网络请求，提高应用程序的加载速度。
