import { DefaultTheme } from 'vitepress/types/default-theme';
import type { GiscusProps } from '@giscus/vue/dist/types';

export type SidebarType = DefaultTheme.SidebarItem & { id?: string, icon?: string, items?: SidebarType[] };

export type ThemeConfig = DefaultTheme.Config & {
    name: string;
    motto: string;
    backgrounds?: string[];
    aboutMePath: string;
    giscus?: GiscusProps;
}
