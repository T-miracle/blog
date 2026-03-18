import { Project } from '../type';
import { BLOG_ICONS } from '@/__constant__';

export default [
    {
        name: '微信小程序',
        icon: BLOG_ICONS + '/mp-weixin-qq.svg',
        description: '微信小程序是一种新的开放能力，开发者可以快速地在微信中开发具有原生 APP 体验的服务。',
        type: [ '框架' ],
        level: 60,
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
    }
] as Project[];
