import 'element-plus/dist/index.css';
import vSetup from '../components/vSetup.vue';
import vPageTips from '../components/vPageTips.vue';
import vDisplayList from '../components/vDisplayList.vue';
import vScratchPaper from '../components/vScratchPaper.vue';
import { EnhanceAppContext, useRoute } from 'vitepress';
import googleAnalysis from './scripts/googleAnalysis';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import imageViewer from 'vitepress-plugin-image-viewer';
import vModal from '../components/vModal.vue';
import 'viewerjs/dist/viewer.min.css';
import 'virtual:uno.css';
import '../../package/App.scss';
import { App, install } from '../../package/App';
import { h } from 'vue';
import artalkComment from '../components/artalkComment/index.vue';

export default {
    Layout: () => h(App, {}, {
        'content-footer': () => h(artalkComment)
    }),
    // ...DefaultTheme,
    enhanceApp(ctx: EnhanceAppContext) {
        install(ctx);
        // 注册全局组件
        ctx.app.component('vSetup', vSetup);
        ctx.app.component('vPageTips', vPageTips);
        ctx.app.component('vDisplayList', vDisplayList);
        ctx.app.component('vScratchPaper', vScratchPaper);
        ctx.app.component('vImageViewer', vImageViewer);
        ctx.app.component('vModal', vModal);
    },
    setup() {
        // 获取前言和路由
        const route = useRoute();
        imageViewer(route, '.vp-doc', { toolbar: true });
        googleAnalysis();
    }
};
