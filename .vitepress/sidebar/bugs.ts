import {
    androidStudioIcon,
    bugIcon,
    editorIcon,
    elementIcon,
    htmlIcon,
    tsIcon,
    uniAppIcon,
    webIcon
} from './icons';
import { type SidebarType } from '../../package/type';
import androidStudioItems from './learn/android-studio';

const bugsSidebar: SidebarType[] = [
    {
        icon: bugIcon,
        text: '问题处理',
        link: '/bugs/',
        items: []
    },
    {
        icon: webIcon,
        text: '前端',
        collapsed: true,
        items: [
            {
                icon: htmlIcon,
                text: 'HTML',
                collapsed: true,
                items: [
                    {
                        icon: '🔹',
                        text: 'img 标签加载对象存储图片后再使用 canvas 调用当前图片，导致图片跨域的问题',
                        link: '/bugs/web/html/canvas-use-object-storage-image-cross-domain'
                    }
                ]
            },
            {
                icon: tsIcon,
                text: 'TypeScript',
                collapsed: true,
                items: [
                    {
                        icon: '🔹',
                        text: '代码警告：TS2307: Cannot find module \'xxx\' or its corresponding type declarations.',
                        link: '/bugs/web/typescript/warning_ts2307'
                    }
                ]
            },
            {
                icon: elementIcon,
                text: 'Element-UI & Element-Plus',
                collapsed: true,
                items: [
                    {
                        icon: '🔹',
                        text: 'MessageBox报错Uncaught (in promise) cancel',
                        link: '/bugs/web/element-ui/messagebox_report_error_uncaught_(in_promise)_cancel'
                    },
                    {
                        icon: '🔹',
                        text: 'Error: for nested data item, row-key is required.',
                        link: '/bugs/web/element-ui/table_tree_json_error'
                    },
                    {
                        icon: '🔹',
                        text: '头像组件第一次地址加载报错后，数据再次获取后无法重新加载',
                        link: '/bugs/web/element-ui/el-avatar_not_update_after_refetching_the_data'
                    },
                    {
                        icon: '🔹',
                        text: 'el-form 自定义一个非输入选择的值的规则，但是无法生效的问题',
                        link: '/bugs/web/element-ui/el-form_customize_rule'
                    }
                ]
            },
            {
                icon: uniAppIcon,
                text: 'uni-app',
                collapsed: true,
                items: [
                    {
                        icon: '🔹',
                        text: '新安装包覆盖安装，新增加的页面无法跳转',
                        link: '/bugs/web/uniapp/overwrite_install_newly_added_page_cannot_jump'
                    }
                ]
            }
        ]
    },
    {
        icon: editorIcon,
        text: '编辑器',
        collapsed: true,
        items: [
            {
                icon: androidStudioIcon,
                text: 'Android Studio',
                collapsed: true,
                items: androidStudioItems
            }
        ]
    }
];

export default bugsSidebar;
