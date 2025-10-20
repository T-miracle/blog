import { type SidebarType } from '../../../package/type';

const jsItems: SidebarType[] = [
    {
        icon: '🔥',
        text: 'JavaScript中有哪些数据类型？',
        link: '/learn/web/javascript/type_of_data',
        collapsed: false,
        items: [
            {
                icon: '⭐',
                text: '引用类型之间有什么区别',
                link: '/learn/web/javascript/what_is_the_difference_between_reference_types'
            }
        ]
    },
    { icon: '🔸', text: '数组的常用遍历函数', link: '/learn/web/javascript/common_traverse_functions_for_array' },
    { icon: '🔸', text: '对象数据如何获取第一个属性的值？', link: '/learn/web/javascript/object_get_first_value' },
    {
        icon: '🔥',
        text: '深拷贝和浅拷贝的区别',
        link: '/learn/web/javascript/the_difference_between_deep_copy_and_shallow_copy'
    },
    { icon: '🔥', text: '什么是闭包？', link: '/learn/web/javascript/what_is_closure' },
    // { icon: '🔥', text: '谈谈原型与原型链', link: '/learn/web/javascript/prototype_and_prototype_chains' },
    { icon: '🔥', text: 'var、let、const 的区别', link: '/learn/web/javascript/the_difference_between_var_let_and_const' },
    {
        icon: '🔥',
        text: '什么是Ajax？如何实现一个简单的Ajax？',
        link: '/learn/web/javascript/what_is_ajax_and_how_do_you_implement_one'
    },
    { icon: '⭐', text: '什么是事件委托？它有什么用？', link: '/learn/web/javascript/what_is_event_delegation' },
    { icon: '🔥', text: '谈谈事件循环 / 轮询（Event-Loop）', link: '/learn/web/javascript/what_is_event_loop' },
    { icon: '🔥', text: '谈谈宏任务与微任务', link: '/learn/web/javascript/what_is_macroTask_and_microTask' },
    { icon: '⭐', text: '谈谈Proxy和Reflect', link: '/learn/web/javascript/Proxy_and_Reflect' },
    {
        icon: '🔥',
        text: 'ES6 - Promise',
        link: '/learn/web/javascript/what_is_promise',
        collapsed: false,
        items: [
            { icon: '🔥', text: '什么是回调地狱？', link: '/learn/web/javascript/what_is_callback_hell' },
            { icon: '⭐', text: 'promise.all()', link: '/learn/web/javascript/promise_all' }
        ]
    },
    { icon: '🔹', text: 'MutationObserver监听DOM', link: '/learn/web/javascript/mutationObserver_listens_to_dom' }
    // { icon: '⭐', text: 'requestAnimationFrame是什么？', link: '/learn/web/javascript/what_is_requestAnimationFrame' },
    // { icon: '⭐', text: 'GC垃圾回收机制', link: '/learn/web/javascript/garbage_collection_mechanism' }
];

export default jsItems;
