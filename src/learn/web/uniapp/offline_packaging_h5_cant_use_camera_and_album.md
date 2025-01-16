---
lastUpdated: 2024/5/27 08:15
---

# 解决离线打包的APK在H5页面中无法调用相机和相册

记一次使用 Android Studio 离线打包 uni-app 项目，打包后 APK 中通过 webview 使用 H5 页面调用相机与相册没响应的问题

出问题之前的 `build.gradle` 配置：

```js
android {
    namespace 'com.xxx.xxxxxx'
    compileSdk 33

    defaultConfig {
        applicationId "com.xxx.xxxxxx"
        minSdkVersion 21
        targetSdkVersion 33
        versionCode 113320013
        versionName "1.13.13"
        multiDexEnabled true
        ndk {
            abiFilters 'x86', 'armeabi-v7a', 'arm64-v8a'
        }

        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
    }

    // ...
}
```

修改之后的配置：

```js
android {
    namespace 'com.xxx.xxxxxx'
    compileSdk 32 // [!code highlight]

    defaultConfig {
        applicationId "com.xxx.xxxxxx"
        minSdkVersion 21
        targetSdkVersion 32 // [!code highlight]
        versionCode 113320013
        versionName "1.13.13"
        multiDexEnabled true
        ndk {
            abiFilters 'x86', 'armeabi-v7a', 'arm64-v8a'
        }

        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
    }
    
    // ...
}
```

问题所在：

**不要使用 SDK 高于 32，貌似是因为 33 属于 Android 13 版本，权限配置有过大的改动**
