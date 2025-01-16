---
lastUpdated: 2023/9/17 02:12
---

# 谈谈事件循环 / 轮询（Event-Loop）

## 什么是事件循环 / 轮循？

在`WHATWG`规范中是这么定义事件循环的：

> To coordinate events, user interaction, scripts, rendering, networking, and so forth, user agents must use event loops as described in this section. 
> 
> 为了协调事件，用户交互，脚本，渲染，联网等，用户代理必须使用本节中描述的事件循环。

从规定的定义中，我们可以了解**事件**、**用户交互**、**脚本**、**渲染**、**网络请求**这些东西，都会通过事件循环协调运作。

事件循环 / 轮循（`Event Loop`），其实就是`JavaScript`异步回调机制的实现原理

因为`JavaScript`是单线程运行的，异步要基于回调来实现

## 逐步讲解

### 示例代码

假设我们有这么一段`JavaScript`代码

```js
console.log('开始')

setTimeout(() => {
    console.log('定时')
}, 1000)

console.log('结束')
```

可能大家都能快速得出答案

```
开始
结束
定时
```

那你知道它在`JavaScript`内部是如何执行的吗？

下面我们一步一步解析它的执行顺序

### 容器理解

先看下下面这个示例，它大概地抽象描述了`JavaScript`引擎的各个容器：

![](https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/event-loop-demo.png)

- **Call Stack**：`JavaScript`的调用栈
- **Web APIs**：`Web`应用接口，像`setTimeout`、`DOM`操作、`Ajax`请求、`Promise`请求之类的相关执行都放在里面
- **Event Loop**：事件循环的执行状态
- **Callback Queue**：回调队列
  - **micro-task**：[微任务队列](/learn/web/javascript/what_is_macroTask_and_microTask.md)
  - **macro-task**：[宏任务队列](/learn/web/javascript/what_is_macroTask_and_microTask.md)
- **Browser Console**：浏览器控制台

### 执行步骤

![](https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/event-loop-demo.gif)

### 详细解析

下面详细解析一下步骤：

1. 当`script`脚本或者在`NodeJS`的代码被执行时，事件循环就开启了
2. 当线程运行时，遇到同步任务会被立即执行，微任务会加入微任务队列，宏任务会经过`WebAPIs`处理（处理定时或其他）后，放入宏任务队列
3. 线程继续运行到下一个任务，同样，不同类型的任务处理方式如第`2`步一致，但是处理完这一次任务后，事件循环会先查看微任务队列有没有任务需要处理，如果有，优先处理微任务，在执行下一个任务
4. 如此反复循环，直到所有同步任务和微任务执行完毕，开始按宏任务队列依次执行宏任务
5. 宏任务执行完毕后，事件循环终止

## 事件循环与`DOM`渲染之间的关系

`DOM`渲染会尝试在每次事件循环执行完一个异步任务`Call Stack`为空的时候执行（并不一定会执行，或许会在多次轮循或者所有轮循执行完毕之后才执行）

**顺序：**

1. 开始执行同步任务
2. 同步任务执行完毕，`CALL Stack` 空闲
3. 事件循环开始运行，执行一个异步任务
4. 异步任务执行完毕，`Call Stack`为空
5. 尝试渲染`DOM`（全部渲染完成则停止）
6. 事件循环执行下一个异步任务
7. 异步任务执行完毕，`Call Stack`为空
8. 尝试渲染`DOM`（全部渲染完成则停止）
9. ...
10. 如此循环直至异步任务全部执行完毕，或者`DOM`全部渲染完毕



