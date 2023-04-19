<template>
    <div>
        <table class="table-w100">
            <thead>
                <tr>
                    <th width="240">快捷键</th>
                    <th>解释</th>
                </tr>
            </thead>
            <tbody>
                <tr class="title">
                    <td colspan="2">搜索 / 替换</td>
                </tr>
                <tr>
                    <td>CTRL + F</td>
                    <td>当前文件中搜索字符串</td>
                </tr>
                <tr>
                    <td>CTRL + SHIFT + F</td>
                    <td>在项目文件中搜索字符串</td>
                </tr>
                <tr>
                    <td>双击 SHIFT</td>
                    <td>任意搜索</td>
                </tr>
                <tr>
                    <td>CTRL + R</td>
                    <td>当前文件中搜索字符串并替换</td>
                </tr>
                <tr>
                    <td>CTRL + SHIFT + F</td>
                    <td>在项目文件中搜索字符串并替换</td>
                </tr>
                <tr>
                    <td>CTRL + SHIFT + \</td>
                    <td>通过 url 路径的字符串查找相关实现类</td>
                </tr>
                <tr class="title">
                    <td colspan="2">光标移动</td>
                </tr>
                <tr>
                    <td>CTRL + Home</td>
                    <td>光标移动到编辑器最顶层</td>
                </tr>
                <tr>
                    <td>CTRL + End</td>
                    <td>光标移动到编辑器最底层</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped lang="scss">
  @import "./styles/w100-table.scss";
</style>
<script setup lang="ts">
</script>
