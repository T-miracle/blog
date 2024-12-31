import { defineStore } from 'pinia';
import { DefaultTheme } from 'vitepress';
import { v4 } from 'uuid';
import { cloneDeep, toArray } from 'lodash-es';
import { getNodePathsByFindNode, setTreeAllParentNodesByFoundNode } from '../utils/tree';

export type SidebarItem = {
    id?: string
    text?: string
    link?: string
    collapsed?: boolean
    items?: SidebarItem[]
}

export const sidebarStore = defineStore('sidebar', {
    state: () => {
        return {
            sidebar: [] as SidebarItem[],
            currentId: '' as string
        };
    },
    getters: {},
    actions: {
        setSidebar(sidebar: DefaultTheme.SidebarItem[]) {
            this.currentId = '';
            const _sideabr: SidebarItem[] = toArray(cloneDeep(sidebar));
            // 递归目录树，添加id
            const addId = (items: SidebarItem[]): SidebarItem[] => {
                return items.map((item: DefaultTheme.SidebarItem) => {
                    const id = v4()?.toString();
                    return {
                        id,
                        text: item.text,
                        link: item.link,
                        collapsed: item.collapsed ?? true,
                        items: item.items ? addId(item.items) : []
                    };
                });
            };
            this.sidebar = addId(_sideabr);
        },
        positionSidebar(link: string) {
            if (!link) {
                return;
            }
            const _link = link.replace(/\.(html|md)$/, '');
            const node = setTreeAllParentNodesByFoundNode(
                this.sidebar,
                'items',
                (node: SidebarItem) => node.link === _link,
                (node: SidebarItem) => node.collapsed = false
            );
            this.currentId = node?.id ?? '';
        },
        getCurrentPaths() {
            return getNodePathsByFindNode(
                this.sidebar,
                'items',
                (node: SidebarItem) => node.id === this.currentId
            );
        }
    },
    persist: true
});
