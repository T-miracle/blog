---
lastUpdated: 2023/9/17 02:12
---

# 新安装包覆盖安装，新增加的页面无法跳转

uni-app 新打包的APK如果覆盖安装旧版APK，在 `pages.json` 中新添加的页面会无法正常跳转。

解决方式有以下几种：

1. 进入手机的应用中心，找到应用，强制停止，再重新打开即可（测试环境推荐）
2. 进入手机的应用中心，找到应用，清除数据与缓存重新打开即可（不推荐）
3. 打包前，更改 `manifest.json` 中的版本号，在进行打包（**正式环境推荐**）
