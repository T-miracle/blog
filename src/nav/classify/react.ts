import { Project } from '../type';

export default [
    {
        name: 'React',
        icon: 'https://files.codelife.cc/website/react.svg',
        description: '用于构建用户界面的 JavaScript 库',
        type: [ 'React', 'JavaScript', '框架' ],
        level: 90,
        link: [
            {
                name: '官方文档',
                url: 'https://reactjs.org/',
                github: 'https://github.com/facebook/react'
            },
            {
                name: '中文文档',
                url: 'https://zh-hans.react.dev/'
            }
        ]
    }
] as Project[];
