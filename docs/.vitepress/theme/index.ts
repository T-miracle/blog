import DefaultTheme from 'vitepress/theme';
import './index.scss';
import { useRoute } from 'vitepress';
import { nextTick, onMounted, watch } from 'vue';
import 'element-plus/dist/index.css'
import 'vitepress-plugin-back-to-top/dist/style.css';
import vitepressBackToTop from 'vitepress-plugin-back-to-top';
import setViewer from '../script/viewer';
import { setGiscus, setThemeWatch } from '../script/giscus';
import vSetup from '../components/vSetup.vue';
import vPageTips from '../components/vPageTips.vue';
import vDisplayList from '../components/vDisplayList.vue';
import vScratchPaper from '../components/vScratchPaper.vue';
import vImageViewer from '../components/vImageViewer.vue';
import {ElTabs, ElTabPane} from 'element-plus'
import hideFooter from '../script/hideFooter';
import { useData } from 'vitepress';

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
        ctx.app.component('ElTabs', ElTabs);
        ctx.app.component('ElTabPane', ElTabPane);
        // 设置全局返回顶部按钮
        vitepressBackToTop({
            threshold: 300
        });
    },
    setup() {
        const route = useRoute();
        const { frontmatter } = useData()
        onMounted(() => {
            setViewer(); // 图片预览
            setGiscus(frontmatter); // 评论容器
            setThemeWatch(); // 主题监听，用于改变评论容器主题
            hideFooter(frontmatter); // 非首页隐藏页脚
        });
        watch(() => route.path, () => nextTick(() => {
            setViewer(); // 图片预览
            setGiscus(frontmatter); // 评论容器
            hideFooter(frontmatter); // 非首页隐藏页脚
        }));
    }
};
