---
lastUpdated: 2023/9/17 02:12
---

# 数组的常用遍历函数

假设有一个对象数组：

```js
const user = [
    { id: 1, name: '张三', age: 24 },
    { id: 2, name: '李四', age: 18 },
    { id: 3, name: '王五', age: 25 },
    { id: 4, name: '赵六', age: 18 },
    { id: 5, name: '田七', age: 22 },
]
```

## 使用`find()`函数

```js
// 需要匹配的项
let id = 4
// 查找
let result = user.find((item, index) => {
    console.log(`第${index}个：`, item);
    return item.id === id
})
// 打印结果
console.log(`结果==>`, result);
```

控制台打印：

```js{5}
第0个： { id: 1, name: '张三', age: 24 }
第1个： { id: 2, name: '李四', age: 18 }
第2个： { id: 3, name: '王五', age: 25 }
第3个： { id: 4, name: '赵六', age: 18 }
结果==> { id: 4, name: '赵六', age: 18 }
```

`find()` 函数的特点：**当匹配到符合条件的值时，会停止继续查找**。

例如：

```js
// 需要匹配的项
let age = 18
// 查找
let result = user.find((item, index) => {
    console.log(`第${index}个：`, item);
    return item.age === age
})
// 打印结果
console.log(`结果==>`, result);
```

::: tip `find()`使用场景
根据条件进行精确的查找。例如：根据 key 查询 value
:::

控制台打印：

```js{3}
第0个： { id: 1, name: '张三', age: 24 }
第1个： { id: 2, name: '李四', age: 18 }
结果==> { id: 2, name: '李四', age: 18 }
```

## 使用`filter()`函数

```js
// 需要匹配的项
let id = 3
// 查找
let result = user.filter((item, index) => {
    console.log(`第${index}个：`, item);
    return item.id === id
})
// 打印结果
console.log(`结果==>`, result);
```

控制台打印：

```js{6}
第0个： { id: 1, name: '张三', age: 24 }
第1个： { id: 2, name: '李四', age: 18 }
第2个： { id: 3, name: '王五', age: 25 }
第3个： { id: 4, name: '赵六', age: 18 }
第4个： { id: 5, name: '田七', age: 22 }
结果==> [ { id: 3, name: '王五', age: 25 } ]
```

`filter()` 的特点： 返回的是**所有符合条件对象的一个数组**。 但是，他会**一直遍历完所有对象，不会被中断**。

:::tip  `filter()`使用场景
根据条件进行筛选，获取所有符合条件的数据。
:::

## 使用`forEach()`函数

```js
// 需要匹配的项
let id = 3;
// 查找
let result = {};
let arrResult = user.forEach((item, index) => {
    console.log(`第${index}个：`, item);
    if (item.id === id) {
        result = item;
        return; // 无法打断循环
    }
});
// 打印结果
console.log(`结果==>`, result);
console.log(`数组返回结果==>`, arrResult);
```

控制台打印：

```js{6}
第0个： { id: 1, name: '张三', age: 24 }
第1个： { id: 2, name: '李四', age: 18 }
第2个： { id: 3, name: '王五', age: 25 }
第3个： { id: 4, name: '赵六', age: 18 }
第4个： { id: 5, name: '田七', age: 22 }
结果==> { id: 3, name: '王五', age: 25 }
数组返回结果==> undefined
```

`forEach()` 的特点：**无法打断循环，没有返回值**。

::: tip `forEach()`使用场景
不需要返回数据，适合根据数组进行一些不涉及数组本身变动的操作。
:::

## 使用`every()`函数

```js
// 需要匹配的项
let id = 3;
// 查找
let result = {};
let arrResult = user.every((item, index) => {
    console.log(`第${index}个：`, item);
    result = item;
    return item.id !== id;
});
// 打印结果
console.log(`结果==>`, result);
console.log(`数组返回结果==>`, arrResult);
```

控制台打印：

```js{4}
第0个： { id: 1, name: '张三', age: 24 }
第1个： { id: 2, name: '李四', age: 18 }
第2个： { id: 3, name: '王五', age: 25 }
结果==> { id: 3, name: '王五', age: 25 }
数组==> false
```

`every()` 的特点：**返回布尔值，循环可以被打断**。

:::tip `every()`使用场景
适合用于判断数组的所有项是否都符合要求。
:::

## 使用`some()`函数

```js
// 需要匹配的项
let id = 3;
// 查找
let result = {};
let arrResult = user.some((item, index) => {
    console.log(`第${index}个：`, item);
    result = item;
    return item.id === id;
});
// 打印结果
console.log(`结果==>`, result);
console.log(`数组返回结果==>`, arrResult);
```

控制台打印：

```js{4}
第0个： { id: 1, name: '张三', age: 24 }
第1个： { id: 2, name: '李四', age: 18 }
第2个： { id: 3, name: '王五', age: 25 }
结果==> { id: 3, name: '王五', age: 25 }
数组返回结果==> true
```

`some()` 的特点：**返回布尔值，循环可以被打断**。

:::tip `some()`使用场景
适合用于判断数组是否至少有一项符合条件。
:::

### `some()` 与 `every()` 的区别
 
> `some()` 只要有一个项的条件为真，就会终止循环。
> 
> 而 `every()` 只要有一个项的条件为假，就会终止循环。
