# v-for为什么需要加key？

## 作用

1. 加`key`，是为了高效的更新虚拟`DOM`，防止重复渲染，导致的额外渲染性能开销

2. `key`属性可以避免数据混乱的情况出现

## 原理

1. `Vue`实现了一套虚拟`DOM`，使我们可以不直接操作`DOM`元素只操作数据，就可以重新渲染页面，而隐藏在背后的原理是高效的[`Diff`算法](./diff算法.md)

2. 当页面数据发生变化时，`Diff`算法只会比较同一层级的节点；

3. 如果节点类型不同，直接干掉前面的节点，再创建并插入新的节点，不会再比较这个节点后面的子节点；如果节点类型相同，则会重新设置该节点属性，从而实现节点更新

4. 使用 `key` 给每个节点做一个唯一标识，`Diff`算法就可以正确失败此节点，"就地更新"找到正确的位置插入新的节点。

## 示例

假定我们有一组数据

```
key: 0  index: 0 name: test1
key: 1  index: 1 name: test2
key: 2  index: 2 name: test3
```

现在我们要向上面这组数据加入一条新数据

```
name: 我是插队的那条数据
```

如果我们`v-for`没有加`key`

```
之前的数据                         之后的数据

key: 0  index: 0 name: test1     key: 0  index: 0 name: test1
key: 1  index: 1 name: test2     key: 1  index: 1 name: 我是插队的那条数据
key: 2  index: 2 name: test3     key: 2  index: 2 name: test2
                                 key: 3  index: 3 name: test3
```

通过上面清晰的对比,发现除了第一个数据可以复用之前的之外,另外三条数据都需要重新渲染

如果我们使用唯一`id`作为`key`

```
之前的数据                               之后的数据

key: 1  id: 1 index: 0 name: test1     key: 1  id: 1 index: 0  name: test1
key: 2  id: 2 index: 1 name: test2     key: 4  id: 4 index: 1  name: 我是插队的那条数据
key: 3  id: 3 index: 2 name: test3     key: 2  id: 2 index: 2  name: test2
                                       key: 3  id: 3 index: 3  name: test3
```

现在对比发现只有一条数据变化了,就是`id`为`4`的那条数据,因此只要新渲染这一条数据就可以了,其他都是就复用之前的

这样遵循了`Vue`算法的复用原则，减少了重新的渲染开销

## 注意事项

1. `key` 的值只能是字符串或数字类型

2. `key` 的值必须具有唯一性（即：`key` 的值不能重复）

3. 建议把数据项 `id` 属性的值作为 `key` 的值（因为 id 属性的值具有唯一性）

4. 使用 `index` 的值当作 `key` 的值没有任何意义（因为 `index` 的值不具有唯一性）

5. 建议使用 `v-for` 指令时一定要指定 `key` 的值（既提升性能、又防止列表状态紊乱）

<vPageTips :links="[
    {text: 'v-for中为什么要加key？', link: 'https://juejin.cn/post/7110105626415628296'},
    {text: '为什么使用v-for时必须添加唯一的key?', link: 'https://segmentfault.com/a/1190000013810844'},
    ]"
/>
