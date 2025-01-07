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
    app.app.use(pinia);
};
