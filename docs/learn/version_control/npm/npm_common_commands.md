# NPM常用命令

## 初始化

```shell
npm init
```

## 查看版本 & 修改版本

```shell
// 查看版本
npm version
// 修改版本
npm version [版本号]
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
// 简写
npm i
```

可以安装离线NPM包

## 卸载

```shell
npm uninstall
```

## 推送

```shell
npm publish
```

将包推送到 NPM 官网，需要登录
