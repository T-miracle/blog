# MutationObserver监听DOM

## 概念

`MutationObserver`接口提供了监视对`DOM`树所做更改的能力。它被设计为旧的`Mutation Events`功能的替代品，该功能是`DOM3 Events`规范的一部分。

`Mutation Observer API` 用来监视 `DOM` 变动。`DOM` 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 `API` 都可以得到通知。

概念上，它很接近事件，可以理解为 `DOM` 发生变动就会触发 `Mutation Observer` 事件。

但是，它与事件有一个本质不同：

**事件是同步触发，也就是说，`DOM` 的变动立刻会触发相应的事件；**

**而`Mutation Observer` 则是异步触发，`DOM` 的变动并不会马上触发，而是要等到当前所有 `DOM` 操作都结束才触发。**

## 使用方式

```js
// 使用时，首先使用`MutationObserver`构造函数
// 新建一个观察器实例，同时指定这个实例的回调函数
const observer = new MutationObserver((mutations, observer) => {
    mutations.forEach((mutation) => {
        console.log(mutation);
    });
});
// 获取一个dom
const myDom = document.querySelector('myDom');
// 需要观察变动的类型
const options = {
    'childList': true,
    'attributes': true
};
// 启动观察
observer.observe(myDom, options);
```

上面代码中，`new MutationObserver()`
表示创建一个监听实例，它必需要有一个回调函数，该函数有两个参数，第一个是变动类型的数组，第二个是观察器实例本身，这个函数在每次`DOM`变动时被调用

## 方法

### observe

`observe()`方法用来启动监听，它接受两个参数，第一个参数为需要监听的`DOM`节点，第二个参数为需要观察变动的类型

观察变动的类型有以下几种：

> - `childList`：布尔值，表示子节点的变动（指新增，删除或者更改）。
> - `attributes`：布尔值，表示属性的变动。
> - `characterData`：布尔值，表示节点内容或节点文本的变动。
> - `subtree`：布尔值，表示是否将该观察器应用于该节点的所有后代节点。
> - `attributeOldValue`：布尔值，表示观察`attributes`变动时，是否需要记录变动前的属性值。
> - `characterDataOldValue`：布尔值，表示观察`characterData`变动时，是否需要记录变动前的值。
> - `attributeFilter`：数组，表示需要观察的特定属性（比如`['class','src']`）,当该数组不为空时，`attributes`默认为`true`。

-----------

> <Badge type="warning" text="注意"/> 
> 想要观察哪一种变动类型，就在 `option` 对象中指定它的值为 `true`。
>
> 需要注意的是，必须同时指定 `childList`、`attributes` 和 `characterData` 中的一种或多种，若均未指定将报错。

### takeRecords

`takeRecords`方法用来清除变动记录，即不再处理未处理的变动。该方法返回变动记录的数组。

```js
observer.takeRecords();
```

### disconnect

`disconnect`方法用来停止观察。调用该方法后，`DOM` 再发生变动，也不会触发观察器。

```js
observer.disconnect();
```

## MutationRecord 对象

`new MutationObserver()`中回调函数的第一个参数获取的就是 `MutationRecord` 对象

`DOM` 每次发生变化，就会生成一条变动记录（`MutationRecord` 实例）,该实例包含了与变动相关的所有信息。`Mutation Observer` 处理的就是一个个`MutationRecord`
实例所组成的数组。

`MutationRecord`对象包含了`DOM`的相关信息，有如下属性：

> - `type`：观察的变动类型（`attribute`、`characterData` 或者 `childList`）。
> - `target`：发生变动的`DOM`节点。
> - `addedNodes`：新增的`DOM`节点。
> - `removedNodes`：删除的`DOM`节点。
> - `previousSibling`：前一个同级节点，如果没有则返回`null`。
> - `nextSibling`：下一个同级节点，如果没有则返回`null`。
> - `attributeName`：发生变动的属性。如果设置了`attributeFilter`，则只返回预先指定的属性。

## 示例

监听`html`根节点的`class`属性变化

```js
let element = document.querySelector('html');
let observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type == 'attributes') {
            console.log('当前class为', element.className)
        }
    });
});
observer.observe(element, {
    attributeFilter: ['class']
});
```

<vPageTips :links="[
        {text: 'MutationObserver详细介绍', link: 'https://juejin.cn/post/6949832945683136542'}
    ]"
/>
