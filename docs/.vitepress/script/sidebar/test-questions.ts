import { DefaultTheme } from 'vitepress/types/default-theme';
import { jsIcon, questionBankIcon, webIcon } from './icons';

const testQuestionsSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: questionBankIcon + '测试题库',
        link: '/test-questions/'
    },
    {
        text: webIcon + '前端',
        collapsed: false,
        items: [
            {
                text: jsIcon + 'JavaScript',
                collapsed: true,
                items: [
                    { text: '事件循环-测试题1', link: '/test-questions/web/javascript/event_loop_test_demo_1' },
                    { text: '事件循环-测试题2', link: '/test-questions/web/javascript/event_loop_test_demo_2' },
                ]
            }
        ]
    }
]

export default testQuestionsSidebar;
