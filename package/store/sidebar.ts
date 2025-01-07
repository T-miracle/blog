import { defineStore } from 'pinia';
import { v4 } from 'uuid';
import { cloneDeep, toArray } from 'lodash-es';
import { getNodePathsByFindNode, setTreeAllParentNodesByFoundNode } from '../utils/tree';
import { type SidebarType } from '../type';

export const sidebarStore = defineStore('sidebar', {
    state: () => {
        return {
            sidebar: [] as SidebarType[],
            currentId: '' as string
        };
    },
    getters: {},
    actions: {
        setSidebar(sidebar: SidebarType[]) {
            this.currentId = '';
            const _sidebar: SidebarType[] = toArray(cloneDeep(sidebar));
            // 递归目录树，添加id
            const addId = (items: SidebarType[]): SidebarType[] => {
                return items.map((item: SidebarType) => {
                    const id = v4()?.toString();
                    return {
                        id,
                        icon: item.icon,
                        text: item.text,
                        link: item.link,
                        collapsed: item.collapsed ?? true,
                        items: item.items ? addId(item.items) : []
                    };
                });
            };
            this.sidebar = addId(_sidebar);
        },
        positionSidebar(link: string) {
            if (!link) {
                return;
            }
            const _link = link.replace(/\.(html|md)$/, '');
            const node = setTreeAllParentNodesByFoundNode(
                this.sidebar,
                'items',
                (node: SidebarType) => node.link === _link,
                (node: SidebarType) => node.collapsed = false
            );
            this.currentId = node?.id ?? '';
        },
        getCurrentPaths() {
            return getNodePathsByFindNode(
                this.sidebar,
                'items',
                (node: SidebarType) => node.id === this.currentId
            );
        }
    },
    persist: true
});
