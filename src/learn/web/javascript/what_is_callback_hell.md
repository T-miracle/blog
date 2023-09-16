# 什么是回调地狱？

回调地狱（callback hell）指的是在异步编程中，由于多次嵌套回调函数而导致代码变得复杂、难以维护的情况。

回调地狱通常出现在多个异步操作需要顺序执行的情况下，每个异步操作都需要在上一个异步操作完成后才能执行，
而这些操作又需要通过回调函数来进行处理，因此代码会出现多层嵌套的回调函数，从而使得代码难以阅读和理解。

例如，以下是一个回调地狱的示例，用于读取一个文件，然后将文件内容转换成 JSON 格式，并将 JSON 格式的数据存储到数据库中：

```js
const fs = require('fs');

fs.readFile('file.txt', 'utf-8', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    var json = JSON.parse(data);
    db.save(json, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Data saved successfully');
      }
    });
  }
});
```

使用 Promise 来解决：

```js
const fs = require('fs');

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFile('file.txt')
  .then((data) => {
    var json = JSON.parse(data);
    return db.save(json);
  })
  .then(() => {
    console.log('Data saved successfully');
  })
  .catch((err) => {
    console.log(err);
  });

```

链式调用更加清晰明了！
