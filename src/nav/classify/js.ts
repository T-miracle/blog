import { Nav } from '../type';
import jsIcon from '../../icon/jsIcon.vue';
import { shallowRef } from 'vue';

export default {
    name: 'JS',
    icon: shallowRef(jsIcon),
    description: 'JavaScript 是一种高级的、解释型的编程语言',
    classify: 'frontend',
    children: [
        {
            title: '教程',
            children: [
                {
                    name: 'MDN Web 文档',
                    icon: 'https://files.codelife.cc/website/mdn-web-docs.svg',
                    description: '最权威的 Web 技术文档，包括 HTML、CSS、JavaScript、Web API 等...',
                    link: 'https://developer.mozilla.org/zh-CN/docs/Learn'
                }
            ]
        },
        {
            title: '实用的开源库',
            children: [
                {
                    name: 'Lodash',
                    icon: 'https://files.codelife.cc/website/5ed0b8237e261c1f0b4e6c21.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
                    description: '一致性、模块化、高性能的 JavaScript 实用工具库',
                    link: [
                        {
                            name: '官方文档',
                            url: 'https://lodash.com/',
                            github: 'https://github.com/lodash/lodash'
                        },
                        {
                            name: '中文文档',
                            url: 'https://www.lodashjs.com/'
                        }
                    ]
                }
            ]
        }
    ]
} as Nav;
