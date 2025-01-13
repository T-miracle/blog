import { ThemeConfig } from '../package/type';
import learnSidebar from './sidebar/learn';
import bugsSidebar from './sidebar/bugs';
import testSidebar from './sidebar/test';

export default {
    name: 'Tmiracle',
    motto: '用爱学IT，用心写BUG',
    aboutMePath: '',
    backgrounds: [
        '/bg/wallhaven-jxl3qp.webp'
    ],
    // 左上角标题图标
    logo: '/logo-op0.png',
    // 评论配置
    comments: {
        type: 'artalk',
        options: {
            server: 'http://artalk.namichong.com',
            site: 'Hi! Tmiracle'
        }
    },
    search: {
        provider: 'local',
        options: {
            translations: {
                button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                },
                modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    displayDetails: '显示详细信息',
                    footer: {
                        selectText: '选择',
                        navigateText: '切换',
                        closeText: '关闭'
                    }
                }
            }
        }
    },
    footer: {
        message: 'Released under the MIT License. <br/> Copyright © 2022-present Tmiracle',
        copyright: '<a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">桂ICP备2022008261号-1</a>'
    },
    socialLinks: [
        { icon: 'github', link: 'https://github.com/T-miracle' },
        { icon: 'qq', link: 'https://jq.qq.com/?_wv=1027&k=YX3jUWQe' },
        { icon: 'bilibili', link: 'https://space.bilibili.com/14816067' },
        { icon: 'wangyiyun', link: 'https://music.163.com/#/user/home?id=263985930' }
    ],
    lastUpdated: {
        text: '上次更新于'
    },
    nav: [
        { text: '学习备忘录', link: '/learn/' },
        { text: '文档翻译', link: '/translation-docs/' },
        { text: '资源导航', link: '/nav/' },
        {
            text: '更多内容',
            items: [
                { text: '问题处理', link: '/bugs/' },
                { text: '测试题', link: '/test/' },
                { text: '杂谈', link: '/tittle-tattle/' }
                // { text: '面试与笔试模拟', link: '/simulation/' }
            ]
        }
    ],
    outline: {
        level: 'deep',
        label: '结构'
    },
    // 左侧栏目录配置
    sidebar: {
        '/learn/': learnSidebar,
        '/bugs/': bugsSidebar,
        '/test/': testSidebar
    }
} as ThemeConfig;
