import { EnhanceAppContext } from 'vitepress';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
import App from './App.vue';
import { h } from 'vue';
import 'floating-vue/dist/style.css'

export default {
    Layout: () => h(App),
    enhanceApp(ctx: EnhanceAppContext) {
        const { app } = ctx;
        // 注册全局状态管理
        app.use(pinia);
    }
};
