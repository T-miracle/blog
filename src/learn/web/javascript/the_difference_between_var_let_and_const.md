---
lastUpdated: 2023/12/24 21:42
---

# var、let、const 的区别

`var`、`let`、和 `const` 是 JavaScript 中用于声明变量的关键字，它们之间有一些重要的区别：

## 作用域

- `var` 声明的变量在整个函数体内都是可见的（函数作用域），而在块级作用域（例如，`if` 语句或 `for` 循环）内也是可见的，这被称为"hoisting"（变量提升）。
- `let` 和 `const` 引入了块级作用域，意味着在块级作用域内声明的变量只在该块内部可见。

```javascript
function example() {
  if (true) {
    var x = 10; // 函数作用域内的变量
    let y = 20; // 块级作用域内的变量
    const z = 30; // 块级作用域内的常量
  }

  console.log(x); // 可以访问
  console.log(y); // 无法访问，因为在块级作用域外
  console.log(z); // 无法访问，因为在块级作用域外
}
```

## 变量提升

- 使用 `var` 声明的变量会被提升到其所在函数的顶部，因此可以在声明之前访问。
- 使用 `let` 和 `const` 声明的变量也会被提升，但在声明之前访问它们会导致暂时性死区（Temporal Dead Zone，TDZ）。

```javascript
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError: b is not defined
let b = 10;
```

## 重复声明

- 使用 `var` 可以重复声明同一变量，而不会报错。
- 使用 `let` 或 `const` 在同一作用域内重复声明同一变量会引发语法错误。

```javascript
var x = 5;
var x = 10; // 合法

let y = 5;
let y = 10; // SyntaxError: Identifier 'y' has already been declared
```

## 全局对象属性

- 使用 `var` 声明的全局变量会成为全局对象的属性。
- 使用 `let` 或 `const` 声明的全局变量不会成为全局对象的属性。

```javascript
var globalVar = 5;
console.log(window.globalVar); // 5

let globalLet = 10;
console.log(window.globalLet); // undefined
```
    
## 赋值和重新赋值

- 使用 `var` 和 `let` 可以赋值和重新赋值。
- 使用 `const` 声明的变量必须进行初始化，并且不能重新赋值。

```javascript
var a = 5;
a = 10; // 合法

let b = 5;
b = 10; // 合法

const c = 5;
c = 10; // TypeError: Assignment to constant variable
```

总的来说，推荐使用 `let` 和 `const`，因为它们提供了更好的作用域规则，防止了一些常见的错误，并鼓励更安全和可维护的代码。 `let` 用于可变的变量，而 `const` 用于不可变的变量。

