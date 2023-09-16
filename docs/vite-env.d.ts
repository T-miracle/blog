/// <reference types="vite/client" />

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module 'markdown-it';
declare module 'markdown-it-mathjax3';
declare module 'markdown-it-task-lists';
