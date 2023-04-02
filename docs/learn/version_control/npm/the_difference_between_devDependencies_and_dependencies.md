# devDependencies 和 dependencies 的区别

## 区别

在 Node.js 中，`dependencies` 和 `devDependencies` 是两个常用的包依赖项，它们的区别在于：

- `dependencies` 是运行时依赖项，指的是生产环境需要的依赖项。

  例如，一个web应用需要使用 express 作为后端框架，那么 express 就是一个运行时依赖项。
  当你使用`npm install`或者`yarn add`命令安装依赖时，默认情况下会将其添加到`dependencies`中。

- `devDependencies` 是开发时依赖项，指的是只在开发环境中需要的依赖项。

  例如，测试框架、代码检查工具等。当你使用`npm install`或者`yarn add`命令安装依赖时，如果你希望将其作为开发时依赖项，
  可以使用`--save-dev`（简写为`-D`）选项，或者直接将其添加到`devDependencies`中。

在应用发布时，通常只会包含`dependencies`中的依赖项，而`devDependencies`中的依赖项不会被包含在内，因为它们只是在开发阶段使用的工具。

## 直观示例

假设我们有这么一个 npm 包，他的 package.json 内容如下：

```json
{
    "name": "vitepress-plugin-comment-with-giscus",
    "dependencies": {
        "@giscus/vue": "^2.2.8"
    },
    "devDependencies": {
        "typescript": "^5.0.2",
        "vue": "^3.2.47"
    }
}
```

这表示 `vitepress-plugin-comment-with-giscus` 包是严重依赖 `@giscus/vue` 包的。

当我们主项目有引用 `vitepress-plugin-comment-with-giscus` 这个包的时候：

```shell
yarn add vitepress-plugin-comment-with-giscus
```

那么我们的项目 `node_modules` 中会下载除了 `vitepress-plugin-comment-with-giscus` 包外，还会下载 `@giscus/vue` 这个依赖包。

如果我们把 `@giscus/vue` 放在 `devDependencies` 中，那么主项目不会自动下载该依赖包，从而导致项目运行报错。
