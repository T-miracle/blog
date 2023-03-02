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
    springBootIcon,
    vueIcon,
    webIcon
} from './icons';
import htmlItems from './items/html';
import cssItems from './items/css';
import jsItems from './items/js';
import vueItems from './items/vue';
import httpItems from './items/http';
import webConceptItems from './items/webConcept';
import springbootItems from './items/springboot';
import { DefaultTheme } from 'vitepress/types/default-theme';
import ideaItems from './items/idea';

const sidebar: DefaultTheme.Sidebar = [
    {
        text: infoIcon + '关于',
        link: '/'
    },
    {
        text: webIcon + '前端',
        collapsed: false,
        items: [
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
                text: conceptIcon + '概念',
                collapsed: true,
                items: webConceptItems
            },
            {
                text: githubIcon + '开源项目收集',
                link: '/web/github/开源项目收集'
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

export default sidebar;
