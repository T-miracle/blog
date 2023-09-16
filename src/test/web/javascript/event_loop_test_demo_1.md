<script setup lang="ts">
    import { ref } from 'vue';
    const visible = ref<boolean>(false);
</script>

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

<a href="#" @click="visible = true">查看答案</a>

<vModal v-model="visible" title="参考答案">

```js
4
1
3
5
6
2
```

</vModal>
