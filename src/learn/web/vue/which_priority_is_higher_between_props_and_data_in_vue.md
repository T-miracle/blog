---
lastUpdated: 2023/9/17 02:12
---

# Vue中props和data哪个优先级更高？

直接看源码出结论

```ts
/**
 * @description: 初始化数据 响应式原理的入口
 * @param {*} vm 实例Vm
 */
export function initState (vm: Component) {
  // 为当前组件创建了一个watchers属性，为数组类型  vm._watchers保存着当前vue组件实例的所有监听者（watcher）
  vm._watchers = []
  // 从实例上获取配置项
  const opts = vm.$options
  //如果vm.$options上面定义了props 初始化props 对props配置做响应式处理  
  //代理props配置上的key到vue实例,支持this.propKey的方式访问
  if (opts.props) initProps(vm, opts.props)
  //如果vm.$options上面定义了methods 初始化methods ,props的优先级 高于methods的优先级
  //代理methods配置上的key到vue实例,支持this.methodsKey的方式访问
  if (opts.methods) initMethods(vm, opts.methods)
  //如果vm.$options上面定义了data ,初始化data, 代理data中的属性到vue实例,支持通过 this.dataKey 的方式访问定义的属性
  if (opts.data) {
    initData(vm)
  } else {
    //这里是data为空时observe 函数观测一个空对象：{}
    observe(vm._data = {}, true /* asRootData */)
  }
  //如果vm.$options上面定义了computed 初始化computed
  //computed 是通过watcher来实现的,对每个computedKey实例化一个watcher,默认懒执行.
  //将computedKey代理到vue实例上,支持通过this.computedKey的方式来访问computed.key
  if (opts.computed) initComputed(vm, opts.computed)
  //如果vm.$options上面定义了watch 初始化watch
  if (opts.watch && opts.watch !== nativeWatch) { 
    // 判断组件有watch属性 并且没有nativeWatch（ 兼容火狐）
    initWatch(vm, opts.watch)
  }
}
```

结论：优先级 **props -> methods -> data -> computed -> watch**
