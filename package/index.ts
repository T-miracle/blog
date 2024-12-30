import DefaultTheme from 'vitepress/theme';
import './theme/defalut.scss';
import { EnhanceAppContext } from 'vitepress';
import App from './App.vue';
import { h } from 'vue';
import 'floating-vue/dist/style.css';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export const theme = () => h(App);

export const install = async (app: EnhanceAppContext) => {
    app.app.use(pinia);
    DefaultTheme.enhanceApp(app);
};
