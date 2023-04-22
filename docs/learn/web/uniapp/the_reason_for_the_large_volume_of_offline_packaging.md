# uni-app 离线打包 APK 体积比云打包大的原因

## 原因

可能是因为选择了多个 ndk 架构

```
android {
    ndk {
        abiFilters 'x86', 'armeabi-v7a', 'arm64-v8a'
    }
}
```

正常情况仅选择 `armeabi-v7a` 架构即可，如果考虑低版本兼容性，可考虑全部选择。

## ndk 解释

`x86`, `armeabi-v7a`, `arm64-v8a` 是 Android 应用程序开发中使用的三种不同的 CPU 架构，它们的区别在于所支持的 CPU 类型和指令集不同，适用于不同的硬件平台和设备。

- `x86` 是 Intel x86 CPU 架构的一种，适用于基于 Intel x86 CPU 的 Android 设备。在这种架构上，应用程序可以直接使用 CPU 的硬件浮点运算单元，运行速度相对较快。

- `armeabi-v7a` 是基于 ARM Cortex-A8 和 ARM Cortex-A9 CPU 架构的一种，适用于大多数基于 ARMv7 架构的 Android 设备。这种架构的 CPU 可以在不支持硬件浮点运算的情况下运行软件浮点运算，运行速度相对较慢。

- `arm64-v8a` 是基于 ARM Cortex-A53 和 ARM Cortex-A57 CPU 架构的一种，适用于大多数基于 ARMv8 架构的 Android 设备。这种架构的 CPU 支持硬件浮点运算，并且相对于 'armeabi-v7a' 架构的 CPU 运行速度更快。

在开发 Android 应用程序时，通常需要将应用程序编译成适用于多种不同 CPU 架构的版本，并在发布前打包为一个包含多个架构版本的 APK 文件。
这样可以保证应用程序能够在尽可能多的 Android 设备上运行，并提高应用程序的性能和兼容性。
