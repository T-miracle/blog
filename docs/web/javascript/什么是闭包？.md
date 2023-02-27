# 什么是闭包？

## 概述

闭包（`closure`）是 `JavasScript` 的一大难点，也是它的特色

闭包的作用是将一个函数以及其捆绑的周边环境状态（`lexical environment`，词法环境）的引用进行组合

通俗点说，就是闭包可以让你在一个内层函数中访问到其外层函数的作用域

再用大白话来讲，就是一个函数里还有一个内部的函数，这个内部函数可以在其他任意地方被任意使用

很多高级应用都要依靠闭包来实现，最常见的例子有 防抖（`debounce`） 和 节流（`throttle`）

## 举例说明

假定我们有这么一段代码

```js
var num = 0;

function count() {
    num++;
}

count()

console.log(num)
```

很明显，结果等于`1`，如果我们不断调用`count()`函数，那么结果就不断 `+1`

但是，现在有新的一个问题，如果我们直接修改`num`的值，把他改为`1000`

```js
num = 1000;

count()

console.log(num)
```

再调用`count()`方法，我们会直接得到`1001`，这不是我们期望的，因为我们不希望`num`能被直接修改

那么我们应该怎么做呢？

可以修改如下：

```js
function count() {
    let num = 0;
    function add() {
        num++
        console.log(num)
    }
    return add;
}

let addNum = count()

addNum()
```

这样，我们每次调用`addNum`，都会使`num`加`1`，并且我们在外部作用域是无法修改`num`的值的，这大大提高了变量的私密性

这样，就是一个简单的闭包

## 闭包的作用

1. 变量私有化
2. 变量的值始终保持在内存中
3. 实现块级作用域

## 闭包的优缺点

### - 优点

闭包能使变量私有化，不会污染全局变量，并且私有变量可以一直维持自己的值

### - 缺点

由于闭包会使得函数中的变量一直都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除

<vPageTips :links="[
        {text: 'MDN：闭包详解', link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures'}
    ]"
>更详细可查看</vPageTips>
