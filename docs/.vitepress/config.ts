import {defineConfig} from 'vitepress';
import taskLists from 'markdown-it-task-lists';
import mathjax3 from 'markdown-it-mathjax3';
import learnSidebar from './theme/scripts/sidebar/learn';
import bugsSidebar from './theme/scripts/sidebar/bugs';
import testSidebar from './theme/scripts/sidebar/test';
import simulationItems from './theme/scripts/sidebar/simulation';
import {qqGroupIcon} from './theme/scripts/icons';

const customElements: string[] = ['mjx-container'];

export default defineConfig({
    lang: "zh-cn",
    title: 'Tmiracle的知识博客',
    description: '记录编程知识、问题处理以及面试笔试模拟',
    titleTemplate: 'Tmiracle',
    // 左上角标题的图标
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}]
    ],
    // 开启黑暗主题按钮
    appearance: true,
    // URL清除.html后缀
    // cleanUrls: true,
    // markdown 配置
    markdown: {
        // 代码块显示行数
        // lineNumbers: true,
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
            {icon: 'github', link: 'https://github.com/T-miracle/blog'},
            {icon: {svg: qqGroupIcon}, link: 'https://jq.qq.com/?_wv=1027&k=YX3jUWQe'}
        ],
        lastUpdatedText: '上次更新于',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '切换白天/黑夜主题',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        nav: [
            {text: '编程知识', link: '/learn/'},
            {text: 'BUG处理', link: '/bugs/'},
            {
                text: '题库',
                items: [
                    {text: '测试题', link: '/test/'},
                    {text: '面试与笔试模拟', link: '/simulation/'}
                ]
            },
            {text: '杂谈', link: '/tittle-tattle/'}
        ],
        // 左上角标题图标
        logo: '/logo.jpg',
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
            '/test/': testSidebar,
            '/simulation/': simulationItems
        }
    }
});
