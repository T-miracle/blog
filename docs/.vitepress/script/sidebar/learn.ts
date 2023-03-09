import {
    conceptIcon,
    cssIcon, editorIcon, githubIcon,
    htmlIcon,
    httpIcon, ideaIcon,
    infoIcon,
    javaBaseIcon,
    javaIcon,
    jsIcon,
    rearEndIcon,
    springBootIcon, springIcon,
    vueIcon,
    webIcon, wxMiniprogramIcon
} from '../icons';
import htmlItems from './learn/html';
import cssItems from './learn/css';
import jsItems from './learn/js';
import vueItems from './learn/vue';
import httpItems from './learn/http';
import webConceptItems from './learn/webConcept';
import springbootItems from './learn/springboot';
import { DefaultTheme } from 'vitepress/types/default-theme';
import ideaItems from './learn/idea';
import springItems from './learn/spring';
import wxMiniprogramItems from './learn/wx-miniprogram';

const learnSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: infoIcon + '关于',
        link: '/learn/'
    },
    {
        text: webIcon + '前端',
        collapsed: false,
        items: [
            {
                text: conceptIcon + '概念',
                collapsed: true,
                items: webConceptItems
            },
            {
                text: htmlIcon + 'HTML',
                collapsed: true,
                items: htmlItems
            },
            {
                text: cssIcon + 'CSS',
                collapsed: true,
                items: cssItems
            },
            {
                text: jsIcon + 'JavaScript',
                collapsed: true,
                items: jsItems
            },
            {
                text: vueIcon + 'Vue',
                collapsed: true,
                items: vueItems
            },
            {
                text: httpIcon + 'HTTP',
                collapsed: true,
                items: httpItems
            },
            {
                text: wxMiniprogramIcon + '微信小程序',
                collapsed: true,
                items: wxMiniprogramItems
            },
            {
                text: githubIcon + '开源项目收集',
                link: '/learn/web/github/open_source_project_collection'
            }
        ]
    },
    {
        text: rearEndIcon + '后端',
        collapsed: false,
        items: [
            {
                text: javaIcon + 'Java',
                collapsed: false,
                items: [
                    {
                        text: javaBaseIcon + 'Java基础',
                        collapsed: true,
                        items: []
                    },
                    {
                        text: springIcon + 'Spring',
                        collapsed: true,
                        items: springItems
                    },
                    {
                        text: springBootIcon + 'SpringBoot',
                        collapsed: true,
                        items: springbootItems
                    },
                ]
            }
        ]
    },
    {
        text: editorIcon + '编辑器',
        collapsed: false,
        items: [
            {
                text: ideaIcon + 'IntelliJ IDEA',
                collapsed: true,
                items: ideaItems
            }
        ]
    }
];

export default learnSidebar;
