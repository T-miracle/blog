import { DefaultTheme } from 'vitepress/types/default-theme';
import { elementIcon, webIcon } from './icons';

const bugsSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: 'BUG处理',
        link: '/bugs/'
    },
    {
        text: webIcon + '前端',
        collapsed: false,
        items: [
            {
                text: elementIcon + 'Element-UI & Element-Plus',
                collapsed: true,
                items: [
                    {
                        text: 'MessageBox报错Uncaught (in promise) cancel',
                        link: '/bugs/web/element-ui/messagebox_report_error_uncaught_(in_promise)_cancel'
                    }
                ]
            }
        ]
    }
]

export default bugsSidebar;
