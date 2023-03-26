import { DefaultTheme } from 'vitepress/types/default-theme';

const htmlItems: DefaultTheme.SidebarItem[] = [
    { text: '🔸 HTML中DOCTYPE头的作用是什么？', link: '/learn/web/html/the_role_of_the_doctype_header_in_html' },
    { text: '🔸 谈谈你对meta标签的理解', link: '/learn/web/html/the_role_of_meta_tags_in_html' },
    { text: '🔸HTML5新增了哪些新特性？', link: '/learn/web/html/what_new_features_have_been_added_in_html_5' },
    { text: '🔸语义化标签有哪些', link: '/learn/web/html/what_are_the_semantic_tags' },
    {
        text: '🚩 cookie、localStorage、sessionStorage的区别',
        link: '/learn/web/html/the_difference_between_cookie_localstorage_and_sessionstorage',
        collapsed: false,
        items: [
            {text: '🚩 关于Cookie', link: '/learn/web/html/about_cookie.md'}
        ]
    },
];
export default htmlItems;
