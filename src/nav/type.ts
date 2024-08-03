import { DefineComponent } from 'vue';

export type Classify = 'all' | 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'others';

export type NavItem = {
    title: string;
    children: project[];
}

export type project = {
    name: string;
    icon: string | DefineComponent<{}, {}, any>;
    description: string;
    link: string;
    github?: string;
}

export type Nav = {
    name: string;
    icon: string | DefineComponent<{}, {}, any>;
    description: string;
    classify: Classify;
    children: NavItem[];
}
