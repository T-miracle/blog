<script setup lang="ts">
    import npmProjectTreeStructureDemo from './components/npmProjectTreeStructureDemo.vue';
</script>

# NPM 上传开源项目（或插件）

## 基础项目结构

> **注意**：此过程默认你已安装 Nodejs

首先我们要有一个可以上传的项目（或插件）

下面我以一个普通插件为例，插件结构如下：

<npmProjectTreeStructureDemo/>

## 上传 Github

在 `.gitignore` 中配置好 Git 忽略上传的文件，上传项目至 Github 仓库

## 配置 package.json

```json
{
    // npm 项目名称（注意：此名称必须在 NPM 官网上不存在，保持唯一）
    "name": "npm-demo",
    // 你的版本
    "version": "1.0.6",
    // 项目描述
    "description": "npm示例",
    // 默认视为 ES 模块，项目使用 import 导入
    "type": "module",
    // ES 模块的入口文件
    "types": "./lib/index.d.ts",
    // JS 模块的入口文件
    "main": "./lib/viewer.js",
    // 关键字，用于在 NPM 官网的搜索
    "keywords": [
        "npm",
        "demo"
    ],
    // npm 上传时选中的文件。表示除了 README.md 和 package.json 为默认选中外，只上传 lib 文件夹下的内容，其他文件都不上传
    "files": [
        "lib"
    ],
    // 上面准备的 Github 仓库，如果不填写仓库地址，而你的 README.md 带有图片说明的话，上传 NPM 后图片无法显示
    "repository": {
        "type": "git",
        "url": "https://github.com/T-miracle/npm-demo"
    },
    // 你的名字
    "author": "T-miracle",
    // 开源证书类型
    "license": "ISC",
    // 如果有依赖放在这里，在父项目中安装本包时，会默认下载这些依赖
    "dependencies": {
        // ...
    },
    // 此处依赖只在开发环境下会被下载，父项目会忽略这些依赖
    "devDependencies": {
        // ...
    }
}

```

## 检查版本

使用该命令查看版本：

```shell
npm version
```

请确保版本号大于上个版本，如果是初始提交则忽略此步骤，可以直接进入上传步骤

修改版本使用：

```shell
npm version <版本号>
# 例如
npm version 1.0.1
```

## 上传

::: warning 注意
请先确保你已注册 NPM 账号，并使用

```shell
npm login
```

进行了登录
:::

使用以下命令推送至 NPM 官网

```shell
npm publish
```

如果没有报错，那么你的插件就已经被上传到 NPM 官网了

## 在其他项目中安装引用

```shell
npm i npm-demo
```
