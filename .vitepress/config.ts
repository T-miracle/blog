import { defineConfig } from 'vitepress';
import taskLists from 'markdown-it-task-lists';
import mathjax3 from 'markdown-it-mathjax3';
import learnSidebar from './sidebar/learn';
import bugsSidebar from './sidebar/bugs';
import testSidebar from './sidebar/test';
import { qqGroupIcon } from './sidebar/icons';
import UnoCSS from 'unocss/vite';
import path from 'path';

const customElements: string[] = [ 'mjx-container' ];

export default defineConfig({
    cacheDir: './cache',
    srcDir: './src',
    outDir: './dist',
    lang: 'zh-cn',
    title: 'Hi! Tmiracle',
    description: '编程导航，国外技术文档翻译，编程知识记录',
    titleTemplate: ':title | Hi! Tmiracle',
    // 左上角标题的图标
    head: [
        [ 'link', { rel: 'icon', href: '/logo.png' } ]
    ],
    vite: {
        resolve: {
            alias: {
                '@': path.join(__dirname, '../src/'),
                '@img': path.join(__dirname, '../src/public/images/')
            }
        },
        plugins: [
            UnoCSS()
        ]
    },
    sitemap: {
        hostname: 'https://blog.namichong.com'
    },
    // 开启黑暗主题按钮
    appearance: true,
    // URL清除.html后缀
    // cleanUrls: true,
    // markdown 配置
    markdown: {
        // 代码块显示行数
        // lineNumbers: true,
        theme: 'monokai',
        // lineNumbers: true,
        // theme: {
        //     light: 'github-dark',
        //     dark: 'github-dark'
        // },
        config: (md) => {
            md.use(mathjax3);
            md.use(taskLists);
        }
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.indexOf(tag) > 0
            }
        }
    },
    lastUpdated: true,
    // 主题配置
    themeConfig: {
        search: {
            provider: 'local'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Tmiracle <br/>' +
                '<a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">桂ICP备2022008261号-1</a>'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/T-miracle' },
            { icon: { svg: qqGroupIcon }, link: 'https://jq.qq.com/?_wv=1027&k=YX3jUWQe' }
        ],
        lastUpdated: {
            text: '上次更新于'
        },
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '切换白天/黑夜主题',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        nav: [
            { text: '实用资源导航', link: '/nav/' },
            { text: '技术文档翻译', link: '/translation-docs/' },
            { text: '我的知识库', link: '/learn/' },
            {
                text: '其他',
                items: [
                    { text: '问题处理', link: '/bugs/' },
                    { text: '测试题', link: '/test/' },
                    { text: '杂谈', link: '/tittle-tattle/' }
                    // { text: '面试与笔试模拟', link: '/simulation/' }
                ]
            }
        ],
        // 左上角标题图标
        logo: '/logo.png',
        outline: {
            // 右侧导航目录显示层级
            level: 'deep',
            // 右侧导航目录显示文字
            label: '导航栏'
        },
        // 左侧栏目录配置
        sidebar: {
            '/learn/': learnSidebar,
            '/bugs/': bugsSidebar,
            '/test/': testSidebar
        }
    }
});
