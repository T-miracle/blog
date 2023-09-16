/// <reference types="vite/client" />
declare module 'markdown-it';
declare module 'markdown-it-mathjax3';
declare module 'markdown-it-task-lists';

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
