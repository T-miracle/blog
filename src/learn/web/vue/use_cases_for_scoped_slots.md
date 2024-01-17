# 作用域插槽的使用场景

作用域插槽是 Vue 中的一种高级插槽技术，它允许父组件向子组件传递数据，以便子组件能够在插槽内使用这些数据。
作用域插槽的主要使用场景包括以下几种：

## 列表渲染

在父组件中使用 `v-for` 遍历一个数组，并将数组中的每个元素传递给子组件，子组件可以通过作用域插槽接收这些数据并进行渲染。

:::code-group
 ```vue [ParentComponent.vue]
<template>
   <div>
      <child-component v-for="item in items" :key="item.id" :item="item">
         <!-- 作用域插槽 -->
         <template v-slot:default="slotProps">
            <p>{{ slotProps.item.name }}</p>
         </template>
      </child-component>
   </div>
</template>

<script>
   import ChildComponent from './ChildComponent.vue';

   export default {
      components: {
         ChildComponent
      },
      data() {
         return {
            items: [
               { id: 1, name: 'Item 1' },
               { id: 2, name: 'Item 2' }
               // ...
            ]
         };
      }
   };
</script>
```

```vue [ChildComponent.vue]
<template>
   <div>
      <!-- 插槽内容 -->
      <slot :item="item"></slot>
   </div>
</template>

<script>
   export default {
      props: {
         item: Object
      }
   };
</script>
 ```
:::

## 表格列配置

在表格组件中，父组件可以通过作用域插槽动态传递列配置给子组件，子组件可以根据配置渲染不同的列。

:::code-group
 ```vue [ParentComponent.vue]
<template>
   <div>
      <table-component :columns="tableColumns">
         <!-- 作用域插槽 -->
         <template v-slot:default="slotProps">
            <tr>
               <td v-for="column in slotProps.columns">{{ slotProps.data[column.key] }}</td>
            </tr>
         </template>
      </table-component>
   </div>
</template>

<script>
   import TableComponent from './TableComponent.vue';

   export default {
      components: {
         TableComponent
      },
      data() {
         return {
            tableColumns: [
               { key: 'name', label: 'Name' },
               { key: 'age', label: 'Age' }
               // ...
            ]
         };
      }
   };
 </script>
```

```vue [TableComponent.vue]
<template>
   <div>
      <!-- 插槽内容 -->
      <slot :columns="columns" :data="tableData"></slot>
   </div>
</template>

<script>
   export default {
      props: {
         columns: Array
      },
      data() {
         return {
            tableData: [
               { name: 'John', age: 25 },
               { name: 'Alice', age: 30 }
               // ...
            ]
         };
      }
   };
 </script>
 ```
:::

## 动态组件

父组件可以通过作用域插槽将动态组件所需的数据传递给子组件，实现更灵活的组件渲染。

::: code-group
 ```vue [ParentComponent.vue]
<template>
   <div>
      <dynamic-component :component="selectedComponent">
         <!-- 作用域插槽 -->
         <template v-slot:default="slotProps">
            <component :is="slotProps.component" :data="slotProps.data"></component>
         </template>
      </dynamic-component>
   </div>
</template>

<script>
   import DynamicComponent from './DynamicComponent.vue';

   export default {
      components: {
         DynamicComponent
      },
      data() {
         return {
            selectedComponent: 'ChildComponent'
         };
      }
   };
</script>
```

```vue [DynamicComponent.vue]
<template>
   <div>
     <!-- 插槽内容 -->
     <slot :component="component" :data="dynamicData"></slot>
   </div>
</template>

<script>
   export default {
      props: {
         component: String
      },
      data() {
         return {
            dynamicData: { /* 数据 */ }
         };
      }
   };
</script>
 ```
:::

这些场景都是作用域插槽非常有用的地方。通过作用域插槽，父组件可以向子组件传递数据，使得子组件能够更加灵活和动态地处理传递进来的数据。
