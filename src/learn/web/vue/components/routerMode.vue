<template>
    <table id="mk">
        <thead>
            <tr>
                <th width="120"></th>
                <th>Hash模式</th>
                <th>History模式</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>功能实现基于</td>
                <td>window.location.hash</td>
                <td>window.history</td>
            </tr>
            <tr>
                <td>兼容性</td>
                <td>兼容到IE8</td>
                <td>兼容到IE10</td>
            </tr>
            <tr>
                <td>URL链接</td>
                <td>显示带`#`号</td>
                <td>显示不带`#`号</td>
            </tr>
            <tr>
                <td>离线环境</td>
                <td>正常跳转</td>
                <td>不能正常跳转</td>
            </tr>
            <tr>
                <td>线上环境</td>
                <td>正常跳转</td>
                <td>需要<a href="nginx_path_refresh_404_problem.html">配置</a>，否则刷新会出现404问题</td>
            </tr>
            <tr>
                <td>服务请求</td>
                <td>实际的url之前使用哈希字符，这部分url不会发送到服务器，不需要在服务器层面上进行任何处理</td>
                <td>每访问一个页面都需要服务器进行路由匹配生成 html 文件再发送响应给浏览器，消耗服务器大量资源</td>
            </tr>
            <tr>
                <td>缺点</td>
                <td>
                    <ul>
                        <li>由于`#`被占用，会导致页面锚点定位无法使用</li>
                        <li>不利于 SEO（搜索引擎优化）</li>
                        <li>白屏时间问题。浏览器需要等待 JavaScript 文件加载完成之后渲染 HTML 文档内容，用户等待时间稍长</li>
                    </ul>
                </td>
                <td>需要配置</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    table {
        &#mk {
            tr {
                > :nth-child(1) {
                    text-align: right;
                }

                td {
                    white-space: pre-wrap;
                }
            }
        }
    }

</style>
