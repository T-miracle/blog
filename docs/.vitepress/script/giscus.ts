import giscus from '@giscus/vue';
import { createApp, h } from 'vue';

// 添加评论容器
const setGiscus = () => {
    const dark: boolean = !!document.querySelector('html').className;
    // 删除原有评论容器
    let old = document.getElementById('giscus');
    if (old) {
        old.parentNode.removeChild(old);
    }
    // 获取父容器，并创建评论容器
    let docContent = document.getElementsByClassName('content-container')[0],
        bindGiscus = document.createElement('div');
    // 设置评论容器的属性及样式
    bindGiscus.setAttribute('id', 'giscus');
    bindGiscus.style.height = 'auto';
    bindGiscus.style.marginTop = '40px';
    bindGiscus.style.borderTop = '1px solid var(--vp-c-divider)';
    bindGiscus.style.paddingTop = '20px';
    // 芙蓉其尾部添加评论容器
    docContent.append(bindGiscus);
    // 使用vue动态创建评论组件并绑定到相应元素上
    createApp({
        render: () => {
            return h(
                giscus, {
                    id: 'comment',
                    host: 'https://giscus.app',
                    repo: 'T-miracle/blog',
                    repoId: 'R_kgDOJCf-FQ',
                    category: 'General',
                    categoryId: 'DIC_kwDOJCf-Fc4CUfVi',
                    mapping: 'pathname',
                    term: 'Welcome to giscus!',
                    reactionsEnabled: '1',
                    inputPosition: 'top',
                    theme: dark ? 'transparent_dark' : 'light',
                    lang: 'zh-CN',
                    loading: 'lazy'
                }
            );
        }
    }).mount('#giscus');
};

// 监听页面主题，更改评论容器的主题
const setWatch = () => {
    let element = document.querySelector('html');
    let observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type == 'attributes') {
                let comment: Element = document.getElementById('comment');
                comment?.setAttribute('theme', element.className.indexOf('dark') !== -1 ? 'transparent_dark' : 'light');
            }
        });
    });
    observer.observe(element, {
        attributeFilter: [ 'class' ]
    });
};

export { setGiscus, setWatch };
