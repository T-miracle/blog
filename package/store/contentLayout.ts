import { defineStore } from 'pinia';
import { merge } from 'lodash-es';
import { controllerStore } from '@store/controller';

export type LayoutBaseInfo = {
    top?: string;
    left?: string;
    width?: string;
    height?: string;
} | undefined;

export const contentLayoutStore = defineStore('contentLayout', {
    state: () => ({
        container: {
            default: {
                top: '5vh',
                left: '5vw',
                width: '90vw',
                height: '90vh'
            } as LayoutBaseInfo,
            changed: undefined as LayoutBaseInfo
        },
        leftSidebar: {
            default: {
                width: '20%',
                height: undefined
            } as LayoutBaseInfo,
            changed: undefined as LayoutBaseInfo
        },
        rightSidebar: {
            default: {
                width: '20%',
                height: undefined
            } as LayoutBaseInfo,
            changed: undefined as LayoutBaseInfo
        }
    }),
    getters: {
        containerLayout: (state) => {
            const ctl = controllerStore();
            return !ctl.onlyFullscreen && !ctl.fullscreen ?
                merge({}, state.container.default, state.container.changed) :
                {
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh'
                };
        },
        leftSidebarLayout: (state) => {
            return merge({}, state.leftSidebar.default, state.leftSidebar.changed);
        },
        rightSidebarLayout: (state) => {
            return merge({}, state.rightSidebar.default, state.rightSidebar.changed);
        }
    },
    actions: {
        setContainerLayout(layoutBaseInfo: LayoutBaseInfo) {
            this.container.changed = merge({}, this.container.changed, layoutBaseInfo);
        },
        setLeftSidebarLayout(layoutBaseInfo: LayoutBaseInfo) {
            this.leftSidebar.changed = merge({}, this.leftSidebar.changed, layoutBaseInfo);
        },
        setRightSidebarLayout(layoutBaseInfo: LayoutBaseInfo) {
            this.rightSidebar.changed = merge({}, this.rightSidebar.changed, layoutBaseInfo);
        }
    },
    persist: true
});

export function getWidthFromString(value: string): number {
    if (value.endsWith('%')) {
        const percentage = parseFloat(value);
        return (document.documentElement.clientWidth * percentage) / 100;
    } else if (value.endsWith('vw')) {
        const vw = parseFloat(value);
        return (document.documentElement.clientWidth * vw) / 100;
    }
    return 0;
}
