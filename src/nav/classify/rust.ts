import { Nav } from '../type';
import RustIcon from './icon/rustIcon.vue';

export default {
    name: 'Rust',
    icon: RustIcon,
    description: '编程语言界的原神！',
    classify: 'backend',
    children: [
        {
            title: '教程',
            children: [
                {
                    name: 'Rust 官方文档',
                    icon: RustIcon,
                    description: 'Rust 官方文档',
                    link: 'https://www.rust-lang.org',
                    github: 'https://github.com/rust-lang/rust'
                },
                {
                    name: 'Rust 圣经',
                    icon: RustIcon,
                    description: 'Rust 圣经',
                    link: 'https://course.rs/about-book.html'
                }
            ]
        }
    ]
} as Nav;
