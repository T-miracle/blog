import { DefaultTheme } from 'vitepress/types/default-theme';
import { bugIcon, elementIcon, htmlIcon, tsIcon, uniAppIcon, webIcon } from './icons';

const bugsSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: bugIcon + 'BUG处理',
        link: '/bugs/',
        items: []
    },
    {
        text: webIcon + '前端',
        collapsed: false,
        items: [

            {
                text: htmlIcon + 'HTML',
                collapsed: true,
                items: [
                    {
                        text: '🔹img 标签加载对象存储图片后再使用 canvas 调用当前图片，导致图片跨域的问题',
                        link: '/bugs/web/html/canvas-use-object-storage-image-cross-domain'
                    }
                ]
            },
            {
                text: tsIcon + 'TypeScript',
                collapsed: true,
                items: [
                    {
                        text: '🔹代码警告：TS2307: Cannot find module \'xxx\' or its corresponding type declarations.',
                        link: '/bugs/web/typescript/warning_ts2307'
                    }
                ]
            },
            {
                text: elementIcon + 'Element-UI & Element-Plus',
                collapsed: true,
                items: [
                    {
                        text: '🔹MessageBox报错Uncaught (in promise) cancel',
                        link: '/bugs/web/element-ui/messagebox_report_error_uncaught_(in_promise)_cancel'
                    },
                    {
                        text: '🔹Error: for nested data item, row-key is required.',
                        link: '/bugs/web/element-ui/table_tree_json_error'
                    },
                    {
                        text: '🔹头像组件第一次地址加载报错后，数据再次获取后无法重新加载',
                        link: '/bugs/web/element-ui/el-avatar_not_update_after_refetching_the_data'
                    },
                    {
                        text: '🔹el-form 自定义一个非输入选择的值的规则，但是无法生效的问题',
                        link: '/bugs/web/element-ui/el-form_customize_rule'
                    }
                ]
            },
            {
                text: uniAppIcon + 'uni-app',
                collapsed: true,
                items: [
                    {
                        text: '🔹新安装包覆盖安装，新增加的页面无法跳转',
                        link: '/bugs/web/uniapp/overwrite_install_newly_added_page_cannot_jump'
                    }
                ]
            }
        ]
    },
    {
        text: '待分类',
        items: []
    }
];

export default bugsSidebar;
