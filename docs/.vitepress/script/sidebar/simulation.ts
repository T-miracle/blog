import { DefaultTheme } from 'vitepress/types/default-theme';
import { jobIcon } from '../icons';

const simulationItems: DefaultTheme.SidebarItem[] = [
    {
        text: jobIcon + '页面说明',
        link: '/interview_and_written_examination/'
    },
    {
        text: '面试题',
        items: [
            { text: '2023-03-04 南宁 Vue前端 8-12k', link: '/interview_and_written_examination/interview/2023-03-06-nanning-vue.md' },
            { text: '2023-02-02 南宁 Vue前端 6-8k', link: '/interview_and_written_examination/interview/2023-02-02-nanning-vue.md' },
        ]
    },
    {
        text: '笔试题', items: [
            { text: '2023-02-09 南宁 Java开发 4-8k', link: '/interview_and_written_examination/written_examination/2023-02-09-nanning-java.md' }
        ]
    }
];

export default simulationItems;
