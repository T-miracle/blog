---
lastUpdated: 2023/9/17 02:12
---

# app.json 详细解析

```json
{
    // 页面路径
    "pages": [
        "pages/index/index",
        "pages/logs/logs"
    ],
    // 窗口样式与文本
    "window": {
        // 窗口背景文字样式
        "backgroundTextStyle": "light",
        // 导航栏背景色
        "navigationBarBackgroundColor": "#fff",
        // 导航栏标题文本
        "navigationBarTitleText": "Weixin",
        // 导航栏文字样式
        "navigationBarTextStyle": "black"
    },
    "tabBar": {
        "list": [
            {
                "pagePath": "pages/index/index",
                "text": "首页"
            },
            {
                "pagePath": "pages/logs/index",
                "text": "日志"
            }
        ]
    }
}
```
