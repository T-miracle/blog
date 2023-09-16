# uni-app App端与嵌套web-view之间的通讯

当 App 中如果使用 webView 嵌入 H5 页面，
而 H5 页面需要与 App 进行通讯或者跳转到 App 内部页面，
需要用到 `uni.webview.js`

最新版的 `uni.webview.js` 可以在官网获取到：[地址](https://uniapp.dcloud.net.cn/component/web-view.html#web-view组件的浏览器内核说明)

目前已知版本如下：

- [uni.webview.1.5.4.js](https://gitee.com/dcloud/uni-app/raw/dev/dist/uni.webview.1.5.4.js)
- [uni.webview.1.5.2.js](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js)
- [uni.webview.0.1.52.js](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.0.1.52.js)

## 引入

使用前，我们需要将该 js 文件引入到项目中：

- 如果是 html 项目

```html
<script type="text/javascript" src="uni.webview.1.5.4.js"></script>-->
<script>
  // 待触发 `UniAppJSBridgeReady` 事件后，即可调用 uni 的 API。
  document.addEventListener('UniAppJSBridgeReady', function() {
    uni.webView.getEnv(function(res) {
      console.log('当前环境：' + JSON.stringify(res));
    });
  });
</script>
```

- 如果是 Vue 项目

```js
// 在 main.js 中引入
import 'uni.webview.1.5.4.js';
```

## 使用

当引入完毕后，即可在其他页面中调用 `uni.webView.xxx()` 对 App 进行通讯以及页面跳转

可用方法有以下：

|            方法            |                          说明                          |
|:------------------------:|:----------------------------------------------------:|
|  uni.webView.navigateTo  |                         	跳转                          |
|  uni.webView.redirectTo  |                         	重定向                         |
|   uni.webView.reLaunch   |                	关闭所有页面，打开到 App 内的某个页面                |
|  uni.webView.switchTab   |          	跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面           |
| uni.webView.navigateBack |                 	关闭当前页面，返回上一页面或多级页面                  |
| uni.webView.postMessage  | 	向应用发送消息。在 App 的 \<web-view\>上添加 `@message` 进行通讯数据监听 |
|    uni.webView.getEnv    |                       	获取当前环境                        |


