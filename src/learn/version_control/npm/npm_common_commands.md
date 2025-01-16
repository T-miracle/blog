---
lastUpdated: 2023/9/17 02:12
---

# NPM常用命令

## 初始化

```shell
npm init
```

## 查看版本 & 修改版本

```shell
# 查看版本
npm version
```
```shell
# 修改版本
npm version <version>
# 示例：设置当前版本为 1.0.1
npm version 1.0.1
```

> 如果修改后没有 Git 提交，修改版本会报错，应该先提交 Git

## 打包

```shell
npm pack
```

打包功能还能起到推送前检查打包是否正确的作用

## 安装

```shell
npm install
# 简写
npm i
```

可以安装离线NPM包

## 卸载

```shell
npm uninstall
```

> 这个命令不推荐使用，一般只有一个包在上传 npm 官网的 72 小时内才可以使用此命令，
> 原因是由于之前有一位开源者恶意删除了自己仓库下的所有包，导致其他使用者无法构建项目，所以这个命令一般是不能使用的。
>
> **推荐使用 `npm deprecate` 废弃命令**

## 推送

```shell
npm publish
```

将包推送到 NPM 官网，需要登录

## 废弃

```shell
npm deprecate <pkg>[@<version>] <message>
# 示例：将 my-pkg 的 1.0.0 版本设置为废弃版本
npm deprecate my-pkg@1.0.0 "这个包已经废弃"
```
