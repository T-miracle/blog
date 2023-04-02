# 谈谈宏任务与微任务

宏任务和微任务是JavaScript中非常重要的概念，它们用于描述代码执行时的任务队列。

在JavaScript中，所有的任务都被加入到一个任务队列中，由[事件循环(`Event Loop`)](/learn/web/javascript/what_is_event_loop.md)负责调度执行。

当JavaScript引擎空闲时，事件循环会从任务队列中取出任务，并按照顺序执行。

任务可以被分为两类：宏任务和微任务。

在JavaScript中，微任务的优先级高于宏任务。也就是说，当主线程空闲时，如果有微任务存在，它们会被优先执行，直到微任务队列为空。然后事件循环才会从宏任务队列中取出下一个任务执行。

总之，宏任务和微任务是用于描述任务队列中的不同类型任务的概念，了解它们的原理和执行顺序可以帮助我们更好地理解JavaScript代码的执行过程，并优化代码的性能。

## 宏任务有哪些

宏任务（`Macro Task`）是指在JavaScript执行过程中，需要进入主线程执行的任务。

以下是常见的宏任务类型：

- `script`标签代码

  浏览器解析HTML时，如果遇到script标签，就会将其中的JavaScript代码作为一个宏任务执行。

- `setTimeout`/`setInterval`

  这两个函数会将回调函数添加到宏任务队列中，在指定的时间后执行。

- `I/O`操作

  例如文件读写、网络请求等I/O操作，都需要等待异步任务完成后才能执行，因此它们也属于宏任务。

- UI渲染

  浏览器需要渲染页面元素，这也是一个宏任务。

-----

除了上述常见的宏任务类型，还有一些其他类型的宏任务，例如`postMessage`、`IndexedDB`、`Web Workers`等。

需要注意的是，在某些环境下，宏任务的类型和数量可能会有所不同。

例如，Node.js环境下的宏任务类型包括`setImmediate`、`process.nextTick`等。而在React Native等框架中，宏任务可能包括界面布局、图片解码等。

## 微任务有哪些

微任务（`Micro Task`）是指在JavaScript执行过程中，不需要进入主线程执行的任务。

以下是常见的微任务类型：

- `Promise`的`then`方法

  当Promise对象状态变为resolved时，会将所有已注册的`then`方法添加到微任务队列中，等待主线程空闲时执行。
- `MutationObserver`

  监听DOM树的变化，当发生变化时会将回调函数添加到微任务队列中。

- `process.nextTick`

  Node.js环境下的微任务，类似于`Promise`的`then`方法，可以在当前执行栈结束后、下一个事件循环之前执行回调函数。

- `Object.observe`

  监听对象的变化，已废弃。

---------

除了上述常见的微任务类型，还有一些其他类型的微任务，例如HTML5中的`IntersectionObserver`、`Web Components`中的`Custom Elements`等。

需要注意的是，微任务的数量往往会比宏任务多，因为一些异步任务通常会产生微任务，例如`Promise`的`then`方法。

而且，**微任务的优先级高于宏任务**，也就是说当主线程空闲时，如果有微任务存在，它们会被优先执行。

这也是我们在编写JavaScript代码时，需要注意避免产生大量微任务的原因之一。

## 执行顺序

**同步任务 > 微任务 > 宏任务**

<badge type="warning" text="注意"/>

`Promise`本身与`new Promise()`并不是微任务，而是同步任务
