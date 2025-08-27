---
lastUpdated: 2025/08/27 16:13
---

# 版本管理工具：Fnm - 安装与使用指南

## 前言

- **Q**：为什么使用 Fnm ？

  **A**: 在多项目运行下，显然只有一个版本的 NodeJs 是不够用的。NodeJs 本身是单独安装，
  如果想要切换成不同的版本，则需要安装多个不同的版本。但是很不幸，
  切换版本需要每次改动系统环境变量，这无疑是很麻烦的一个操作。

  而版本管理工具的作用，便是为了解决这个问题。

  Github 上还有多个类似的工具，类似：nvm、nvs、volta 等...

  我之前也是使用过 nvm-windows，有段时间确实是挺好用的，后面 1.2.x 版本之后，
  经常出现低版本 NodeJs 无法正常下载安装的问题，于是，我不得不另寻他路...

  而现在，我找到了 Fnm ... （它居然还是 Rust 写的，我也是在尝试学习这门语言，这很令人兴奋！）

## 如何安装（Windows 下）

### 获取安装包

首先，先去官方仓库下载最新的安装包，指路👉：[点我查看](https://github.com/Schniz/fnm/releases)

下载 `fnm-windows.zip`

解压后会得到一个 exe 文件，将它放到一个只有英文且没有空格的目录下，例如：C:\Software\fnm\

### 配置系统变量

然后打开 电脑中的 `系统` - `高级系统设置` - `环境变量` - `系统变量`，编辑 `Path` 属性

将 C:\Software\fnm\ 添加在里面

现在，你可以执行以下命令测试下是否成功：

```shell
fnm -version
```

### 写入脚本

打开一个 PowerShell，执行命令：

```shell
notepad $profile
```

如果原来存在，会显示脚本内容；否则，会提示 `系统找不到指定路径`。

如果不存在，先在控制台输入：

```shell
$profile
```

来查看脚本写入路径。正常会显示：

```shell
C:\Users\你的用户名\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
```

这是你需要手动创建的路径与文件名。

创建完成后，在 `Microsoft.PowerShell_profile.ps1` 中写入：

```shell
fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression
```

然后保存。

最后，重开一个命令窗口，执行：

```shell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

到这一步，基本算是大功告成了！

现在，你可以愉快的使用 Fnm 切换不同的 NodeJs 版本了！

## 常用命令

下面，我仅介绍几个常用的命令：

- 查看可安装的版本列表

```shell
fnm list-remote
```

- 安装

```shell
fnm install [版本号]
fnm install 14.17.0 # 安装具体版本
fnm install 22 # 安装当前总版本号的最后一个可用版本
```

- 卸载

```shell
fnm uninstall [版本号]
fnm uninstall 14.17.0 # 卸载具体版本
fnm uninstall 22 # 如果只有一个 22 的版本，则卸载
```

- 可用版本列表

```shell
fnm list
fnm ls # 简写
```

- 切换版本

```shell
fnm use [版本号]
fnm uninstall 14.17.0 # 切换具体版本
fnm uninstall 22 # 如果只有一个 22 的版本，则切换
```

- 指定默认版本

```shell
fnm default [版本号]
```