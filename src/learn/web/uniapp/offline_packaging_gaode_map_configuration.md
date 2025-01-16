---
lastUpdated: 2023/9/17 02:12
---

<script setup lang="ts">
    import GaodeMapTree from './components/gaode_map_tree.vue';

    const nodeClickFunc = (val) => {
        const _hash = val?.replace(/[\p{P}\p{S}]/gu, '-').toLowerCase();
        console.log(_hash);
        document.getElementById(_hash)?.scrollIntoView({
            behavior: 'smooth'
        });
    };
</script>

# uni-app 离线打包配置使用高德地图

## 配置

点击下面树节点可查看配置信息：

<GaodeMapTree @node-click="nodeClickFunc"/>

## 配置解析

### build.gradle

```nim
dependencies {
  // implementation('com.amap.api:location:6.2.0') // 高德地图
  implementation('com.amap.api:3dmap:9.5.0') // 高德地图
  implementation('com.amap.api:search:9.4.5') // 高德地图
}
```

> 官方文档说的是要`location`这个包，实际测试这个包压根不生效；
>
> 实际使用的是`3dmap`和`search`这两个包
>
> 官方文档就是个坑！

### dcloud_properties.xml

```xml
<properties>
    <features>
        <feature name="Maps" value="io.dcloud.js.map.amap.JsMapPluginImpl" /><!--高德地图-->
        <!--<feature name="Maps" value="io.dcloud.js.map.JsMapPluginImpl"/>--><!--注释掉这条-->
    </features>
    <services>
        <!--<service name="Maps" value="io.dcloud.js.map.MapInitImpl"/>--><!--注释掉这条-->
    </services>
</properties>
```

### AndroidManifest.xml

```xml {25}
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
          xmlns:tools="http://schemas.android.com/tools">
    <!--系统定位和高德地图权限：开始-->
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"
                     tools:ignore="ScopedStorage" />
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"
                     tools:ignore="ProtectedPermissions" />
    <uses-permission android:name="android.permission.READ_LOGS"
                     tools:ignore="ProtectedPermissions" />
    <uses-permission android:name="android.permission.WRITE_SETTINGS"
                     tools:ignore="ProtectedPermissions" />
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
    <!--系统定位和高德地图权限：结束-->
    <application>
        <!--高德地图配置-->
        <meta-data android:name="com.amap.api.v2.apikey" android:value="高德地图申请的安卓key" />
        <service android:name="com.amap.api.location.APSService" />
    </application>
</manifest>
```
