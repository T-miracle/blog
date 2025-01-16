---
lastUpdate: 2023/9/17 02:12
---

# promise.all()

## 概念

`Promise.all()` 是一个用于并行处理多个 Promise 对象的方法。

它接受一个 Promise 对象数组作为参数，并返回一个新的 Promise 对象。

该 Promise 对象会在所有传入的 Promise 对象都变为 `resolved` 状态时被 `resolved`，或者在其中任意一个 Promise 对象变为 `rejected` 状态时被 `rejected`。

## 使用方式

举个例子，假设有三个异步操作 A、B 和 C，它们分别返回一个 Promise 对象。

我们希望在这三个异步操作全部完成后再进行下一步操作，可以使用 `Promise.all()` 方法：

```js
const promiseA = doSomethingAsyncA();
const promiseB = doSomethingAsyncB();
const promiseC = doSomethingAsyncC();

Promise.all([ promiseA, promiseB, promiseC ])
    .then((results) => {
        console.log(results[0]); // A 操作的结果
        console.log(results[1]); // B 操作的结果
        console.log(results[2]); // C 操作的结果
        // 在这里处理所有异步操作完成后的后续逻辑
    })
    .catch((error) => {
        // 在这里处理任意一个异步操作失败后的错误逻辑
    });
```

在上面的例子中，我们首先创建了三个异步操作 `doSomethingAsyncA()`、`doSomethingAsyncB()` 和 `doSomethingAsyncC()`，它们都返回一个 Promise 对象。

然后，我们将这三个 Promise 对象放入一个数组中，传递给 `Promise.all()` 方法。

最后，使用 `then()` 处理所有异步操作完成后的逻辑，或使用 `catch()` 处理任意一个异步操作失败后的错误逻辑。

## 注意

需要注意的是，`Promise.all()` 的返回值是一个 Promise 对象，因此可以使用 `then()` 和 `catch()` 方法对其进行处理。

同时，`Promise.all()` 方法的 Promise 对象只有在所有传入的 Promise 对象都变为 `resolved` 状态时才会被 `resolved`，
因此如果其中任意一个 Promise 对象变为 `rejected` 状态，整个 Promise 对象都会被 `rejected`。

所以，在使用 `Promise.all()` 方法时需要注意处理错误情况。

## 如何手动实现一个 `all()` 方法

### 实现思路

- 创建一个新的 Promise 对象，并在内部定义一个空数组 `resultValues`，用于保存所有传入的 Promise 对象的返回值。

- 遍历传入的 Promise 对象数组，并为每个 Promise 对象注册一个 `.then()` 方法。这个 `.then()` 方法接受一个回调函数 onFulfilled，
  用于将该 Promise 对象的返回值存储到 `resultValues` 数组中。如果有任何一个 Promise 对象变为 `rejected` 状态，会直接跳转到第 5 步。

- 所有 Promise 对象的 `.then()` 方法注册完成后，返回上一步创建的 Promise 对象。

- 当所有 Promise 对象都变为 `resolved` 状态时，`resultValues` 数组中会存储所有 Promise 对象的返回值，
  此时将整个 Promise 对象的状态设置为 resolved，并将 `resultValues` 数组作为参数传递给 Promise 对象的回调函数。

- 如果任意一个 Promise 对象变为 `rejected` 状态，会直接将整个 Promise 对象的状态设置为 rejected，并将该 Promise 对象的错误原因作为参数传递给 Promise
  对象的回调函数。

### 代码示例

```js
function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const resultValues = [];
    let resolvedCount = 0;

    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (result) => {
          resultValues[i] = result;
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(resultValues);
          }
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
}
```

使用：

```js
const promiseA = doSomethingAsyncA();
const promiseB = doSomethingAsyncB();
const promiseC = doSomethingAsyncC();

PromiseAll([promiseA, promiseB, promiseC])
  .then((results) => {
    console.log(results[0]); // A 操作的结果
    console.log(results[1]); // B 操作的结果
    console.log(results[2]); // C 操作的结果
    // 在这里处理所有异步操作完成后的后续逻辑
  })
  .catch((error) => {
    // 在这里处理任意一个异步操作失败后的错误逻辑
  });
```

