import { Project } from '../type';
import { BLOG_ICONS } from '@/__constant__';

export default [
    {
        name: 'Flutter',
        icon: BLOG_ICONS + '/flutter.svg',
        description: 'Google 开发的移动应用 UI 框架，可以快速在 iOS 和 Android 上构建高质量的原生用户界面',
        type: [ 'APP', 'Flutter', '框架' ],
        level: 72,
        link: 'https://flutter.dev/',
        github: 'https://github.com/flutter/flutter'
    }
] as Project[];
