import {DefaultTheme} from 'vitepress/types/default-theme';

const uniapp: DefaultTheme.SidebarItem[] = [
    {
        text: '🔹 使用 Android Studio 离线打包',
        link: '/learn/web/uniapp/packaging_offline_with_android_studio.md',
        collapsed: false,
        items: [
            {
                text: '🔹 uni-app 离线打包配置使用高德地图',
                link: '/learn/web/uniapp/offline_packaging_gaode_map_configuration.md'
            }
        ]
    },
]

export default uniapp;
