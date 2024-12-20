import { DefineComponent, ShallowRef } from 'vue';

export const projectTypeArray = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Vue2',
    'Vue3',
    'React',
    'Rust',
    'APP',
    'Flutter',
    'Electron',
    'NodeJs',
    'UI',
    '框架',
    '构建工具',
    '桌面应用',
    '设计',
    '工具',
    'Markdown',
    'Solid',
    'SVG',
    'UML'
] as const;

type ProjectType = typeof projectTypeArray[number];

export type Project = {
    name: string;
    icon: string | ShallowRef<DefineComponent>;
    description: string;
    type: Array<ProjectType>;
    level: number;
    link: string | { name: string, url: string, github?: string }[];
    github?: string;
}
