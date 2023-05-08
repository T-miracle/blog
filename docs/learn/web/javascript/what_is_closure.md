# 什么是闭包？

## 概述

闭包（`closure`）是 `JavasScript` 的一大难点，也是它的特色

闭包的作用是将一个函数以及其捆绑的周边环境状态（`lexical environment`，词法环境）的引用进行组合

通俗点说，就是闭包可以让你在一个内层函数中访问到其外层函数的作用域

再用大白话来讲，当一个函数内部定义的函数引用了外部函数的变量时，就会产生闭包

闭包可以将函数内部的变量保护起来，使其不受外界干扰，同时也可以使这些变量在函数执行完毕后仍然存在于内存中，供后续的调用使用

很多高级应用都要依靠闭包来实现，最常见的例子有 防抖（`debounce`） 和 节流（`throttle`）

## 举例说明

下面是一个简单的闭包示例：

```js
function outerFunction() {
    var outerVariable = "I am outside!";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

var innerFunc = outerFunction();
innerFunc(); // 输出 "I am outside!"
```

在上面的例子中，`innerFunction`访问了外部函数`outerFunction`的变量`outerVariable`，这就形成了一个闭包。
当`outerFunction`执行完毕后，变量`outerVariable`并不会被释放，而是仍然存在于内存中，供`innerFunction`调用。

## 闭包的作用

1. 封装变量

    通过闭包，可以将变量封装在函数内部，从而避免变量污染全局命名空间，提高代码的可维护性和可复用性。

2. 实现私有变量和方法

    由于闭包中的变量和方法只能在闭包内部访问，因此可以模拟私有变量和方法的效果，从而提高代码的安全性和可读性。

3. 变量的值始终保持在内存中

## 闭包的优缺点

- ### 优点

闭包能使变量私有化，不会污染全局变量，并且私有变量可以一直维持自己的值

- ### 缺点

由于闭包会使得函数中的变量一直都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，可能导致内存泄露。

解决方法是，在退出函数之前，将不使用的局部变量全部删除

<vPageTips :links="[
        {text: 'MDN：闭包详解', link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures'}
    ]"
>更详细可查看</vPageTips>
