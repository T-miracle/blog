import { Project } from '../type';
import RustIcon from '@/icon/rustIcon.vue';
import { shallowRef } from 'vue';

export default [
    {
        name: 'Rust',
        icon: shallowRef(RustIcon),
        description: 'Rust 是一种系统编程语言，专注于安全性、速度和并发性。它通过所有权系统来实现这些目标。',
        type: [ 'Rust' ],
        level: 101,
        link: 'https://www.rust-lang.org',
        github: 'https://github.com/rust-lang/rust'
    },
    {
        name: 'Rust 圣经',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/rust.jpg',
        description: '这可能是最好的 Rust 教程',
        type: [ 'Rust' ],
        level: 101,
        link: 'https://course.rs/about-book.html'
    },
    {
        name: 'Dioxus',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/dioxus.png',
        description: '使用单个代码库构建 Web、桌面和移动应用，以及更多。零配置启动、集成的热重载和基于信号的状态管理。' +
            '使用服务器功能添加后端功能，并使用我们的 CLI 进行捆绑。',
        type: [ 'Rust', '框架' ],
        level: 72,
        link: 'https://dioxuslabs.com/',
        github: 'https://github.com/DioxusLabs/dioxus'
    }
] as Project[];
