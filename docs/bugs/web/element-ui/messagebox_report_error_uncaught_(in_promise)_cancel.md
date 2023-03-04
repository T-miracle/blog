# MessageBox报错Uncaught (in promise) cancel

当使用`MessageBox`或`Message`组件时，如果组件方法后面不加上`catch()`方法会报错

原因是因为这两个组件是基于`promise().catch()`做的取消事件捕获

正确应该加上

```js
MessageBox({
    // ...
}).catch(() => {})
```
