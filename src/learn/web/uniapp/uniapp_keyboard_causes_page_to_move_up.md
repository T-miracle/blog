---
lastUpdated: 2024/6/14 18:22
---

# uni-app App端调用键盘会导致页面上移的问题

对于这个问题可以在 `pages.json` 文件中找到对应页面，加上 `"softinputMode": "adjustResize"` 解决：

```json {6,7,8}
{
  "path": "pages/xxx/xxx",
  "style": {
    "navigationBarTitleText": "xxx",
    "enablePullDownRefresh": false,
    "app-plus": {
      "softinputMode": "adjustResize"
    }
  }
}
```

这样，调用键盘的时候，页面就不是使用上移的，而是使整个可视区域缩小。
