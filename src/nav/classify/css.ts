import { Nav } from '../type';
import cssIcon from '@/icon/cssIcon.vue';
import PostcssIcon from '@img/postcss.png';
import { shallowRef } from 'vue';

export default {
    name: 'CSS',
    icon: shallowRef(cssIcon),
    description: '层叠样式表，用于描述网页的展示样式。',
    classify: 'frontend',
    children: [
        {
            title: '教程',
            children: [
                {
                    name: 'UnoCSS',
                    icon: 'https://unocss.nodejs.cn/logo.svg',
                    description: '即时按需的原子化 CSS 引擎',
                    link: [
                        {
                            name: '官方文档',
                            url: 'https://unocss.dev/',
                            github: 'https://github.com/unocss/unocss'
                        },
                        {
                            name: '中文文档',
                            url: 'https://unocss.nodejs.cn/'
                        }
                    ]
                },
                {
                    name: 'Tailwind CSS',
                    icon: 'https://tailwind.nodejs.cn/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
                    description: '只需 HTML 即可快速构建现代网站。一个工具优先的 CSS 框架，可以直接在你的标记中构建任何设计。',
                    link: [
                        {
                            name: '官方文档',
                            url: 'https://tailwindcss.com/',
                            github: 'https://github.com/tailwindlabs/tailwindcss'
                        },
                        {
                            name: '中文文档',
                            url: 'https://tailwind.nodejs.cn/'
                        }
                    ]
                }

            ]
        },
        {
            title: '工具',
            children: [
                {
                    name: 'Sass',
                    icon: 'https://files.codelife.cc/icons/5a64939010ad6072939fcfb6.png',
                    description: '世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言。',
                    link: [
                        {
                            name: '官方文档',
                            url: 'https://sass-lang.com/',
                            github: 'https://github.com/sass/sass'
                        },
                        {
                            name: '中文文档',
                            url: 'https://sass.nodejs.cn/'
                        }
                    ]
                },
                {
                    name: 'PostCSS',
                    icon: PostcssIcon,
                    description: '一个用 JavaScript 工具和插件转换 CSS 代码的工具。',
                    link: [
                        {
                            name: '官方文档',
                            url: 'https://postcss.org/',
                            github: 'https://github.com/postcss/postcss'
                        },
                        {
                            name: '中文文档',
                            url: 'https://postcss.nodejs.cn/'
                        }
                    ]
                }
            ]
        }
    ]
} as Nav;
