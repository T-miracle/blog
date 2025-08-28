---
lastUpdated: 2025/08/28 15:17
---

# 解决 Tauri 无法安装 Wix 和 Nsis 的问题

有段时间没使用 Tauri 了，最近把自己的一个项目 clone 下来后，升级了 Tauri 版本为 2.x

正准备兴高采烈地准备打个包，结果杯具了

Wix 和 Nsis 这两个依赖，死活下载不了，不是超时就是其他各种报错

无奈之下，只好去 github 上询查解决方式，发现出现这种问题的人从 2023 年到现在了都还有

也有人给出了比较合理的解决方式，例如：

![](https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/tauri_install_wix_fix.png)

翻译一下大概意思为：

> 在最新版本中，可以通过以下任意一种方法解决：
>
> 1. 手动下载 [wix314](https://github.com/wixtoolset/wix3/releases/download/wix3141rtm/wix314-binaries.zip)，并将其解压到（Windows）`%LocalAppData%/tauri/WixTools314`。如果目录不存在，请先创建。
> 2. 如果你有代理，请设置代理。在 Windows PowerShell 中（将协议和端口替换为你自己的），
>
>    ```powershell
>    $env:all_proxy="socks5://localhost:12333"
>    ```
> 3. 使用 GitHub 镜像，并按 [这里](https://github.com/tauri-apps/tauri/blob/b83921226cb3084992bb5357e7e39a09ea97843e/crates/tauri-cli/ENVIRONMENT_VARIABLES.md?plain=1#L18-19) 的说明正确设置 `TAURI_BUNDLER_TOOLS_GITHUB_MIRROR` 和/或 `TAURI_BUNDLER_TOOLS_GITHUB_MIRROR_TEMPLATE` 环境变量。

其中第一种方法我试过了，很麻烦，操作起来特别繁琐，不仅需要解压 Wix 和 Nsis 两个文件，
还需要下载两个 ddl 去解压的文件里去替换，最后结果也很不能让人接受，
因为重新运行 Build 的时候，它居然把解压的 Nsis 删除了...

-----

**所以，我采用了第二种方式**

第二种方式首先你得有一个梯子（VPN），并可以正常访问 Github，然后确定系统里的代理设置是否也配置了

最后就是在 PowerShell 里直接运行 `$env:all_proxy="socks5://localhost:12333"` (记得更改成你自己VPN的代理端口号)

之后再运行 `pnpm tauri build` 就可以了

-----

*就这么个简单的玩意，居然让我白白浪费了一个上午，真的很抽象...*