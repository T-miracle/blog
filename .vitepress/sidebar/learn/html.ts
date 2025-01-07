import { type SidebarType } from '../../../package/type';

const htmlItems: SidebarType[] = [
    { icon: '🔸', text: 'HTML中DOCTYPE头的作用是什么？', link: '/learn/web/html/the_role_of_the_doctype_header_in_html' },
    { icon: '🔸', text: '谈谈你对meta标签的理解', link: '/learn/web/html/the_role_of_meta_tags_in_html' },
    { icon: '🔸', text: 'HTML5新增了哪些新特性？', link: '/learn/web/html/what_new_features_have_been_added_in_html_5' },
    { icon: '🔸', text: '语义化标签有哪些', link: '/learn/web/html/what_are_the_semantic_tags' },
    {
        icon: '🔥',
        text: 'cookie、localStorage、sessionStorage的区别',
        link: '/learn/web/html/the_difference_between_cookie_localstorage_and_sessionstorage',
        collapsed: false,
        items: [
            { icon: '🔥', text: '关于Cookie', link: '/learn/web/html/about_cookie' }
        ]
    }
];
export default htmlItems;
