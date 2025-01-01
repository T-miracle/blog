import 'element-plus/dist/index.css';
import vSetup from '../components/vSetup.vue';
import vPageTips from '../components/vPageTips.vue';
import vDisplayList from '../components/vDisplayList.vue';
import vScratchPaper from '../components/vScratchPaper.vue';
import { EnhanceAppContext, useData, useRoute } from 'vitepress';
import googleAnalysis from './scripts/googleAnalysis';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import imageViewer from 'vitepress-plugin-image-viewer';
import vModal from '../components/vModal.vue';
import 'viewerjs/dist/viewer.min.css';
// import './styles/index.scss';
import 'virtual:uno.css';
import '../../package/App.scss';
import { theme, install } from '../../package/App';

export default {
    Layout: theme,
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
        const { frontmatter } = useData();
        const route = useRoute();
        imageViewer(route, '.vp-doc', { toolbar: true });
        giscusTalk({
            repo: 'T-miracle/blog',
            repoId: 'R_kgDOJCf-FQ',
            categoryId: 'DIC_kwDOJCf-Fc4CUohc',
            mapping: 'pathname'
        }, {
            frontmatter, route
        });
        googleAnalysis();
    }
};
