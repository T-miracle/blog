# 对象数组根据属性查找相应的对象

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

我们可以用以下方式获取到相应数据：

## 使用`find()`函数

```js
// 需要匹配的项
let search = 4
// 查找
let result = user.find((item, index) => {
    console.log(`第${index}个：`, item);
    return item.id === search
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

`find()` 函数的优点：**当匹配到符合条件的值时，会停止继续查找。**

例如：

```js
// 需要匹配的项
let search = 18
// 查找
let result = user.find((item, index) => {
    console.log(`第${index}个：`, item);
    return item.age === search
})
// 打印结果
console.log(`结果==>`, result);
```

控制台打印：

```js{3}
第0个： { id: 1, name: '张三', age: 24 }
第1个： { id: 2, name: '李四', age: 18 }
结果==> { id: 2, name: '李四', age: 18 }
```


