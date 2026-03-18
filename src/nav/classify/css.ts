import { Project } from '@/nav/type';

export default [
    {
        name: 'UnoCSS',
        icon: 'https://unocss.nodejs.cn/logo.svg',
        description: '即时按需的原子化 CSS 引擎',
        type: [ 'CSS', '框架' ],
        level: 72,
        link: 'https://unocss.dev/',
        github: 'https://github.com/unocss/unocss'
    },
    {
        name: 'Tailwind CSS',
        icon: 'https://tailwind.nodejs.cn/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
        description: '只需 HTML 即可快速构建现代网站。一个工具优先的 CSS 框架，可以直接在你的标记中构建任何设计。',
        type: [ 'CSS', '框架' ],
        level: 72,
        link: 'https://tailwindcss.com/',
        github: 'https://github.com/tailwindlabs/tailwindcss'
    },
    {
        name: 'Sass',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/sass.png',
        description: '世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言。',
        type: [ 'CSS' ],
        level: 35,
        link: 'https://sass-lang.com/',
        github: 'https://github.com/sass/sass'
    },
    {
        name: 'PostCSS',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/icons/postcss.png',
        description: '一个用 JavaScript 工具和插件转换 CSS 代码的工具。',
        type: [ 'CSS' ],
        link: 'https://postcss.org/',
        github: 'https://github.com/postcss/postcss'
    },
    {
        name: 'CSS Loaders',
        icon: 'https://css-loaders.com/fav.png',
        description: '最大的 CSS 加载动画集合',
        type: [ 'CSS' ],
        link: 'https://css-loaders.com/'
    },
    {
        name: 'CSS Button',
        icon: 'https://cssbuttons.io/favicon-32x32.png',
        description: '最大的开源 UI 元素库。探索大量精美的 UI 元素，包括按钮、复选框、卡片等。',
        type: [ 'CSS' ],
        link: 'https://cssbuttons.io/'
    }
] as Project[];
