import { DefaultTheme } from 'vitepress/types/default-theme';
import { elementIcon, tsIcon, webIcon } from './icons';

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
                text: tsIcon + 'TypeScript',
                collapsed: true,
                items: [
                    { text: '代码警告：TS2307: Cannot find module \'xxx\' or its corresponding type declarations.', link: '/bugs/web/typescript/warning_ts2307' }
                ]
            },
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
];

export default bugsSidebar;
