# 通过 APK 反向编译获取 versionCode 和 versionName 等信息

首先保证电脑上有 `aapt` 命令行工具

一般 `aapt` 是下载 Android SDK 后，在 `build-tools` 中自带的

可以通过 `Android Studio` 自动获取下载 或者 去[官网下载](https://developer.android.com/studio)

![](/images/aapt-path.png)

打开命令行工具，使用以下命令对 APK 文件进行反编译获取（_如果需要经常使用该命令工具，建议添加至系统环境_）

```shell
aapt dump badging your_app.apk
```

其中，your_app.apk 是要反编译的 APK 文件名

执行命令后，将显示 APK 文件的所有信息，包括 versionCode 和 versionName

输出信息如下：

```shell
package: name='com.your.app' versionCode='112233' versionName='1.0.1'
```

其中，com.your.app 是应用程序的包名，versionCode 是应用程序的版本代码，versionName 是应用程序的版本名称



