---
lastUpdated: 2023/9/17 02:12
---

# 头像组件第一次地址加载报错后，数据再次获取后无法重新加载

在 Element UI 版本中，如果 `el-avatar` 头像组件首次加载的地址是错误的地址，会导致后续更新都无法再次更新组件

想要正确地重新加载头像组件，需要给组件加上 `key` 属性

```vue {2}
<el-avatar
    :key="url"
    shape="square"
    :src="url"
    alt=""
/>
```
