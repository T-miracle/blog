<script setup lang="ts">
    import { ref } from 'vue';
    const visible = ref<boolean>(false);
</script>

# 事件循环-测试题2

```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}

console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0)

async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
```

这道题执行后的答案是什么？请作答！

<v-scratch-paper />

<a href="#" @click="visible = true">查看答案</a>

<vModal v-model="visible" title="参考答案">

```js
script
async1
async2
promise1
script
async1
promise2
setTimeout
```

</vModal>
