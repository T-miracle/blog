import { Nav } from '../type';
import RustIcon from '@/icon/rustIcon.vue';
import CourseIcon from '@img/rust.jpg';
import DioxusIcon from '@img/dioxus.png';
import { shallowRef } from 'vue';

export default {
    name: 'Rust',
    icon: shallowRef(RustIcon),
    description: '编程语言界的原神！',
    classify: 'backend',
    children: [
        {
            title: '教程',
            children: [
                {
                    name: 'Rust 官方文档',
                    icon: shallowRef(RustIcon),
                    description: 'Rust 官方文档',
                    link: 'https://www.rust-lang.org',
                    github: 'https://github.com/rust-lang/rust'
                },
                {
                    name: 'Rust 圣经',
                    icon: shallowRef(CourseIcon),
                    description: '这可能是最好的 Rust 教程',
                    link: 'https://course.rs/about-book.html'
                }
            ]
        },
        {
            title: '框架',
            children: [
                {
                    name: 'Dioxus',
                    icon: shallowRef(DioxusIcon),
                    description: '使用单个代码库构建 Web、桌面和移动应用，以及更多。零配置启动、集成的热重载和基于信号的状态管理。使用服务器功能添加后端功能，并使用我们的 CLI 进行捆绑。',
                    link: 'https://dioxuslabs.com/',
                    github: 'https://github.com/DioxusLabs/dioxus'
                }
            ]
        }
    ]
} as Nav;
