import { defineConfig } from 'vitepress';
import taskLists from 'markdown-it-task-lists';
import mathjax3 from 'markdown-it-mathjax3';
import UnoCSS from 'unocss/vite';
import path from 'path';
import themeConfig from './themeConfig';

const customElements: string[] = [ 'mjx-container' ];

export default defineConfig({
    cacheDir: './cache',
    srcDir: './src',
    outDir: './dist',
    lang: 'zh-cn',
    title: 'Hi! Tmiracle',
    description: '编程导航，国外技术文档翻译，编程知识记录',
    titleTemplate: ':title | Hi! Tmiracle',
    // 左上角标题的图标
    head: [
        [ 'link', { rel: 'icon', href: '/logo.png' } ]
    ],
    vite: {
        resolve: {
            alias: {
                '@': path.join(__dirname, '../src/'),
                '@NanoUI': path.join(__dirname, '../package/components/'),
                '@NanoIcon': path.join(__dirname, '../package/icon/'),
                '@store': path.join(__dirname, '../package/store/'),
                '@HWY': 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images'
            }
        },
        plugins: [
            // @ts-expect-error css plugin
            UnoCSS()
        ]
    },
    sitemap: {
        hostname: 'https://blog.namichong.com'
    },
    // 开启黑暗主题按钮
    appearance: false,
    // URL清除.html后缀
    cleanUrls: false,
    // markdown 配置
    markdown: {
        // 代码块显示行数
        // lineNumbers: true,
        // theme: 'monokai',
        // lineNumbers: true,
        theme: {
            light: 'github-light',
            dark: 'github-dark'
        },
        config: (md) => {
            md.use(mathjax3);
            md.use(taskLists);
            const orig = md.renderer.rules.link_open!;
            md.renderer.rules.link_open = (tokens, idx, ...args) => {
                const token = tokens[idx];
                const href = token.attrGet('href')!;
                if (!/:\/\//.test(href) && !/(?:\.html|\/)$/.test(href)) {
                    token.attrSet('href', href.replace(/(?:\.md)?$/, '.html'));
                }
                return orig(tokens, idx, ...args);
            };
        }
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.indexOf(tag) > 0
            }
        }
    },
    lastUpdated: true,
    // 主题配置
    themeConfig
});
