import { defineStore } from 'pinia';

export const controllerStore = defineStore('controller', {
    state: () => ({
        allowDrag: true,
        articleFullscreen: false,
        hideLeftSidebar: false,
        hideRightSidebar: false,
        hideActionBar: false,
        hideHeaderTopNav: false,
        hidePaths: false,
        hideCopyright: false
    }),
    persist: true
});
