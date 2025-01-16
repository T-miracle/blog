---
lastUpdated: 2023/9/17 02:12
---

# 什么是Ajax？如何实现一个简单的Ajax？

## 什么是Ajax

`AJAX`全称(`Async Javascript and XML`)

即异步的`JavaScript` 和 `XML`，是一种创建交互式网页应用的网页开发技术，可以在不重新加载整个网页的情况下，与服务器交换数据，并且更新部分网页

`Ajax` 的原理简单来说通过 `XmlHttpRequest` 对象来向服务器发异步请求，从服务器获得数据，然后用 `JavaScript` 来操作 `DOM` 而更新页面

流程图如下：

![](https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/ajax-flow.png)

下面举个例子：

领导想找小李汇报一下工作，就委托秘书去叫小李，自己就接着做其他事情，直到秘书告诉他小李已经到了，最后小李跟领导汇报工作

`Ajax` 请求数据流程与“领导想找小李汇报一下工作”类似，上述秘书就相当于 `XMLHttpRequest` 对象，领导相当于浏览器，响应数据相当于小李

浏览器可以发送 `HTTP` 请求后，接着做其他事情，等收到 `XHR` 返回来的数据再进行操作

## 实现过程

实现 `Ajax` 异步交互需要服务器逻辑进行配合，需要完成以下步骤：

1. 创建 `Ajax` 的核心对象 `XMLHttpRequest` 对象

2. 通过 `XMLHttpRequest` 对象的 `open()` 方法与服务端建立连接

3. 构建请求所需的数据内容，并通过 `XMLHttpRequest` 对象的 `send()` 方法发送给服务器端

4. 通过 `XMLHttpRequest` 对象提供的 `onreadystatechange` 事件监听服务器端你的通信状态

5. 接受并处理服务端向客户端响应的数据结果

6. 将处理结果更新到 `HTML` 页面中

## 实现代码

```js
//封装一个ajax请求
function ajax(options) {
    //创建XMLHttpRequest对象
    const xhr = new XMLHttpRequest()
    //初始化参数的内容
    options = options || {}
    options.type = (options.type || 'GET').toUpperCase()
    options.dataType = options.dataType || 'json'
    const params = options.data
    //发送请求
    if (options.type === 'GET') {
        xhr.open('GET', options.url + '?' + params, true)
        xhr.send(null)
    } else if (options.type === 'POST') {
        xhr.open('POST', options.url, true)
        xhr.send(params)
    }
    //接收请求
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let status = xhr.status
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML)
            } else {
                options.fail && options.fail(status)
            }
        }
    }
}
```

使用方式：

```js
ajax({
    type: 'post',
    dataType: 'json',
    data: {},
    url: 'https://example.com/demo.json',
    //请求成功后的回调函数
    success: function (text, xml) {
        console.log(text)
    },
    //请求失败后的回调函数
    fail: function (status) {
        console.log(status)
    }
})
```

<vPageTips :links="[
        {text: '面试官：ajax原理是什么？如何实现？', link: 'https://vue3js.cn/interview/JavaScript/ajax.html'}
    ]"
>本文转载并修改于</vPageTips>
