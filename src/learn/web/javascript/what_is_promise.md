---
lastUpdate: 2023/9/17 02:12
---

# ES6 - Promise

## 什么是 Promise ？

**ES6 的 Promise 是一种处理异步操作的方法。**

传统的回调函数在处理嵌套异步操作时会变得十分复杂，而 Promise 则提供了一种更加优雅的方式来处理这些操作。

一个 Promise 表示一个可能还没有完成的异步操作，并且可以指定操作完成后要执行的回调函数。

Promise 有三种状态：`pending`（进行中）、`fulfilled`（已成功）和 `rejected`（已失败）。

一旦 Promise 状态变为 `fulfilled` 或 `rejected` ，就不会再发生变化。

Promise 有两个重要的方法：`then()` 和 `catch()`。

- `then()` 方法可以接收一个成功回调和一个失败回调，当 Promise 的状态变为 `fulfilled` 时，会执行成功回调；当 Promise 的状态变为 `rejected` 时，会执行失败回调。

- `catch()` 方法则只接收一个失败回调，用于处理 Promise 的 `rejected` 状态。

## 使用方式示例

```js
const promiseDemo = new Promise((resolve, reject) => {
    let status = true;
    // do something...
    if (status) {
        resolve("成功了！");
    } else {
        reject(`程序出错了...`);
    }
});

promiseDemo
    .then(
        res => {
            console.log(`resolve --> `, res);
        },
        rej => {
            console.log(`reject --> `, rej);
        }
    )
    .catch(error => {
        console.log(`error --> `, error);
    })
    .finally(() => {
        console.log("finally...");
    });
```

当 `status` 为 `true` 时

```
resolve -->  成功了！
finally...
```

当 `status` 为 `false` 时

```
reject -->  程序出错了...
finally...
```

当  `status` 为 `false` ，并且 `then()` 中没有第二个参数 `rej` 时

```
error -->  程序出错了...
finally...
```

> 我们日常应该使用 `catch()` 方法捕获错误信息，而不是 `then()` 的第二个参数

## 使用 Promise 的好处

- **异步编程变得更加容易**：Promise 可以<span style="background-color: rgba(227, 134, 66, 0.4)">有效地解决[回调地狱](what_is_callback_hell.md)的问题</span>，让异步编程变得更加直观、可读、可维护。
  通过链式调用的方式，可以避免出现多层嵌套的回调函数，代码结构更加清晰。

- **更好的错误处理**：Promise 可以通过`catch()`方法来捕获异步操作中的错误，并进行统一的处理，避免错误一直往上传递。
  同时，Promise 也可以通过`then()`方法的第二个参数来处理错误，让代码更加健壮、可靠。

- **更好的代码复用性**：Promise可以将异步操作封装成函数，并且在需要的地方进行调用，这样可以提高代码的复用性。
  同时，可以将异步操作的结果传递给其他函数进行处理，使得代码的耦合性更低，可维护性更高。

- **更好的可读性**：Promise 的链式调用方式可以让代码更加直观、易读。
  同时，Promise的语法规范化，让开发者能够更加容易地理解和学习。

- **更好的兼容性**：Promise 可以很好地与其他异步编程技术进行协作，例如`async/await`等，提供更多的编程选择，增强了代码的可移植性和可扩展性。
