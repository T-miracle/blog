import { defineStore } from 'pinia';

export const controllerStore = defineStore('controller', {
    state: () => ({
        onlyFullscreen: false,
        fullscreen: false,
        allowDrag: true,
        hideLeftSidebar: false,
        hideRightSidebar: false,
        hideLeftActionBar: false,
        showDirModal: false,
        hideRightActionBar: false,
        hideHeaderTopNav: false,
        hidePaths: false,
        hideCopyright: false
    }),
    persist: true
});
