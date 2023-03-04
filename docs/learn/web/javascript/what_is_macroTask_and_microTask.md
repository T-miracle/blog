# 谈谈宏任务与微任务

- **macrotask(宏任务)**

    `script`（整体代码）, `setTimeout`, `setInterval`, `setImmediate`, `I/O`, `UI rendering`等

- **microtask(微任务)**

    `process.nextTick`, `Promises`（这里指浏览器实现的原生 `Promise`）, `Object.observe`, `MutationObserver`等

**执行顺序：**

**同步任务 > 微任务 > 宏任务**
