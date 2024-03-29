import DefaultTheme from 'vitepress/theme';
import 'element-plus/dist/index.css';
import 'vitepress-plugin-back-to-top/dist/style.css';
import vitepressBackToTop from 'vitepress-plugin-back-to-top';
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
import { toRefs } from "vue";
import 'virtual:uno.css';

export default {
    ...DefaultTheme,
    enhanceApp(ctx: EnhanceAppContext) {
        DefaultTheme.enhanceApp(ctx);
        // 注册全局组件
        ctx.app.component('vSetup', vSetup);
        ctx.app.component('vPageTips', vPageTips);
        ctx.app.component('vDisplayList', vDisplayList);
        ctx.app.component('vScratchPaper', vScratchPaper);
        ctx.app.component('vImageViewer', vImageViewer);
        ctx.app.component('vModal', vModal);
        // 设置全局返回顶部按钮
        vitepressBackToTop({
            threshold: 300
        });
    },
    setup() {
        // 获取前言和路由
        const { frontmatter } = toRefs(useData());
        const route = useRoute();
        imageViewer(route);
        codeblocksFold({ route, frontmatter })
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
