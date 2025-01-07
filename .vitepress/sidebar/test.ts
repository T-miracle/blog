import { jsIcon, questionBankIcon, webIcon } from './icons';
import { type SidebarType } from '../../package/type';

const testSidebar: SidebarType[] = [
    {
        icon: questionBankIcon,
        text: '测试题库',
        link: '/test/',
        items: []
    },
    {
        icon: webIcon,
        text: '前端',
        collapsed: false,
        items: [
            {
                icon: jsIcon,
                text: 'JavaScript',
                collapsed: true,
                items: [
                    { text: '事件循环-测试题1', link: '/test/web/javascript/event_loop_test_demo_1' },
                    { text: '事件循环-测试题2', link: '/test/web/javascript/event_loop_test_demo_2' }
                ]
            }
        ]
    }
];

export default testSidebar;
