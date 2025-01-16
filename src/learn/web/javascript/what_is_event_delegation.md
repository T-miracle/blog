---
lastUpdated: 2023/9/17 02:12
---

<script setup lang="ts">
    import eventDelegation from './components/eventDelegation.vue';
</script>

# 什么是事件委托？它有什么用？

## 什么是事件委托？

事件委托（又叫**事件代理**）是`JavaScript` 中一个很重要的方法。

事件委托的机制，就是将事件侦听器添加到一个父级元素上，这样就不用向 （父级元素内）很多特定的 `DOM` 节点每一个单独地添加事件侦听器了。

而这个添加在父元素上的事件侦听器通过事件冒泡的事件流机制以分析查找子元素的匹配项。

## 事件委托有什么用？

因为只需要在父元素添加一个事件侦听器，避免了每一个子元素都要添加事件侦听器，减少了内存消耗，从而优化程序性能。

## 使用示例

假定我们有这么一个需求，如下所示，现在我们要给每一个方块都加上点击事件：

<eventDelegation/>

```html
<div id="content">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
</div>
```

如果不知道事件委托的同学们第一时间会想到使用这个方法

```js
// 获取每一个class为box的元素
let boxs = document.getElementsByClassName('box')
// 使用遍历使每一个元素绑定上事件
for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener('click', function () {
        alert(this.innerText)
    })
}
```

这样子绑定，貌似也完成了需求，但是仔细想想，如果方块有成千上百个呢，所有都绑定上事件侦听器岂不是内存爆炸，效率也大大降低

这时候，就应该用上事件委托了，怎么写呢？看下面代码：

```js
// 获取父元素
let content = document.getElementById('content')
// 在父元素上添加事件侦听器
content.addEventListener('click', function (e) {
    // 被点击的子元素
    const box = e.target
    alert(box.innerText)
})
```

是不是简单清晰多了？！这就是事件委托的作用
