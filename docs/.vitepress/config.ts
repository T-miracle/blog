import { defineConfig } from 'vitepress';
import markdown_it_task_lists from 'markdown-it-task-lists';
import learnSidebar from './script/sidebar/learn';
import bugsSidebar from './script/sidebar/bugs';
import testQuestionsSidebar from './script/sidebar/test-questions';

export default defineConfig({
    // lang: "zh-CN",
    title: 'Tmiracle的知识博客',
    description: '记录一些编程知识和面试题',
    titleTemplate: 'Tmiracle',
    // 左上角标题的图标
    head: [ [ 'link', { rel: 'icon', href: '/logo.jpg' } ] ],
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
    lastUpdated: true,
    // 主题配置
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/T-miracle/blog' }
        ],
        lastUpdatedText: '上次更新于',
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
        nav: [
            {
                text: `主站链接`,
                link: 'https://www.namichong.com/'
            },
            {
                text: '学习',
                items: [
                    { text: '基础知识', link: '/' },
                    { text: 'BUG处理', link: '/bugs/' },
                    { text: '测试题库', link: '/test-questions/' },
                ]
            }
        ],
        // 左上角标题图标
        logo: '/logo.jpg',
        // 右侧导航目录显示层级
        outline: 'deep',
        // 右侧导航目录显示文字
        outlineTitle: '导航',
        // 左侧栏目录配置
        sidebar: {
            '/': learnSidebar,
            '/bugs/': bugsSidebar,
            '/test-questions/': testQuestionsSidebar,
        }
    }
});
