import DefaultTheme from 'vitepress/theme';
import 'element-plus/dist/index.css';
import 'vitepress-plugin-back-to-top/dist/style.css';
import vitepressBackToTop from 'vitepress-plugin-back-to-top';
import vSetup from '../components/vSetup.vue';
import vPageTips from '../components/vPageTips.vue';
import vDisplayList from '../components/vDisplayList.vue';
import vScratchPaper from '../components/vScratchPaper.vue';
import hideFooter from '../plugins/hideFooter/hideFooter';
import { useData, useRoute } from 'vitepress';
import googleAnalysis from './scripts/googleAnalysis';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import imageViewer from 'vitepress-plugin-image-viewer';
import vModal from '../components/vModal.vue';
// 自定义样式，放最后，加深权重
import './styles/index.scss';

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
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
        googleAnalysis(); // 谷歌分析
        // 获取前言和路由
        const { frontmatter } = useData();
        const route = useRoute();
        imageViewer(route); // 图片预览
        hideFooter(frontmatter); // 隐藏页脚
        // 评论组件
        giscusTalk({
            repo: 'T-miracle/blog',
            repoId: 'R_kgDOJCf-FQ',
            categoryId: 'DIC_kwDOJCf-Fc4CUohc',
            mapping: 'pathname'
        }, {
            frontmatter, route
        });
    }
};
