---
lastUpdated: 2023/9/17 02:12
---

# 深拷贝和浅拷贝的区别

## 浅拷贝

1. **只复制了对象或数组的引用**
    
    浅拷贝创建一个新的对象或数组，但是它们内部的元素仍然是原始对象或数组的引用，也就是说新对象和原对象共享相同的子元素。

2. **浅拷贝的修改会影响原对象**

    因为浅拷贝仍然共享原对象的内部元素，所以如果修改了新对象的属性或数组元素，原对象也会受到影响，反之亦然。

### 常见的浅拷贝方法

- `Object.assign()`

   ```js
   let obj = { id: 1000, name: "namichong", };
   
   let copyObj = Object.assign(obj, { text: "this is namichong text！" });
   console.log(copyObj); // { id: 1000, name: 'namichong', text: 'this is namichong text！' }
   
   obj.id = 9999;
   console.log(copyObj); // { id: 9999, name: 'namichong', text: 'this is namichong text！' }
   ```

- 扩展运算符 `...`

   使用扩展运算符复制的第一层值属于深拷贝，之后的层属于浅拷贝

   ```js
   let obj = {
       id: 1000,
       name: "namichong",
       font: {
           size: 24,
           weight: 'bold'
       }
   };
   
   let copyObj = {
       ...obj, 
       name: "this is namichong text！"
   };
   console.log(copyObj);
   // {
   //    id: 1000,
   //    name: 'this is namichong text！',
   //    font: { size: 24, weight: 'bold' }
   // }
   
   obj.id = 666;
   console.log(copyObj);
   // {
   //    id: 1000,
   //    name: 'this is namichong text！',
   //    font: { size: 24, weight: 'bold' }
   // }
   
   obj.font.size = 14;
   console.log(copyObj);
   // {
   //    id: 1000,
   //    name: 'this is namichong text！',
   //    font: { size: 14, weight: 'bold' }
   // }
   ```

## 深拷贝

1. **完全复制了对象或数组及其内部元素**

    深拷贝不仅复制了对象或数组本身，还递归复制了内部的所有子元素，确保新对象与原对象完全独立。

2. **深拷贝的修改不会影响原对象**

    因为深拷贝创建了完全独立的副本，所以对新对象的修改不会影响原对象，反之亦然。

### 如何实现深拷贝

JavaScript 标准库中没有提供内置的深拷贝方法，通常需要自行编写深拷贝函数或使用第三方库，
如 [Lodash 的 `_.cloneDeep()`](https://github.com/lodash/lodash/blob/master/cloneDeep.js)。

手动实现一个简单的深拷贝：

```js
function deepCopy(obj, visited = new WeakMap()) {
    // 检查循环引用
    if (visited.has(obj)) {
        return visited.get(obj);
    }

    if (obj === null || typeof obj !== "object") {
        // 如果是原始值或 null，直接返回
        return obj;
    }

    if (Array.isArray(obj)) {
        // 如果是数组，创建一个新数组并递归复制每个元素
        const newArray = [];
        visited.set(obj, newArray); // 设置映射以处理循环引用
        for (let i = 0; i < obj.length; i++) {
            newArray[i] = deepCopy(obj[i], visited);
        }
        return newArray;
    }

    if (typeof obj === "function") {
        // 如果是函数，根据需要处理
        // 这里示例中选择排除函数属性
        return undefined;
    }

    // 如果是对象，创建一个新对象并递归复制每个属性
    const newObj = {};
    visited.set(obj, newObj); // 设置映射以处理循环引用
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key], visited);
        }
    }
    return newObj;
}

// 测试深拷贝函数
const originalObject = {
    a: 1,
    b: [2, 3],
    c: { d: 4, e: { f: 5 } },
    func: function () {
        console.log("Hello from function!");
    },
};

const deepCopyObject = deepCopy(originalObject);

console.log(deepCopyObject); // { a: 1, b: [ 2, 3 ], c: { d: 4, e: { f: 5 } }, func: [Function: func] }

// 尝试调用函数属性
deepCopyObject.func(); // 输出：Hello from function!

```
