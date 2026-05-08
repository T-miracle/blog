import {
    androidIcon,
    conceptIcon,
    cssIcon,
    deployIcon,
    dockerIcon,
    editorIcon,
    gitIcon,
    hBuilderXIcon,
    htmlIcon,
    httpIcon,
    ideaIcon,
    infoIcon,
    javaIcon,
    jsIcon,
    mySQLIcon,
    nodejsIcon,
    npmIcon,
    rearEndIcon,
    springIcon,
    sqlIcon,
    uniAppIcon,
    versionControlIcon,
    vueIcon,
    webIcon
} from './icons';
import htmlItems from './learn/html';
import cssItems from './learn/css';
import jsItems from './learn/js';
import vueItems from './learn/vue';
import httpItems from './learn/http';
import webConceptItems from './learn/webConcept';
import ideaItems from './learn/idea';
import springItems from './learn/spring';
import mysqlItems from './learn/mysql';
import hBuilderXItems from './learn/hbuilderx';
import uniappItems from './learn/uniapp';
import dockerItem from './learn/docker';
import androidItems from './learn/android';
import nodejsItems from './learn/nodejsItems';
import { type SidebarType } from '../../package/type';
import neovimItems from './learn/neovim';

const learnSidebar: SidebarType[] = [
    {
        icon: infoIcon,
        text: '这是什么？',
        link: '/learn/',
        items: []
    },
    {
        icon: webIcon,
        text: '前端',
        collapsed: false,
        items: [
            {
                icon: conceptIcon,
                text: '概念',
                collapsed: true,
                items: webConceptItems
            },
            {
                icon: htmlIcon,
                text: 'HTML',
                collapsed: true,
                items: htmlItems
            },
            {
                icon: cssIcon,
                text: 'CSS',
                collapsed: true,
                items: cssItems
            },
            {
                icon: jsIcon,
                text: 'JavaScript',
                collapsed: true,
                items: jsItems
            },
            {
                icon: nodejsIcon,
                text: 'NodeJs',
                collapsed: true,
                items: nodejsItems
            },
            {
                icon: vueIcon,
                text: 'Vue',
                collapsed: true,
                items: vueItems
            },
            {
                icon: httpIcon,
                text: 'HTTP',
                collapsed: true,
                items: httpItems
            },
            /* {
                icon: wxMiniprogramIcon,
                text: '微信小程序',
                collapsed: true,
                items: wxMiniprogramItems
            }, */
            {
                icon: uniAppIcon,
                text: 'uni-app',
                collapsed: true,
                items: uniappItems
            },
            {
                icon: androidIcon,
                text: 'Android',
                collapsed: true,
                items: androidItems
            }
            /* {
                icon: webpackIcon,
                text: 'Webpack',
                collapsed: true,
                items: webpackItems
            } */
        ]
    },
    {
        icon: rearEndIcon,
        text: '后端',
        collapsed: false,
        items: [
            {
                icon: javaIcon,
                text: 'Java',
                collapsed: true,
                items: [
                    /* {
                        icon: javaBaseIcon,
                        text: 'Java基础',
                        collapsed: true,
                        items: []
                    }, */
                    {
                        icon: springIcon,
                        text: 'Spring',
                        collapsed: true,
                        items: springItems
                    }
                    /* {
                        icon: springBootIcon,
                        text: 'SpringBoot',
                        collapsed: true,
                        items: springbootItems
                    } */
                ]
            }
        ]
    },
    {
        icon: sqlIcon,
        text: '数据库',
        collapsed: false,
        items: [
            {
                icon: mySQLIcon,
                text: 'MySQL',
                collapsed: true,
                items: mysqlItems
            }
        ]
    },
    {
        icon: deployIcon,
        text: '部署',
        collapsed: false,
        items: [
            {
                icon: dockerIcon,
                text: 'Docker',
                collapsed: true,
                items: dockerItem
            }
        ]
    },
    {
        icon: versionControlIcon,
        text: '版本控制',
        collapsed: false,
        items: [
            {
                icon: gitIcon,
                text: 'Git',
                collapsed: true,
                items: [
                    {
                        icon: '🔸',
                        text: 'Git常用命令',
                        link: '/learn/version_control/git/git_common_commands'
                    },
                    {
                        icon: '🔸',
                        text: 'Git将项目的某个目录分离成新的项目，并保留历史提交信息',
                        link: '/learn/version_control/git/git_detached_directory_and_keep_historical_submission_records'
                    }
                ]
            },
            {
                icon: npmIcon,
                text: 'NPM',
                collapsed: true,
                items: [
                    {
                        icon: '🔹',
                        text: 'NPM常用命令',
                        link: '/learn/version_control/npm/npm_common_commands'
                    },
                    {
                        icon: '🔸',
                        text: 'devDependencies 和 dependencies 的区别',
                        link: '/learn/version_control/npm/the_difference_between_devDependencies_and_dependencies'
                    },
                    {
                        icon: '🔸',
                        text: 'NPM 上传开源项目（或插件）',
                        link: '/learn/version_control/npm/npm_upload_project'
                    }
                ]
            }
        ]
    },
    {
        icon: editorIcon,
        text: '编辑器',
        collapsed: false,
        items: [
            {
                icon: ideaIcon,
                text: 'IntelliJ IDEA',
                collapsed: true,
                items: ideaItems
            },
            {
                icon: hBuilderXIcon,
                text: 'HBuilder X',
                collapsed: true,
                items: hBuilderXItems
            },
            {
                text: 'Neovim',
                collapsed: true,
                items: neovimItems
            }
        ]
    }
];

export default learnSidebar;
