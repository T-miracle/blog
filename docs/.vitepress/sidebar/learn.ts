import {
    androidIcon,
    androidStudioIcon,
    conceptIcon,
    cssIcon, deployIcon, dockerIcon, editorIcon, githubIcon, gitIcon, hBuilderXIcon,
    htmlIcon,
    httpIcon, ideaIcon,
    infoIcon,
    javaBaseIcon,
    javaIcon,
    jsIcon, mySQLIcon, npmIcon,
    rearEndIcon,
    springBootIcon, springIcon, sqlIcon, uniAppIcon, versionControlIcon,
    vueIcon,
    webIcon, webpackIcon, wxMiniprogramIcon
} from './icons';
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
import mysqlItems from './learn/mysql';
import hBuilderXItems from './learn/hbuilderx';
import androidStudioItems from './learn/android-studio';
import webpackItems from './learn/webpack';
import uniappItems from "./learn/uniapp";
import dockerItem from "./learn/docker";
import androidItems from "./learn/android";

const learnSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: infoIcon + '关于',
        link: '/learn/'
    },
    // {
    //     text: infoIcon + 'test',
    //     link: '/test/pendingTasks.md'
    // },
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
                text: uniAppIcon + 'uni-app',
                collapsed: true,
                items: uniappItems
            },
            {
                text: androidIcon + 'Android',
                collapsed: true,
                items: androidItems
            },
            {
                text: webpackIcon + 'Webpack',
                collapsed: true,
                items: webpackItems
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
                    }
                ]
            }
        ]
    },
    {
        text: sqlIcon + '数据库',
        collapsed: false,
        items: [
            {
                text: mySQLIcon + 'MySQL',
                collapsed: true,
                items: mysqlItems
            }
        ]
    },
    {
        text: deployIcon + '部署',
        collapsed: false,
        items: [
            {
                text: dockerIcon + 'Docker',
                collapsed: true,
                items: dockerItem
            }
        ]
    },
    {
        text: versionControlIcon + '版本控制',
        collapsed: false,
        items: [
            {
                text: gitIcon + 'Git',
                collapsed: true,
                items: [
                    { text: '🔸 Git常用命令', link: '/learn/version_control/git/git_common_commands.md' },
                ]
            },
            {
                text: githubIcon + 'Github',
                collapsed: true,
                items: [
                    { text: '🔹 README 说明文件美化教程', link: '/learn/version_control/github/readme_beautify.md' },
                ]
            },
            {
                text: npmIcon + 'NPM',
                collapsed: true,
                items: [
                    { text: '🔹 NPM常用命令', link: '/learn/version_control/npm/npm_common_commands.md' },
                    {
                        text: '🔸 devDependencies 和 dependencies 的区别',
                        link: '/learn/version_control/npm/the_difference_between_devDependencies_and_dependencies.md'
                    },
                    {
                        text: '🔸 NPM 上传开源项目（或插件）',
                        link: '/learn/version_control/npm/npm_upload_project.md'
                    }
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
            },
            {
                text: hBuilderXIcon + 'HBuilder X',
                collapsed: true,
                items: hBuilderXItems
            },
            {
                text: androidStudioIcon + 'Android Studio',
                collapsed: true,
                items: androidStudioItems
            }
        ]
    }
];

export default learnSidebar;
