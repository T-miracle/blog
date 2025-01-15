import DefaultTheme from 'vitepress/theme';
import './App.scss';
import { EnhanceAppContext } from 'vitepress';
import App from './App.vue';
import 'floating-vue/dist/style.css';
import './iconfont/iconfont.css';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const install = (ctx: EnhanceAppContext) => {
    DefaultTheme.enhanceApp(ctx);
    const { app, router } = ctx;
    app.use(pinia);
    app.config.globalProperties.$go = function goPage(url: string, target: '_self' | '_blank' = '_self') {
        if (url) {
            if (target === '_blank') {
                window.open(url);
            } else {
                router.go(url);
            }
        }
    };
};

export { App, install };

declare module 'vue' {
    interface ComponentCustomProperties {
        $go: (url: string, target?: '_self' | '_blank') => void;
    }
}
