<template>
    <div>
        <table id="idea-hotkey-table">
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
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    #idea-hotkey-table {
        width: 100%;
        display: table;
        table-layout: fixed;

        > thead, tbody {
            width: 100%;
        }

        > thead {
            > tr {
                > th:first-child {
                    text-align: center;
                }
            }
        }

        > tbody {
            > tr.title {
                > td {
                    font-weight: 500;
                    font-size: 1.2em;
                    background-color: rgba(158, 206, 90, 0.25);
                    padding: 10px 60px;
                }
            }

            > tr:not(.title) {
                background-color: transparent !important;

                > td:first-child {
                    text-align: center;
                    font-weight: bold;
                }
            }
        }
    }
</style>
