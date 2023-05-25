import {DefaultTheme} from 'vitepress/types/default-theme';

const uniappItems: DefaultTheme.SidebarItem[] = [
    {
        text: '🔹 使用 Android Studio 离线打包',
        link: '/learn/web/uniapp/packaging_offline_with_android_studio.md',
        collapsed: false,
        items: [
            {
                text: '🔹 uni-app 离线打包配置使用高德地图',
                link: '/learn/web/uniapp/offline_packaging_gaode_map_configuration.md'
            },
            {
                text: '🔹 uni-app 离线打包 APK 体积比云打包大的原因',
                link: '/learn/web/uniapp/the_reason_for_the_large_volume_of_offline_packaging.md'
            },
            {
                text: '🔹 解决离线打包的APK在H5页面中无法调用相机和相册',
                link: '/learn/web/uniapp/offline_packaging_h5_cant_use_camera_and_album.md'
            }
        ]
    }
]

export default uniappItems;
