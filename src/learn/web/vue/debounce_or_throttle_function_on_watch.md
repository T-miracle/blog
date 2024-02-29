# Vue2 在 watch 上使用防抖或节流函数

## 使用方式

防抖和节流函数以 Lodash 库为例

### 防抖

```js
watch: {
    value: debounce(function (val) {
        // TODO 你的逻辑
    }, 1000, { leading: true })
}
```

### 节流

```js
watch: {
    value: throttle(function (val) {
        // TODO 你的逻辑
    }, 1000, { leading: true })
}
```
