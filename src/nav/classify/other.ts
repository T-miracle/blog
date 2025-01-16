import { Project } from '../type';

export default [
    {
        name: 'MDN Web 文档',
        icon: 'https://files.codelife.cc/website/mdn-web-docs.svg',
        description: '最权威的 Web 技术文档，包括 HTML、CSS、JavaScript、Web API 等...',
        type: [ 'JavaScript', 'HTML', 'CSS' ],
        level: 80,
        link: 'https://developer.mozilla.org/zh-CN/docs/Learn'
    },
    {
        name: 'web.dev',
        icon: 'data:image/png;base64,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',
        description: 'Google 开发者文档，包括 Web 开发技术、性能、工具等',
        type: [ 'JavaScript', 'HTML', 'CSS' ],
        level: 80,
        link: 'https://web.dev/'
    },
    {
        name: 'Can I Use',
        icon: 'https://files.codelife.cc/icons/5d35587519c5b849159b9201.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
        description: '查询浏览器兼容性',
        type: [ 'HTML', 'CSS', 'JavaScript', 'SVG' ],
        level: 50,
        link: 'https://caniuse.com/'
    },
    {
        name: 'Slidev',
        icon: 'https://files.codelife.cc/user-website-icon/20231119/tAY9offXv6iWyofSqrnms5765.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
        description: '为开发者打造的演示文稿工具，使用 Markdown 和 Vue 编写幻灯片',
        type: [ 'JavaScript', 'Markdown' ],
        level: 10,
        link: 'https://cn.sli.dev/',
        github: 'https://github.com/slidevjs/slidev'
    },
    {
        name: 'CodePen',
        icon: 'https://files.codelife.cc/website/codepen.svg',
        description: 'CodePen 是一个面向前端设计师和开发者的社交开发环境。' +
            '你可以构建和部署网站，展示作品，创建测试用例以学习和调试，甚至获得灵感。',
        type: [ 'HTML', 'CSS', 'JavaScript' ],
        level: 24,
        link: 'http://codepen.io'
    },
    {
        name: 'PlantUML',
        icon: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/plantuml.png',
        description: 'PlantUML是一个通用性很强的工具，可以快速、直接地创建各种图表。',
        type: [ 'UML' ],
        level: 33,
        link: 'https://plantuml.com/zh/',
        github: 'https://github.com/plantuml/plantuml'
    }
] as Project[];
