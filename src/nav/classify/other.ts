import { Project } from '../type';
import { shallowRef } from 'vue';
import PlantumlIcon from '@img/plantuml.png';

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
        icon: 'https://www.gstatic.com/devrel-devsite/prod/v37f55fe835aa1d3f6236af95c23fa834466468c2920b868f810fdf5b149e5d9f/web/images/favicon.png',
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
        icon: shallowRef(PlantumlIcon),
        description: 'PlantUML是一个通用性很强的工具，可以快速、直接地创建各种图表。',
        type: [ 'UML' ],
        level: 33,
        link: 'https://plantuml.com/zh/',
        github: 'https://github.com/plantuml/plantuml'
    }
] as Project[];
