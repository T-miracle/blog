import { defineStore } from 'pinia';

export const controllerStore = defineStore('controller', {
    state: () => ({
        allowDrag: true,
        hideLeftSidebar: false,
        hideRightSidebar: false,
        hideLeftActionBar: false,
        hideRightActionBar: false,
        hideHeaderTopNav: false,
        hidePaths: false,
        hideCopyright: false
    }),
    persist: true
});
