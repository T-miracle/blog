# 自用快捷键设置-仿IDEA

首先，要进行以下配置：

![](/images/HbuilderX-hotkeys.png)

然后，在 `工具 - 自定义快捷键` 中，右侧栏填写以下 json 配置：

```json
[
	// 自定义快捷键
    // 全局搜索
	{
		"key": "ctrl+shift+f",
		"command": "workbench.action.findInFiles",
        // 强行覆盖
		"override": true
	},
    // 格式化代码
	{
		"key": "ctrl+alt+l",
		"command": "editor.action.format",
		"when": "!activeEditor.readonly && activeEditor.canFormat"
	},
    // 往下复制当前行，或往右复制当前代码块
    {
        "key": "ctrl+d",
        "command": "editor.action.duplicate"
    },
    // 删除当前行
    {
        "key": "ctrl+y",
        "command": "editor.action.deleteLines"
    },
    // 跳转到定义
    {
        "key": "ctrl+b",
        "command": "workbench.action.gotoDefinition"
    }
]
```




