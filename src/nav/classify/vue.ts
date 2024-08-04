import { Nav } from '../type';
import vueIcon from '@/icon/vueIcon.vue';
import piniaIcon from '@img/pinia.png';
import { shallowRef } from 'vue';

export default {
    name: 'Vue',
    icon: shallowRef(vueIcon),
    description: 'Vue 是一套用于构建用户界面的渐进式框架',
    classify: 'frontend',
    children: [
        {
            title: '框架 & 教程',
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
                        },
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
                    icon: piniaIcon,
                    description: '用于 Vue3 的符合直觉的 Vue.js 状态管理库。',
                    link: 'https://pinia.vuejs.org/zh/',
                    github: 'https://github.com/vuejs/pinia'
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
            title: '优秀的组件库',
            children: [
                {
                    name: 'Element UI/Plus',
                    icon: 'https://files.codelife.cc/website/elementui.svg',
                    description: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue.js 的桌面端组件库',
                    link: [
                        {
                            name: 'Element UI',
                            url: 'https://element.eleme.cn/#/zh-CN',
                            github: 'https://github.com/ElemeFE/element'
                        },
                        {
                            name: 'Element Plus',
                            url: 'https://element-plus.org/zh-CN/component/overview.html',
                            github: 'https://github.com/element-plus/element-plus'
                        }
                    ]
                }
            ]
        }
    ]
} as Nav;
