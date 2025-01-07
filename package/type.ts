import { DefaultTheme } from 'vitepress/types/default-theme';

export type SidebarType = DefaultTheme.SidebarItem & { id?: string, icon?: string, items?: SidebarType[] };

export type ThemeConfig = DefaultTheme.Config & {
    name: string;
    motto: string;
    backgrounds?: string[];
    aboutMePath: string;
}
