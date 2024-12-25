import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import 'element-plus/dist/index.css';
import vSetup from '../components/vSetup.vue';
import vPageTips from '../components/vPageTips.vue';
import vDisplayList from '../components/vDisplayList.vue';
import vScratchPaper from '../components/vScratchPaper.vue';
import hideFooter from '../plugins/hideFooter/hideFooter';
import { EnhanceAppContext, useData, useRoute } from 'vitepress';
import googleAnalysis from './scripts/googleAnalysis';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import imageViewer from 'vitepress-plugin-image-viewer';
import vModal from '../components/vModal.vue';
import 'viewerjs/dist/viewer.min.css';
import 'vitepress-plugin-codeblocks-fold/style/index.scss';
import codeblocksFold from 'vitepress-plugin-codeblocks-fold';
import './styles/index.scss';
import 'virtual:uno.css';
import App from './App.vue';

export default {
    Layout: () => h(App),
    enhanceApp(ctx: EnhanceAppContext) {
        DefaultTheme.enhanceApp(ctx);
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
        codeblocksFold();
        hideFooter(frontmatter);
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
