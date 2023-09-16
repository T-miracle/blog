<template>
    <table id="function-hook-parameter">
        <thead>
            <tr>
                <th>Vue2</th>
                <th>Vue3</th>
                <th>作用</th>
                <th>区别</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2" align="center"><strong>el</strong></td>
                <td>指令所绑定的元素，可以用来直接操作 DOM</td>
                <td>无</td>
            </tr>
            <tr>
                <td colspan="2" align="center"><strong>binding</strong></td>
                <td>一个对象，包含以下属性</td>
                <td>无</td>
            </tr>
            <tr>
                <td style="padding: 5px" colspan="4">
                    <table style="margin: 0; border: 4px solid #ffdac4">
                        <thead>
                            <tr>
                                <th>Vue2</th>
                                <th>Vue3</th>
                                <th>作用</th>
                                <th>区别</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>name</td>
                                <td>指令名，不包括<code>v-</code>前缀 </td>
                                <td>Vue2 中没有</td>
                            </tr>
                            <tr>
                                <td colspan="2" align="center">value</td>
                                <td>指令的绑定值。<br/>例如：<code>v-my-directive="1 + 1"</code> 中，绑定值为 <code>2</code></td>
                                <td>无</td>
                            </tr>
                            <tr>
                                <td colspan="2" align="center">oldValue</td>
                                <td>指令绑定的前一个值，无论值是否改变都可用</td>
                                <td>
                                    Vue2 中仅在 <code>update</code> 和 <code>componentUpdated</code> 中可用，<br/>
                                    Vue3 中仅在 <code>beforeUpdate</code> 和 <code>updated</code> 中可用
                                </td>
                            </tr>
                            <tr>
                                <td align="center">expression</td>
                                <td></td>
                                <td>
                                    字符串形式的指令表达式。
                                    <br/>例如 <code>v-my-directive="1 + 1"</code> 中，表达式为 "<code>1 + 1</code>"</td>
                                <td>Vue3 中没有</td>
                            </tr>
                            <tr>
                                <td align="center" colspan="2">arg</td>
                                <td>传给指令的参数，可选。<br/>例如 <code>v-my-directive:foo</code> 中，参数为 "<code>foo</code>"</td>
                                <td>无</td>
                            </tr>
                            <tr>
                                <td align="center" colspan="2">modifiers</td>
                                <td>
                                    一个包含修饰符的对象。
                                    <br/>例如：<code>v-my-directive.foo.bar</code> 中，
                                    <br/>修饰符对象为 <code>{ foo: true, bar: true }</code>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td align="center">instance</td>
                                <td>该指令的组件实例</td>
                                <td>Vue2 中没有</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>dir</td>
                                <td>指令定义的对象</td>
                                <td>Vue2 中没有</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center"><strong>vnode</strong></td>
                <td>Vue 编译生成的虚拟节点（绑定元素的底层 <code>VNode</code>）</td>
                <td>无</td>
            </tr>
            <tr>
                <td><strong>oldVnode</strong></td>
                <td><strong>prevNode</strong></td>
                <td>上一个虚拟节点<br/>（之前的渲染中代表指令所绑定的<code>VNode</code>）</td>
                <td>
                    命名不同，
                    <br/>Vue2 中仅在 <code>update</code> 和 <code>componentUpdated</code> 中可用，
                    <br/>Vue3 中仅在 <code>beforeUpdate</code> 和 <code>updated</code> 中可用
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    #function-hook-parameter {
        td {
            > table {
                display: table;
                width: 100%;

                thead, tbody {
                    width: 100%;
                }

                td, th {
                    padding: 2px 10px;
                }
            }
        }
    }
</style>
