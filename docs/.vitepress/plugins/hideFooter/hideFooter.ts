import { nextTick, onMounted, Ref, watch } from 'vue';
import { PageData, useRoute } from 'vitepress';

/**
 * 隐藏页脚
 * @param frontmatter 文章的前言
 */
const setHideFooter = (frontmatter: Ref<PageData['frontmatter']>) => {
    const frontmatterObj: { aside?: boolean, footer?: boolean } | undefined = frontmatter?.value;
    let flag = !!frontmatterObj
        && (
            (frontmatterObj.aside !== undefined && !frontmatterObj.aside)
            || (frontmatterObj.footer !== undefined && !frontmatterObj.footer)
        );
    const footer = document.getElementsByClassName('VPFooter')[0];
    flag ? footer.setAttribute('style', 'display: none') : footer.removeAttribute('style');
};

const hideFooter = (frontmatter: Ref<PageData['frontmatter']>) => {
    const route = useRoute();
    onMounted(() => {
        setHideFooter(frontmatter); // 非首页隐藏页脚
    });
    watch(() => route.path, () => nextTick(() => {
        setHideFooter(frontmatter); // 非首页隐藏页脚
    }));
};

export default hideFooter;
