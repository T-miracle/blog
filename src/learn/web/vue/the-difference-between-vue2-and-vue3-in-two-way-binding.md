# Vue2 和 Vue3 在双向绑定上的区别

Vue 2 和 Vue 3 在双向绑定方面有一些差别，尤其是在使用 `v-model` 和 `.sync` 修饰符时。

以下是它们之间的一些主要区别：

### Vue 2:

1. **`v-model`：** 在 Vue 2 中，`v-model` 主要用于表单元素的双向数据绑定。它默认情况下会绑定 `value` 属性，并监听 `input`
   事件来更新数据。`v-model` 可以通过自定义组件的 `model` 选项来自定义绑定的属性和事件。

   :::code-group
   ```vue [子组件]
   <template>
       <input v-model="valueCopy"/>
   </template>
   <script>
       export default {
           name: 'ChildComponent',
           emits: [ 'update:value' ],
           props: {
               // 获取父组件的传值
               value: {
                   type: String,
                   default: ''
               }
           },
           data() {
               return {
                  valueCopy: null
               }
           },
           watch: {
               // 监听 v-model 绑定的值
               value: {
                   handler(val, oldVal) {
                       if (val !== oldVal) { 
                           this.valueCopy = val;
                       }
                   },
                   immediate: true
               },
               // 监听 valueCopy 值的改变
               valueCopy: {
                   handler(val, oldVal) {
                       if (val !== oldVal) {
                           // 更新父组件的值
                          this.$emit('update:value', val);
                       }
                   }
               }
           }
       }
   </script>
   ```

   ```vue [父组件]
   <template>
       <ChildComponent v-model="childValue"></ChildComponent>
   </template>
   <script>
       import ChildComponent from './ChildComponent.vue'
      
       export default {
           components: [ ChildComponent ],
           data() {
               return {
                   childValue: null
               }
           }
       }
   </script>
   ```
   :::

   **简写方式：**

   :::code-group
   ```vue [子组件]
    <template>
        <div>
            <input type="text" v-model="valueCopy">
        </div>
    </template>
    
    <script>
        export default {
            props: {
                value: {
                    type: String,
                    required: true,
                },
            },
            computed: {
                valueCopy: {
                    get() {
                        return this.value;
                    },
                    set(value) {
                        this.$emit('input', value);
                    },
                },
            },
        };
    </script>
   ```

   ```vue [父组件]
   <template>
       <ChildComponent v-model="childValue"></ChildComponent>
   </template>
   <script>
       import ChildComponent from './ChildComponent.vue'
      
       export default {
           components: [ ChildComponent ],
           data() {
               return {
                   childValue: null
               }
           }
       }
   </script>
   ```
   :::

2. **`.sync` 修饰符：** 在 Vue 2 中，`.sync` 修饰符用于实现父子组件之间的双向数据绑定。通过 `.sync`
   修饰符，子组件可以更新父组件的数据。`.sync` 修饰符通常与自定义事件一起使用，由父组件监听子组件触发的事件并更新数据。

   :::code-group
   ```vue [子组件]
    <template>
        <input v-model="syncValueCopy"/>
    </template>
    <script>
        export default {
            name: 'ChildComponent',
            emits: [ 'update:syncValue' ],
            props: {
                // 获取父组件的传值
                syncValue: {
                    type: String,
                    default: ''
                }
            },
            data() {
                return {
                    syncValueCopy: null
                };
            },
            watch: {
                // 监听 syncValue 绑定的值
                syncValue: {
                    handler(val, oldVal) {
                        if (val !== oldVal) {
                            this.syncValueCopy = val;
                        }
                    },
                    immediate: true
                },
                // 监听 syncValueCopy 值的改变
                syncValueCopy: {
                    handler(val, oldVal) {
                        if (val !== oldVal) {
                            // 更新父组件的值
                            this.$emit('update:syncValue', val);
                        }
                    }
                }
            }
        };
    </script>
   ```

   ```vue [父组件]
    <template>
        <ChildComponent :sync-value.sync="childValue"></ChildComponent>
    </template>
    <script>
        import ChildComponent from './ChildComponent.vue'
    
        export default {
            components: [ ChildComponent ],
            data() {
                return {
                    childValue: null
                }
            }
        }
    </script>
   ```
   :::

### Vue 3:

1. **`v-model`：** 在 Vue 3 中，`v-model` 的行为略有变化。它仍然用于表单元素的双向数据绑定，但默认情况下会绑定 `modelValue`
   和 `update:modelValue`。这样的修改是为了与 Composition API 和 TypeScript 更好地兼容。你仍然可以通过自定义组件的 `model`
   选项来自定义绑定的属性和事件。

   :::code-group
   ```vue [子组件]
   <template>
       <input v-model="modelValueCopy"/>
   </template>
   
   <script setup lang="ts">
       import { ref, watch } from 'vue';
   
       const emits = defineEmits([ 'update:modelValue' ]);
   
       // 获取父组件传值
       const props = defineProps<{
           modelValue: string
       }>();

       const modelValueCopy = ref<string>('');
   
       watch(() => props.modelValue, (value) => {
           modelValueCopy.value = value;
       }, {
           immediate: true
       });
   
       watch(() => modelValueCopy.value, (value) => {
           emits('update:modelValue', value);
       });
   </script>
   ```
   
   ```vue [父组件]
   <template>
      <ChildComponent v-model="childValue"></ChildComponent>
   </template>
   <script setup lang="ts">
       import ChildComponent from './ChildComponent.vue'
       import { ref } from 'vue';
      
       const childValue = ref<string>('');
   </script>
   ```
   :::

2. **`.sync` 修饰符：** 在 Vue 3 中，`.sync` 修饰符被移除了。取而代之的是，使用 `v-model:xxx` 来进行双向绑定。

   ::: code-group
   ```vue [子组件]
   <template>
       <input v-model="syncValueCopy"/>
   </template>
   
   <script setup lang="ts">
       import { ref, watch } from 'vue';
   
       const emits = defineEmits([ 'update:syncValue' ]);
   
       const props = defineProps<{
           syncValue: string
       }>();
   
       const syncValueCopy = ref<string>('');
   
       watch(() => props.syncValue, (value) => {
           syncValueCopy.value = value;
       }, {
           immediate: true
       });
   
       watch(syncValueCopy, (value) => {
           emits('update:syncValue', value);
       });
   </script>
   ```
   
   ```vue [父组件]
   <template>
      <ChildComponent v-model:syncValue="childValue"></ChildComponent>
   </template>
   <script setup lang="ts">
       import ChildComponent from './ChildComponent.vue'
       import { ref } from 'vue';
      
       const childValue = ref<string>('');
   </script>
   ```
   :::

   **简写方式：**

   ::: code-group
   ```vue [子组件]
   <template>
       <input v-model="syncValueCopy"/>
   </template>
   
   <script setup lang="ts">
       import { computed } from 'vue';
   
       const emits = defineEmits([ 'update:syncValue' ]);
   
       const props = defineProps<{
           syncValue: string
       }>();

       const syncValueCopy = computed({
          get: () => props.syncValue,
          set: (val: string) => {
             emits('update:syncValue', val);
          }
       })
   </script>
   ```
   
   ```vue [父组件]
   <template>
      <ChildComponent v-model:syncValue="childValue"></ChildComponent>
   </template>
   <script setup lang="ts">
       import ChildComponent from './ChildComponent.vue'
       import { ref } from 'vue';
      
       const childValue = ref<string>('');
   </script>
   ```
   :::

   **`3.4+` 版本新增用法：**

   ::: code-group
    ```vue [子组件]
    <template>
        <input v-model="syncValue"/>
    </template>
    
    <script setup lang="ts">
        // `3.4+` 版本新增方法
        const syncValue = defineModel(
            // 默认为 `modelValue`, 绑定的是父组件 `v-model` 的值
            'syncValue', 
            {
                type: String,
                default: ''
            });
    </script>
    ```
   
    ```vue [父组件]
    <template>
        <ChildComponent v-model:syncValue="childValue"></ChildComponent>
    </template>
    <script setup lang="ts">
        import ChildComponent from './ChildComponent.vue';
        import { ref } from 'vue';
    
        const childValue = ref<string>('');
    </script>
    ```
   :::

