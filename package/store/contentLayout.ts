import { defineStore } from 'pinia';
import { merge } from 'lodash-es';

export type LayoutBaseInfo = {
    top?: string | number;
    left?: string | number;
    width?: string;
    height?: string;
};

export const contentLayoutStore = defineStore('contentLayout', {
    state: () => ({
        container: {
            default: {
                top: '5vh',
                left: '5vw',
                width: '90vw',
                height: '90vh'
            } as LayoutBaseInfo,
            changed: undefined as LayoutBaseInfo | undefined
        },
        leftSidebar: {
            default: {
                width: '20%',
                height: undefined
            } as LayoutBaseInfo,
            changed: undefined as LayoutBaseInfo | undefined
        },
        rightSidebar: {
            default: {
                width: '20%',
                height: undefined
            } as LayoutBaseInfo,
            changed: undefined as LayoutBaseInfo | undefined
        }
    }),
    getters: {
        containerLayout: (state): LayoutBaseInfo => {
            return merge({}, state.container.default, state.container.changed);
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

/**
 * Get the width of the element from the string value.
 * @param {string} value - The value of the width.
 * @returns {number} The width of the element.
 */
export function getWidthFromString(value?: string): number {
    if (!value) {
        return 0;
    }
    if (value.endsWith('%')) {
        const percentage = parseFloat(value);
        return (document.documentElement.clientWidth * percentage) / 100;
    } else if (value.endsWith('vw')) {
        const vw = parseFloat(value);
        return (document.documentElement.clientWidth * vw) / 100;
    } else if (value.endsWith('px')) {
        return parseFloat(value);
    } else {
        return 0;
    }
}

/**
 * Get the height of the element from the string value.
 * @param {string} value - The value of the height.
 * @returns {number} The height of the element.
 */
export function getHeightFromString(value?: string): number {
    if (!value) {
        return 0;
    }
    if (value.endsWith('%')) {
        const percentage = parseFloat(value);
        return (document.documentElement.clientHeight * percentage) / 100;
    } else if (value.endsWith('vh')) {
        const vh = parseFloat(value);
        return (document.documentElement.clientHeight * vh) / 100;
    } else if (value.endsWith('px')) {
        return parseFloat(value);
    } else {
        return 0;
    }
}
