import { Ref } from 'vue';
import { PageData } from 'vitepress';

/**
 * 隐藏页脚
 * @param frontmatter 文章的前言
 */
const hideFooter = (frontmatter?: Ref<PageData['frontmatter']>) => {
    const frontmatterObj: { aside?: boolean, footer?: boolean } | undefined = frontmatter?.value;
    let flag = !!frontmatterObj
        && (
            (frontmatterObj.aside !== undefined && !frontmatterObj.aside)
            || (frontmatterObj.footer !== undefined && !frontmatterObj.footer)
        );
    const footer = document.getElementsByClassName('VPFooter')[0];
    flag ? footer.setAttribute('style', 'display: none') : footer.removeAttribute('style');
};

export default hideFooter;
