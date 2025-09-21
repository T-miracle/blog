import {
    androidStudioIcon,
    bugIcon,
    editorIcon,
    webIcon
} from './icons';
import { type SidebarType } from '../../package/type';
import androidStudioItems from './bugs/android-studio';
import windowsItems from './bugs/windows';
import web from './bugs/web';

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
        collapsed: false,
        items: web
    },
    {
        icon: editorIcon,
        text: '编辑器',
        collapsed: false,
        items: [
            {
                icon: androidStudioIcon,
                text: 'Android Studio',
                collapsed: true,
                items: androidStudioItems
            }
        ]
    },
    {
        text: '其他',
        collapsed: true,
        items: [
            {
                text: 'Windows',
                collapsed: true,
                items: windowsItems
            }
        ]
    }
];

export default bugsSidebar;
