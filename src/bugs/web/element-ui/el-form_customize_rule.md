---
lastUpdated: 2024/7/18 09:41
---

# el-form 自定义一个非输入选择的值的规则，但是无法生效的问题

假设我们有以下结构：

```vue {12-14,34-46}
<template>
    <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item label="输入框" prop="input">
            <el-input v-model="form.input"/>
        </el-form-item>
        <el-form-item label="选择器" prop="select">
            <el-select v-model="form.select">
                <el-option label="1" value="1"/>
                <el-option label="2" value="2"/>
            </el-select>
        </el-form-item>
        <el-form-item label="自定义" prop="customize">
            <CustomizeComponent v-model="form.customize"/>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    input: '',
                    select: '',
                    customize: []
                },
                rules: {
                    input: [
                        { required: true, message: '请输入应急联系人', trigger: 'change' }
                    ],
                    select: [
                        { required: true, message: '请输入应急联系人', trigger: 'change' }
                    ],
                    customize: [
                        {
                            required: true,
                            trigger: 'change',
                            validator: (rule, value, callback) => {
                                console.log('--->', value)
                                if (value.length === 0) {
                                    callback('数组不能能为空')
                                } else {
                                    callback()
                                }
                            }
                        }
                    ]
                }
            }
        },
        methods: {
            verify() {
                this.$refs.formRef.validate(/* ... */)
            }
        }
    }
</script>
```

这里，给一个 `form` 的属性 `customize` 定义了一个规则，期望它能像其他两个规则一样正常触发校验

但是，事与愿违，`customize` 虽然会触发校验，但是 `console.log` 打印出来的值永远不会变，永远都是 `[]`，
不管你是否改变了 `customize` 的值

**想要正常触发，应该直接使用 `this.form.customize` 代替 `value`**

```js
customize: [
    {
        required: true,
        trigger: 'change',
        validator: (rule, value, callback) => {
            console.log('--->', this.form.customize)
            if (this.form.customize.length === 0) {
                callback('数组不能能为空')
            } else {
                callback()
            }
        }
    }
]
```

只有这样才能正常触发一个自定义的值的校验
