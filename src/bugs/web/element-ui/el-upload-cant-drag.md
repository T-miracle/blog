---
lastUpdated: 2025/04/30 10:12
---

# el-upload 为啥没法拖拽了？

今天发现一个很奇葩的问题...

在 Chrome 浏览器上，el-upload 已经设置了 `drag` 属性，但是还是无法正常使用拖拽文件功能...

最后发现，是 Window 下的设置问题...

**解决方法：**

1. Windows 键 + R，打开“运行”对话框：输入 regedit，回车。
2. 在注册表目录中，依次选择：HKEY_LOCAL_MACHINE -> SOFTWARE -> Microsoft -> Windows -> CurrentVersion -> policies -> system
3. 点击 system 后，在右侧面板右键 EnableLUA 参数，把值改成 0
4. 最后重启电脑

至此，问题解决了，我麻了...
