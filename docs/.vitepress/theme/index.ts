import DefaultTheme from 'vitepress/theme';
import './index.scss';
import { useRoute } from 'vitepress';
import { nextTick, onMounted, watch } from 'vue';
import 'vitepress-plugin-back-to-top/dist/style.css';
import vitepressBackToTop from 'vitepress-plugin-back-to-top';
import viewer from '../script/viewer';
import setGiscus from '../script/giscus';
import vSetup from '../components/vSetup.vue';
import vPageTips from '../components/vPageTips.vue';

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        ctx.app.component('vSetup', vSetup);
        ctx.app.component('vPageTips', vPageTips);
        vitepressBackToTop({
            // default
            threshold: 300
        });
    },
    setup() {
        const route = useRoute();
        onMounted(() => {
            viewer();
            setGiscus();
        });
        watch(() => route.path, () => nextTick(() => {
            viewer();
            setGiscus();
        }));
    }
};
