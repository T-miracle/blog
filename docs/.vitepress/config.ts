import { defineConfig } from 'vitepress';
import markdown_it_task_lists from 'markdown-it-task-lists';

export default defineConfig({
    // lang: "zh-CN",
    title: 'Tmiracle的知识博客',
    description: '记录一些编程知识和面试题',
    titleTemplate: 'Tmiracle',
    // 左上角标题的图标
    head: [ [ 'link', { rel: 'icon', href: '/favicon.ico' } ] ],
    // 开启黑暗主题按钮
    appearance: true,
    // URL清除.html后缀
    // cleanUrls: true,
    // markdown 配置
    markdown: {
        // 代码块显示行数
        // lineNumbers: true,
        config: (md) => {
            md.use(markdown_it_task_lists);
        }
    },
    // 主题配置
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/T-miracle/blog' }
        ],
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '切换白天/黑夜主题',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        algolia: {
            appId: 'GYP5TVLABT',
            apiKey: '573f5f9af86f62d642f261c801703fa3',
            indexName: 'namichong',
            placeholder: '请输入关键词'
        },
        nav: [ {
            text: `主站链接`,
            link: 'https://www.namichong.com/'
        } ],
        // 左上角标题图标
        logo: '/favicon.ico',
        // 右侧导航目录显示层级
        outline: 'deep',
        // 右侧导航目录显示文字
        outlineTitle: '导航',
        // 左侧栏目录配置
        sidebar: [
            {
                text: '关于',
                link: '/'
            },
            {
                text: '前端',
                collapsed: true,
                items: [
                    {
                        text: 'HTML',
                        collapsed: true,
                        items: [
                            { text: '🔸 html中DOCTYPE头的作用是什么？', link: '/web/html/html中DOCTYPE头的作用是什么？' }
                        ]
                    },
                    {
                        text: 'JavaScript',
                        collapsed: true,
                        items: [
                            { text: '🚩 什么是Ajax？如何实现一个简单的Ajax？', link: '/web/javascript/什么是Ajax？如何实现一个简单的Ajax？' },
                            { text: '🚩 什么是闭包？', link: '/web/javascript/什么是闭包？' },
                            { text: '🏴 什么是事件委托？它有什么用？', link: '/web/javascript/什么是事件委托？它有什么用？' },
                            { text: '🔹 MutationObserver监听DOM', link: '/web/javascript/MutationObserver监听DOM' },
                            { text: '🏴 GC垃圾回收机制', link: '/web/javascript/GC垃圾回收机制' },
                            { text: '🚩 ES6中的Promise有什么用？', link: '/web/javascript/ES6中的Promise有什么用？' }
                        ]
                    },
                    {
                        text: 'Vue',
                        collapsed: true,
                        items: [
                            { text: '🔹 Vue自称渐进式框架，你如何理解“渐进式”的含义？', link: '/web/vue/Vue自称渐进式框架，你如何理解“渐进式”的含义？' },
                            { text: '🚩 Vue的生命周期', link: '/web/vue/Vue的生命周期' },
                            { text: '🚩 路由模式Hash和History有什么区别？', link: '/web/vue/路由模式Hash和History有什么区别？' },
                            { text: '🚩 v-for为什么需要加key？', link: '/web/vue/v-for为什么需要加key？' },
                            { text: '🚩 v-for为什么不能和v-if在同一个元素中使用？', link: '/web/vue/v-for为什么不能和v-if在同一个元素中使用？' },
                            { text: '🔸 v-for中使用动态组件', link: '/web/vue/v-for中使用动态组件' },
                            { text: '🏴 Vue中props和data哪个优先级更高？', link: '/web/vue/Vue中props和data哪个优先级更高？' },
                            { text: '🚩 watch和computed的区别', link: '/web/vue/watch和computed的区别' },
                            { text: '🚩 keep-live是什么？如何使用？', link: '/web/vue/keep-live是什么？如何使用？' },
                            { text: '🏴 Diff 算法', link: '/web/vue/diff算法' },
                            { text: '🚩 Vue打包部署Nginx后页面路径刷新404的问题', link: '/web/vue/Vue打包部署Nginx后页面路径刷新404的问题' }
                        ]
                    },
                    {
                        text: 'HTTP',
                        collapsed: true,
                        items: [
                            { text: '🏴 tcp/ip协议', link: '/web/http/tcp和ip协议' },
                            { text: '🚩 什么是三次握手四次挥手？', link: '/web/http/什么是三次握手四次挥手？' },
                            { text: '🚩 什么是跨域？如何解决跨域问题？', link: '/web/http/什么是跨域？如何解决跨域问题？' }
                        ]
                    },
                    {
                        text: '概念',
                        collapsed: true,
                        items: [
                            { text: '🔸 什么是OPP开发模式', link: '/web/concept/什么是OPP开发模式' },
                            { text: '🔸 什么是SASS系统', link: '/web/concept/什么是SASS系统' }
                        ]
                    },
                ]
            },
            {
                text: 'Java',
                collapsed: true
            }
        ]
    }
});
