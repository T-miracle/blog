import DefaultTheme from 'vitepress/theme';
import './index.scss';
import { useRoute } from 'vitepress';
import { nextTick, onMounted, watch } from 'vue';
import 'element-plus/dist/index.css'
import 'vitepress-plugin-back-to-top/dist/style.css';
import vitepressBackToTop from 'vitepress-plugin-back-to-top';
import setViewer from '../script/viewer';
import { setGiscus, setWatch } from '../script/giscus';
import vSetup from '../components/vSetup.vue';
import vPageTips from '../components/vPageTips.vue';

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // 注册全局组件
        ctx.app.component('vSetup', vSetup);
        ctx.app.component('vPageTips', vPageTips);
        // 设置全局返回顶部按钮
        vitepressBackToTop({
            threshold: 300
        });
    },
    setup() {
        const route = useRoute();
        onMounted(() => {
            setViewer(); // 图片预览
            setGiscus(); // 评论容器
            setWatch(); // 主题监听，用于改变评论容器主题
        });
        watch(() => route.path, () => nextTick(() => {
            setViewer(); // 图片预览
            setGiscus(); // 评论容器
        }));
    }
};
