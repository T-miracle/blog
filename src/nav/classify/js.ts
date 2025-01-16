import { Project } from '../type';
import tsIcon from '../../icon/tsIcon.vue';
import { shallowRef } from 'vue';
import echartIcon from '@/icon/echartIcon.vue';
import axiosIcon from '@/icon/axiosIcon.vue';
import WebpackIcon from '@/icon/webpackIcon.vue';

export default [
    {
        name: 'GSAP',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/GSAP.svg',
        description: 'GSAP 是一个高性能、高度可定制的动画库，用于创建流畅的动画效果。',
        type: [ 'JavaScript' ],
        link: 'https://gsap.com/',
        github: 'https://github.com/greensock/GSAP'
    },
    {
        name: 'Snabbdom',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/Snabbdom.png',
        description: '一个精简化、模块化、功能强大、性能卓越的虚拟 DOM 库',
        level: -1,
        type: [ 'JavaScript' ],
        github: 'https://github.com/snabbdom/snabbdom'
    },
    {
        name: 'Viewer.js',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/github.png',
        description: '极其强大的图片预览JavaScript库',
        type: [ 'JavaScript' ],
        link: 'https://fengyuanchen.github.io/viewerjs/',
        github: 'https://github.com/fengyuanchen/viewerjs'
    },
    {
        name: 'Floating UI',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/Floating-UI.ico',
        description: '用于创建浮动元素的底层工具箱，可创建提示气泡、弹出窗口、下拉菜单等',
        type: [ 'JavaScript' ],
        link: 'https://floating-ui.com/',
        github: 'https://github.com/floating-ui/floating-ui'
    },
    {
        name: 'ECMAScript 6 入门教程',
        icon: 'https://files.codelife.cc/website/es6ruanyifeng.svg',
        description: '一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。 --- 阮一峰',
        type: [ 'JavaScript' ],
        level: 10,
        link: 'https://es6.ruanyifeng.com',
        github: 'https://github.com/ruanyf/es6tutorial/'
    },
    {
        name: 'TypeScript',
        icon: shallowRef(tsIcon),
        description: 'JavaScript 的超集，为大型应用提供了更好的可维护性和可读性',
        type: [ 'TypeScript' ],
        level: 10,
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
    },
    {
        name: 'Vite',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/vite.svg',
        description: '一个由原生 ESM 驱动的 Web 开发构建工具',
        type: [ '构建工具' ],
        level: 15,
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
        icon: shallowRef(WebpackIcon),
        description: '一个现代 JavaScript 应用程序的静态模块打包器',
        type: [ '构建工具' ],
        level: 20,
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
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/babel.png',
        description: '一个 JavaScript 编译器，可将 ECMAScript 2015+ 代码转换为向后兼容的 JavaScript 版本',
        type: [ 'JavaScript' ],
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
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/eslint.svg',
        description: '一个插件化的 JavaScript 代码检测工具，可帮助你查找和修复 JavaScript 代码中的问题。',
        type: [ 'JavaScript' ],
        level: 10,
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
    },
    {
        name: 'Terser',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/terser-logo.svg',
        description: 'JavaScript 解析器、混淆器和压缩工具包，适用于 ES6+',
        type: [ 'JavaScript' ],
        link: 'https://terser.org/',
        github: 'https://terser.org/'
    },
    {
        name: 'Lodash',
        icon: 'https://files.codelife.cc/website/5ed0b8237e261c1f0b4e6c21.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
        description: '一致性、模块化、高性能的 JavaScript 实用工具库',
        level: 45,
        type: [ 'JavaScript' ],
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
        icon: shallowRef(echartIcon),
        description: '一个基于 JavaScript 的开源可视化图表库',
        type: [ 'JavaScript' ],
        level: 50,
        link: 'https://echarts.apache.org/zh/index.html',
        github: 'https://github.com/apache/echarts'
    },
    {
        name: 'AntV',
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png',
        description: '蚂蚁企业级数据可视化解决方案，让人们在数据世界里获得视觉化思考能力',
        type: [ 'JavaScript' ],
        level: 50,
        link: 'https://antv.antgroup.com/'
    },
    {
        name: 'Axios',
        icon: shallowRef(axiosIcon),
        description: '基于 Promise 的 HTTP 客户端，可同时在浏览器和 node.js 中使用',
        type: [ 'JavaScript' ],
        level: 5,
        link: 'https://axios-http.com/zh/',
        github: 'https://github.com/axios/axios'
    },
    {
        name: 'Swiper',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/swiper-logo.svg',
        description: '这可能是最全能的移动端轮播图实现，当然 Web 端也可以使用',
        type: [ 'JavaScript' ],
        link: 'https://swiperjs.com/',
        github: 'https://github.com/nolimits4web/swiper'
    },
    {
        name: 'VTable 方格艺术家',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/visactor.png',
        description: 'VTable，不只是一款高性能的多维数据分析表格，更是一个在行列间创作的方格艺术家。',
        type: [ 'JavaScript' ],
        link: 'https://visactor.io/',
        github: 'https://github.com/VisActor/VTable'
    },
    {
        name: 'OverlayScrollbars',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/OverlayScrollbars.png',
        description: '一个滚动条插件，隐藏本机滚动条，提供自定义样式的覆盖滚动条，并保留本机功能和感觉。',
        type: [ 'JavaScript' ],
        link: 'https://visactor.io/',
        github: 'https://github.com/KingSora/OverlayScrollbars'
    },
    {
        name: 'ScrollReveal',
        icon: 'https://files.codelife.cc/user-website-icon/20220924/kspmcV8gxtvkVBhboFlSD3488.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
        description: 'ScrollReveal 可在元素进入/离开视口时轻松为其设置动画。',
        type: [ 'JavaScript' ],
        link: 'https://scrollrevealjs.org/',
        github: 'https://github.com/jlmakes/scrollreveal'
    },
    {
        name: 'Lit',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/lit.png',
        description: 'Lit 是一个简单的库，用于构建快速、轻量级的web组件。',
        type: [ 'JavaScript' ],
        link: 'https://lit.dev/',
        github: 'https://github.com/lit/lit/'
    },
    {
        name: 'NPM',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/NPM.png',
        description: '一个 JavaScript 包管理工具，也是 Node.js 的默认包管理器。 NPM 允许开发者轻松地下载、安装、共享、管理项目的依赖库和工具。',
        type: [ 'JavaScript', 'NodeJs' ],
        level: 40,
        link: 'https://www.npmjs.com/'
    },
    {
        name: 'Excalidraw',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/Excalidraw.png',
        description: '一个开源的虚拟手绘风格白板。支持协作并且端到端加密。',
        type: [ '工具', 'JavaScript' ],
        level: 79,
        link: 'https://excalidraw.com/',
        github: 'https://github.com/excalidraw/excalidraw'
    },
    {
        name: 'PromiseMirror',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/ProseMirror.svg',
        description: '一个基于TypeScript的高度自定义构建富文本编辑器的框架',
        type: [ 'TypeScript', '框架' ],
        link: 'https://prosemirror.net/',
        github: 'https://github.com/ProseMirror/prosemirror'
    },
    {
        name: 'RequireJS',
        icon: 'https://files.codelife.cc/icons/60b9ed5fae5a9ba4024b4194.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
        description: 'RequireJS 是一个 JavaScript 文件和模块加载器。' +
            '它针对浏览器内使用进行了优化，但也可以在其他 JavaScript 环境中使用，例如 Rhino 和 Node.js。' +
            '使用像 RequireJS 这样的模块化脚本加载器将提高代码的速度和质量。',
        type: [ 'JavaScript' ],
        level: -1,
        link: [
            {
                name: '官方文档',
                url: 'https://requirejs.org/',
                github: 'https://github.com/requirejs/requirejs'
            },
            {
                name: '中文文档',
                url: 'https://requirejs.node.org.cn/'
            }
        ]
    }
] as Project[];
