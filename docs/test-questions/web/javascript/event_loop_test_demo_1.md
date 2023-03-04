# 事件循环-测试题1

```js
var p = new Promise(resolve => {
    console.log(4)
    resolve(5)
})

function func1() {
    console.log(1)
}

function func2() {
    setTimeout(() => {
        console.log(2)
    })
    func1();
    console.log(3)
    p.then(res => {
        console.log(res)
    }).then(() => {
        console.log(6)
    })
}

func2();
```

这道题执行后的答案是什么？请作答！

<v-scratch-paper />

[查看答案](event_loop_test_demo_1_answer.md)
