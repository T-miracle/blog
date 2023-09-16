---
cbf: false
---

# 对象数据如何获取第一个属性的值？

```js
// 一个对象
const obj = {
    'name' : {
        message: '姓名不能为空！',
        error: true
    },
    'age' : {
        message: '年龄不能为空！',
        error: true
    },
    'sex' : {
        message: '性别不能为空！',
        error: true
    },
}
// 获取所有的 key
const keys = Object.keys(obj);
console.log(keys);  // [ 'name', 'age', 'sex' ]
// 获取 key 数组第一个值
const firstKey = keys[0];
console.log(firstKey);  // name
// 获取对象第一个属性的值
const firstMessage = obj[firstKey].message;
console.log(firstMessage);  // 姓名不能为空！
```

简写：

```js
obj[Object.keys(obj)[0]].message
```


