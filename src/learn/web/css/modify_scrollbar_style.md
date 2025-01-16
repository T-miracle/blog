---
lastUpdated: 2023/9/17 02:12
---

# 修改滚动条样式

```scss
* {
    /*--ms-滚动条--*/
    scrollbar-width: auto; // 滚动条宽度（默认值 auto，可选值 none thin）
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent; // 第一个参数是滑块的颜色，第二个参数是滚动条背景的颜色

    /*-webkit-滚动条*/
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: transparent;
    }

    /*-webkit-滑块*/
    &::-webkit-scrollbar-thumb {
        height: 50px;
        outline-offset: -2px;
        outline: 2px white solid;
        border-radius: 4px;
        border: 2px transparent solid;
        background-color: rgba(0, 0, 0, 0.2);
    }

    /*-webkit-滑块hover效果*/
    &::-webkit-scrollbar-thumb:hover {
        height: 50px;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, .4);
    }

    /*-webkit-滚动框*/
    &::-webkit-scrollbar-track-piece {
        -webkit-border-radius: 0;
        background-color: transparent;
    }

    /* -webkit-滑轨 */
    &::-webkit-scrollbar-track {
        right: 0;
        background-color: transparent;
    }

    /* -webkit-滑轨两头的按钮 */
    &::-webkit-scrollbar-button {
        // display: none;
        height: 8px;
        width: 8px;
        background-color: transparent;
    }

    /* -webkit-边角 */
    &::-webkit-scrollbar-corner {
        background-color: transparent;
    }
}
```


