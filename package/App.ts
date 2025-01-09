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

export const theme = App;

export const install = (app: EnhanceAppContext) => {
    DefaultTheme.enhanceApp(app);
    const { app: appInstance } = app;
    appInstance.use(pinia);
    appInstance.config.globalProperties.$go = function goPage(url: string, target: '_self' | '_blank' = '_self') {
        if (url) {
            if (target === '_blank') {
                window.open(url);
            } else {
                app.router.go(url);
            }
        }
    };
};

declare module 'vue' {
    interface ComponentCustomProperties {
        $go: (url: string, target?: '_self' | '_blank') => void;
    }
}
