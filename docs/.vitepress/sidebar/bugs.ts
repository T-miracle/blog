import {DefaultTheme} from 'vitepress/types/default-theme';
import {bugIcon, elementIcon, tsIcon, uniAppIcon, webIcon} from './icons';

const bugsSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: bugIcon + 'BUG处理',
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
                    {
                        text: '🔹 代码警告：TS2307: Cannot find module \'xxx\' or its corresponding type declarations.',
                        link: '/bugs/web/typescript/warning_ts2307'
                    },
                ]
            },
            {
                text: elementIcon + 'Element-UI & Element-Plus',
                collapsed: true,
                items: [
                    {
                        text: '🔹 MessageBox报错Uncaught (in promise) cancel',
                        link: '/bugs/web/element-ui/messagebox_report_error_uncaught_(in_promise)_cancel'
                    },
                    {
                        text: '🔹 Error: for nested data item, row-key is required.',
                        link: '/bugs/web/element-ui/table_tree_json_error'
                    },
                    {
                        text: '🔹 头像组件第一次地址加载报错后，数据再次获取后无法重新加载',
                        link: '/bugs/web/element-ui/el-avatar_not_update_after_refetching_the_data'
                    },
                ]
            },
            {
                text: uniAppIcon + 'uni-app',
                collapsed: true,
                items: [
                    {
                        text: '🔹 新安装包覆盖安装，新增加的页面无法跳转',
                        link: '/bugs/web/uniapp/overwrite_install_newly_added_page_cannot_jump.md'
                    },
                ]
            },
        ]
    },
    {
        text: '待分类',
        items: []
    }
];

export default bugsSidebar;
