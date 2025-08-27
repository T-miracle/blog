---
lastUpdated: 2025/08/27 15:51
---

# UnoCSS 相关错误记录

1. **错误信息**：Only URLs with a scheme in: file, data, and node are supported by the default ESM loader. On Windows,
   absolute paths must be valid file:// URLs. Received protocol 'c:'

   **解决方式**：这是一个版本问题！之前用的是 `65.5.0` 版本，升级为 `66.x` 以上版本即可解决！

----
