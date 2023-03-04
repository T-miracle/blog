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

### 示例组件解释

先看下下面这个组件示例，它大概地抽象描述了`JavaScript`引擎的各个容器：

<vEventLoop>
    <template v-slot:stack>Call Stack</template>
    <template v-slot:apis>WebAPIs</template>
    <template v-slot:loop>Event Loop</template>
    <template v-slot:queue>Callback Queue</template>
    <template v-slot:micro-task>microTask</template>
    <template v-slot:macro-task>macroTask</template>
    <template v-slot:console>Browser Console</template>
</vEventLoop>

- **Call Stack**：`JavaScript`的调用栈
- **Web APIs**：`Web`应用接口，像`setTimeout`、`DOM`操作、`Ajax`请求、`Promise`请求之类的相关执行都放在里面
- **Event Loop**：事件循环的执行状态
- **Callback Queue**：回调队列
  - **micro-task**：[微任务队列](what_is_macroTask_and_microTask.md)
  - **macro-task**：[宏任务队列](what_is_macroTask_and_microTask.md)
- **Browser Console**：浏览器控制台

### 执行代码

首先，会先执行

```js
console.log('开始')
```

这个任务被压入调用栈中

<vEventLoop
    :stack="['console.log(\'开始\')']"
/>

然后被执行，执行完毕后被弹出，结果会被浏览器控制台打印

<vEventLoop
    :console="['开始']"
    :consoleIndex="-1"
/>

接着，执行到

```js
setTimeout(() => {
    console.log('定时')
}, 1000)
```

该任务同样被压入调用栈中

<vEventLoop
    :stack="['setTimeout(() => {\n    console.log(\'定时\')\n}, 1000)']"
    :console="['开始']"
/>

然后调用栈发现 `setTimeout`这个任务是异步执行的操作（宏任务），会把该任务的子任务（方法）放到 `WebAPIs` 中，如果有执行时间会进入计时

<vEventLoop
    :stack="['setTimeout(Fn, 1000)']"
    :apis="[{ time: '1000ms', info: 'console.log(\'定时\')'}]"
    :console="['开始']"
/>

`setTimeout`内部子任务被放入后，它本身将会被调用栈弹出

<vEventLoop
    :apis="[{ time: '1000ms', info: 'console.log(\'定时\')'}]"
    :console="['开始']"
/>

然后，会继续执行同步任务

```js
console.log('结束')
```

继续压入调用栈中

<vEventLoop
    :stack="['console.log(\'结束\')']"
    :apis="[{ time: '1000ms', info: 'console.log(\'定时\')'}]"
    :console="['开始']"
/>

被执行，在浏览器控制台中打印

<vEventLoop
    :apis="[{ time: '1000ms', info: 'console.log(\'定时\')'}]"
    :console="['开始', '结束']"
    :consoleIndex="-1"
/>

如果 `WebAPIs` 中有定时执行完毕（或者为其他异步执行完毕）的任务，会依次加入到回调队列中进行排队等待处理

这时，**同步任务已经全部被执行完（即调用栈已空闲），则开始执行异步任务，事件循环会开始工作**

<vEventLoop
    :queueInfo="[,['console.log(\'定时\')']]"
    :loop="true"
    :console="['开始', '结束']"
/>

当回调队列中有任务时，事件循环会依次获取到任务，将任务放到调用栈中执行（如果被执行的任务里还有多个子任务，会被拆开按以上所有的步骤进行执行（即同步任务全部顺序执行，异步任务进入`WebAPIs`等待））

**直到事件循环查询到 `WebAPIs` 中已经没有可以执行的任务时，事件循环才会停止**

<vEventLoop
    :stack="['console.log(\'定时\')']"
    :console="['开始', '结束']"
/>

<vEventLoop
    :console="['开始', '结束', '定时']"
    :consoleIndex="-1"
/>

最后，全部信息在控制台中打印完毕

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



