import { defineStore } from 'pinia';
import { v4 } from 'uuid';
import { cloneDeep, toArray } from 'lodash-es';
import { getNodePathsByFindNode, setTreeAllParentNodesByFoundNode } from '../utils/tree';
import { type SidebarType } from '../type';

export const no = `<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M497.664 337.92c-112.64 0-204.8 92.16-204.8 204.8s92.16 204.8 204.8 204.8 204.8-92.16 204.8-204.8-92.16-204.8-204.8-204.8z m0 262.144c-30.72 0-55.296-24.576-55.296-55.296 0-30.72 24.576-55.296 55.296-55.296 30.72 0 55.296 24.576 55.296 55.296 0 30.72-24.576 55.296-55.296 55.296z"/></svg>`;

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
                        icon: item.icon ?? no,
                        text: item.text,
                        link: item.link,
                        collapsed: item.collapsed ?? true,
                        disabled: item.disabled ?? false,
                        readonly: item.readonly ?? false,
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
