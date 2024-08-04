import { Nav } from '../type';
import RustIcon from '@/icon/rustIcon.vue';
import CourseIcon from '@img/rust.jpg';
import { shallowRef } from 'vue';

export default {
    name: 'Rust',
    icon: shallowRef(RustIcon),
    description: '编程语言界的原神！',
    classify: 'backend',
    children: [
        {
            title: '框架 & 教程',
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
        }
    ]
} as Nav;
