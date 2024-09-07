import { Nav } from '../type';
import jsIcon from '../../icon/jsIcon.vue';
import tsIcon from '../../icon/tsIcon.vue';
import { shallowRef } from 'vue';
import echartIcon from '@/icon/echartIcon.vue';
import axiosIcon from '@/icon/axiosIcon.vue';
import BabelIcon from '@img/babel.png';
import ViteIcon from '@img/vite.svg';
import visactorIcon from '@img/visactor.png';
import OverlayScrollbarsIcon from '@img/OverlayScrollbars.png';
import SwiperIcon from '@img/swiper-logo.svg';
import EslintIcon from '@img/eslint.svg';
import WebpackIcon from '@/icon/webpackIcon.vue';

export default {
    name: 'JS',
    icon: shallowRef(jsIcon),
    description: 'JavaScript 是一种高级的、解释型的编程语言',
    classify: 'frontend',
    children: [
        {
            title: '教程',
            children: [
                {
                    name: 'MDN Web 文档',
                    icon: 'https://files.codelife.cc/website/mdn-web-docs.svg',
                    description: '最权威的 Web 技术文档，包括 HTML、CSS、JavaScript、Web API 等...',
                    link: 'https://developer.mozilla.org/zh-CN/docs/Learn'
                },
                {
                    name: 'ECMAScript 6 入门教程',
                    icon: 'https://files.codelife.cc/website/es6ruanyifeng.svg',
                    description: '一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。 --- 阮一峰',
                    link: 'https://es6.ruanyifeng.com',
                    github: 'https://github.com/ruanyf/es6tutorial/'
                },
                {
                    name: 'TypeScript 文档',
                    icon: tsIcon,
                    description: 'JavaScript 的超集，为大型应用提供了更好的可维护性和可读性',
                    link: [
                        {
                            name: '官方文档',
                            url: 'https://www.typescriptlang.org/',
                            github: 'https://github.com/microsoft/TypeScript'
                        },
                        {
                            name: '中文文档',
                            url: 'https://ts.nodejs.cn/'
                        }
                    ]
                }
            ]
        },
        {
            title: '构建工具 & 工具链',
            children: [
                {
                    name: 'Vite',
                    icon: ViteIcon,
                    description: '一个由原生 ESM 驱动的 Web 开发构建工具',
                    link: [
                        {
                            name: '官方文档',
                            url: 'https://vitejs.dev/',
                            github: 'https://github.com/vitejs/vite'
                        },
                        {
                            name: '中文文档',
                            url: 'https://cn.vitejs.dev/'
                        }
                    ]
                },
                {
                    name: 'Webpack',
                    icon: WebpackIcon,
                    description: '一个现代 JavaScript 应用程序的静态模块打包器',
                    link: [
                        {
                            name: '官方文档',
                            url: 'https://webpack.js.org/',
                            github: 'https://github.com/webpack/webpack'
                        },
                        {
                            name: '中文文档',
                            url: 'https://webpack.docschina.org/'
                        }
                    ]
                },
                {
                    name: 'Babel',
                    icon: BabelIcon,
                    description: '一个 JavaScript 编译器，可将 ECMAScript 2015+ 代码转换为向后兼容的 JavaScript 版本',
                    link: [
                        {
                            name: '官方文档',
                            url: 'https://babeljs.io/',
                            github: 'https://github.com/babel/babel'
                        },
                        {
                            name: '中文文档',
                            url: 'https://www.babeljs.cn/'
                        }
                    ]
                },
                {
                    name: 'Eslint',
                    icon: EslintIcon,
                    description: '一个插件化的 JavaScript 代码检测工具，可帮助你查找和修复 JavaScript 代码中的问题。',
                    link: [
                        {
                            name: '官方文档',
                            url: 'https://eslint.org/',
                            github: 'https://github.com/eslint/eslint'
                        },
                        {
                            name: '中文文档',
                            url: 'https://eslint.nodejs.cn/'
                        }
                    ]
                }
            ]
        },
        {
            title: '优秀的开源库',
            children: [
                {
                    name: 'Lodash',
                    icon: 'https://files.codelife.cc/website/5ed0b8237e261c1f0b4e6c21.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
                    description: '一致性、模块化、高性能的 JavaScript 实用工具库',
                    link: [
                        {
                            name: '官方文档',
                            url: 'https://lodash.com/',
                            github: 'https://github.com/lodash/lodash'
                        },
                        {
                            name: '中文文档',
                            url: 'https://www.lodashjs.com/'
                        }
                    ]
                },
                {
                    name: 'Echarts',
                    icon: echartIcon,
                    description: '一个基于 JavaScript 的开源可视化图表库',
                    link: 'https://echarts.apache.org/zh/index.html',
                    github: 'https://github.com/apache/echarts'
                },
                {
                    name: 'Axios',
                    icon: axiosIcon,
                    description: '基于 Promise 的 HTTP 客户端，可同时在浏览器和 node.js 中使用',
                    link: 'https://axios-http.com/zh/',
                    github: 'https://github.com/axios/axios'
                },
                {
                    name: 'Swiper',
                    icon: SwiperIcon,
                    description: '这可能是最全能的移动端轮播图实现，当然Web端也可以使用',
                    link: 'https://swiperjs.com/',
                    github: 'https://github.com/nolimits4web/swiper'
                },
                {
                    name: 'VTable 方格艺术家',
                    icon: visactorIcon,
                    description: 'VTable，不只是一款高性能的多维数据分析表格，更是一个在行列间创作的方格艺术家。',
                    link: 'https://visactor.io/',
                    github: 'https://github.com/VisActor/VTable'
                },
                {
                    name: 'OverlayScrollbars',
                    icon: OverlayScrollbarsIcon,
                    description: '一个滚动条插件，隐藏本机滚动条，提供自定义样式的覆盖滚动条，并保留本机功能和感觉。',
                    link: 'https://visactor.io/',
                    github: 'https://github.com/KingSora/OverlayScrollbars'
                }
            ]
        }
    ]
} as Nav;
