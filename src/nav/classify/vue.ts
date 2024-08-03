import { Nav } from '../type';
import vueIcon from './icon/vueIcon.vue';

export default {
    name: 'Vue',
    icon: vueIcon,
    description: 'Vue 是一套用于构建用户界面的渐进式框架',
    classify: 'frontend',
    children: [
        {
            title: '教程',
            children: [
                {
                    name: 'Vue2 官方文档',
                    icon: vueIcon,
                    description: 'Vue2 官方文档',
                    link: 'https://v2.cn.vuejs.org/',
                    github: ''
                },
                {
                    name: 'Vue3 官方文档',
                    icon: vueIcon,
                    description: 'Vue3 官方文档',
                    link: 'https://v3.cn.vuejs.org/',
                    github: ''
                }
            ]
        }
    ]
} as Nav;
