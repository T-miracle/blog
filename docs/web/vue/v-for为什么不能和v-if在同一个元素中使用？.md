# v-for为什么不能和v-if在同一个元素中使用？

## 先看看优先级

下面是`Vue`源码的一部分（源码位置：`\vue-dev\src\compiler\codegen\index.js`）

```ts{9-12}
export function genElement (el: ASTElement, state: CodegenState): string {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre
  }
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    ...
}
```

可知：**`v-for`优先级比`v-if`高**

## 后果

因为`v-for`优先级比`v-if`高，所以当两者在同一个元素中使用时，如果`v-if`为假，该标签不会被渲染，但是`v-for`依旧被执行了，这会导致性能方面的浪费

## 结论

永远不要把 v-if 和 v-for 同时用在同一个元素上

## 解决方式

要想避免这种情况，可以在外层嵌套`template`（页面渲染不生成`dom`节点），在这一层进行`v-if`判断，然后在内部进行`v-for`循环

```vue
<template v-if="isShow">
    <p v-for="item in items">
</template>
```

如果条件出现在循环内部，可通过计算属性`computed`提前过滤掉那些不需要显示的项

```js
/* Vue2 */
computed: {
    items: function() {
      return this.list.filter(item => item.isShow)
    }
}

/* Vue3 */
const items = computed(() => {
    return list.filter(item => item.isShow)
})
```
