import { Nav } from '../type';
import vueIcon from '@/icon/vueIcon.vue';
import VueIcon from '@/icon/vueIcon.vue';
import piniaIcon from '@img/pinia.png';
import splitpanesIcon from '@/icon/splitpanesIcon.vue';
import { shallowRef } from 'vue';

export default {
    name: 'Vue',
    icon: shallowRef(vueIcon),
    description: 'Vue 是一套用于构建用户界面的渐进式框架',
    classify: 'frontend',
    children: [
        {
            title: '框架',
            children: [
                {
                    name: 'Vue 官方文档',
                    icon: shallowRef(vueIcon),
                    description: '渐进式 JavaScript 框架。易学易用，性能出色，适用场景丰富的 Web 前端框架。',
                    link: [
                        {
                            name: 'Vue2',
                            url: 'https://v2.cn.vuejs.org/',
                            github: 'https://github.com/vuejs/vue'
                        },
                        {
                            name: 'Vue3',
                            url: 'https://v3.cn.vuejs.org/',
                            github: 'https://github.com/vuejs/core'
                        }
                    ]
                },
                {
                    name: 'NuxtJS 官方文档',
                    icon: 'https://files.codelife.cc/icons/nuxtjs.svg',
                    description: 'NuxtJS 让你构建你的下一个 Vue.js 应用程序变得更有信心。这是一个 开源 的框架，让 web 开发变得简单而强大。',
                    link: 'https://www.nuxtjs.cn/',
                    github: 'https://github.com/nuxt/nuxt.js'
                },
                {
                    name: 'Vitepress',
                    icon: 'https://files.codelife.cc/user-website-icon/20230307/KH3KXfA-CzCBQ2cHu3_re9851.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
                    description: '由 Vite 和 Vue 驱动的静态站点生成器',
                    link: 'https://vitepress.dev/zh/guide/what-is-vitepress',
                    github: 'https://github.com/vuejs/vitepress'
                }
            ]
        },
        {
            title: '工具库',
            children: [
                {
                    name: 'Vue Router 官方文档',
                    icon: shallowRef(vueIcon),
                    description: '为 Vue.js 提供富有表现力、可配置的、方便的路由。',
                    link: [
                        {
                            name: 'v4.x（适用于 Vue3）',
                            url: 'https://router.vuejs.org/zh/',
                            github: 'https://github.com/vuejs/router'
                        },
                        {
                            name: 'v3.x（适用于 Vue2）',
                            url: 'https://v3.router.vuejs.org/zh/',
                            github: 'https://github.com/vuejs/vue-router'
                        }
                    ]
                },
                {
                    name: 'Vuex 官方文档',
                    icon: shallowRef(vueIcon),
                    description: '一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。',
                    link: [
                        {
                            name: 'v4.x（适用于 Vue3）',
                            url: 'https://vuex.vuejs.org/zh/',
                            github: 'https://github.com/vuejs/vuex'
                        },
                        {
                            name: 'v3.x（适用于 Vue2）',
                            url: 'https://v3.vuex.vuejs.org/zh/',
                            github: 'https://github.com/vuejs/vuex'
                        }
                    ]
                },
                {
                    name: 'Pinia 官方文档',
                    icon: shallowRef(piniaIcon),
                    description: '用于 Vue3 的符合直觉的 Vue.js 状态管理库。',
                    link: 'https://pinia.vuejs.org/zh/',
                    github: 'https://github.com/vuejs/pinia'
                }
            ]
        },
        {
            title: '通用开源库',
            children: [
                {
                    name: 'Element UI/Plus',
                    icon: 'https://files.codelife.cc/website/elementui.svg',
                    description: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue.js 的桌面端组件库',
                    link: [
                        {
                            name: 'Element UI（适用于 Vue2）',
                            url: 'https://element.eleme.cn/#/zh-CN',
                            github: 'https://github.com/ElemeFE/element'
                        },
                        {
                            name: 'Element Plus（适用于 Vue3）',
                            url: 'https://element-plus.org/zh-CN/component/overview.html',
                            github: 'https://github.com/element-plus/element-plus'
                        }
                    ]
                },
                {
                    name: 'Vxe Table',
                    icon: 'https://vxetable.cn/logo.png',
                    description: '一个基于 Vue 的高性能表格组件',
                    link: 'https://vxetable.cn/',
                    github: 'https://github.com/x-extends/vxe-table'
                },
                {
                    name: 'Splitpanes',
                    icon: shallowRef(splitpanesIcon),
                    description: '一个 Vue.js 可靠、简单且可触摸的窗格分割器/缩放器。兼容 Vue 3。',
                    link: 'https://antoniandre.github.io/splitpanes/',
                    github: 'https://github.com/antoniandre/splitpanes'
                }
            ]
        },
        {
            title: 'Vue2 开源库',
            children: [
                {
                    name: 'vue-countTo',
                    icon: shallowRef(VueIcon),
                    description: '一个数字自增长动画的组件。',
                    github: 'https://github.com/PanJiaChen/vue-countTo'
                },
                {
                    name: 'vue-grid-layout',
                    icon: 'https://jbaysolutions.github.io/vue-grid-layout/assets/img/logo.png',
                    description: '一个用于 Vue.js 的可拖拽和可调整大小的网格布局组件。',
                    link: 'https://jbaysolutions.github.io/vue-grid-layout/',
                    github: 'https://github.com/jbaysolutions/vue-grid-layout'
                }
            ]
        },
        {
            title: 'Vue3 开源库',
            children: [
                {
                    name: 'Varlet UI',
                    icon: 'https://varletjs.org/varlet_icon.png',
                    description: '一个基于 Vue3 开发的 Material Design 组件库，全面拥抱 Vue3 生态，支持移动端和桌面端，由 varletjs 组织维护。支持 Typescript、按需引入、暗黑模式、主题定制、国际化，并提供 VSCode 插件保障良好的开发体验。',
                    link: 'https://varletjs.org/#/zh-CN/index',
                    github: 'https://github.com/varletjs/varlet'
                },
                {
                    name: 'Vue3 Marquee',
                    icon: shallowRef(VueIcon),
                    description: '适用于您的 Vue 3/Nuxt 3 应用程序的简单动态跑马灯组件。',
                    link: 'https://vue3-marquee.vercel.app/',
                    github: 'https://github.com/megasanjay/vue3-marquee'
                }
            ]
        }
    ]
} as Nav;
