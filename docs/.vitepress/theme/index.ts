import DefaultTheme from 'vitepress/theme';
import './index.scss';
import { useRoute } from 'vitepress';
import { nextTick, onMounted, watch } from 'vue';
import viewer from '../script/viewer';
import vSetup from '../components/vSetup.vue'
import vPageTips from '../components/vPageTips.vue'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        ctx.app.component('vSetup', vSetup)
        ctx.app.component('vPageTips', vPageTips)
    },
    setup() {
        const route = useRoute();
        onMounted(() => {
            viewer();
        });
        watch(() => route.path, () => nextTick(() => {
            viewer();
        }));
    }
};
