import { DefaultTheme } from 'vitepress/types/default-theme';
import { jobIcon } from './icons';

const simulationItems: DefaultTheme.SidebarItem[] = [
    {
        text: jobIcon + '页面说明',
        link: '/simulation/'
    },
    {
        text: '面试题',
        items: [
            { text: '2023-03-11 南宁 Web前端 6-9k', link: '/simulation/interview/2023-03-11-nanning-web' },
            { text: '2023-03-04 南宁 Vue前端 8-12k', link: '/simulation/interview/2023-03-06-nanning-vue' },
            { text: '2023-02-02 南宁 Vue前端 6-8k', link: '/simulation/interview/2023-02-02-nanning-vue' }
        ]
    },
    {
        text: '笔试题', items: [
            { text: '2023-02-09 南宁 Java开发 4-8k', link: '/simulation/written_examination/2023-02-09-nanning-java' }
        ]
    }
];

export default simulationItems;
