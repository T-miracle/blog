import { DefaultTheme } from 'vitepress/types/default-theme';

const vueItems: DefaultTheme.SidebarItem[] = [
    { text: '🔹 Vue自称渐进式框架，你如何理解“渐进式”的含义？', link: '/learn/web/vue/how_to_understand_the_meaning_of_progressive' },
    { text: '🔥 Vue的生命周期', link: '/learn/web/vue/life_cycle_of_vue' },
    { text: '🔥 路由模式Hash和History有什么区别？', link: '/learn/web/vue/the_difference_between_hash_and_history_in_routing_mode' },
    { text: '🔥 v-for为什么需要加key？', link: '/learn/web/vue/why_does_v-for_need_to_add_key' },
    { text: '🔥 v-for为什么不能和v-if在同一个元素中使用？', link: '/learn/web/vue/why_cant_v-for_be_used_in_the_same_element_as_v-if' },
    { text: '🔸 v-for中使用动态组件', link: '/learn/web/vue/use_dynamic_components_in_v-for' },
    { text: '⭐ 指令有什么用？如何自定义一个指令？', link: '/learn/web/vue/What_is_the_command_for_and_How_to_customize_a_command' },
    { text: '⭐ Vue中props和data哪个优先级更高？', link: '/learn/web/vue/which_priority_is_higher_between_props_and_data_in_vue' },
    { text: '🔥 watch和computed的区别', link: '/learn/web/vue/the_difference_between_watch_and_computed' },
    { text: '🔥 keep-live是什么？如何使用？', link: '/learn/web/vue/what_is_keep-live' },
    {
        text: '🔥 插槽',
        link: '/learn/web/vue/about_slot.md',
        collapsed: false,
        items: [ {
            text: '🔥 作用域插槽的使用场景', link: '/learn/web/vue/use_cases_for_scoped_slots.md'
        } ]
    },
    { text: '⭐ Diff 算法', link: '/learn/web/vue/diff_algorithm' },
    { text: '🔸 Vue项目配置路径别名', link: '/learn/web/vue/configure_path_aliases' },
    { text: '🔥 Vue打包部署Nginx后页面路径刷新404的问题', link: '/learn/web/vue/nginx_path_refresh_404_problem' },
    { text: '🔥 vue项目上线打包时如何做性能优化', link: '/learn/web/vue/vue_project_packaging_optimization.md' },
    { text: '🔹 Vue3 Teleport组件的使用以及适用场景', link: '/learn/web/vue/vue3_teleport.md' },
    { text: '🔸 透传属性（穿透属性）', link: '/learn/web/vue/fallthrough_attributes.md' },
    { text: '🔸 Vue2 在 watch 上使用防抖或节流函数', link: '/learn/web/vue/debounce_or_throttle_function_on_watch.md' },
    { text: '🔸 Vue2 和 Vue3 在双向绑定上的区别', link: '/learn/web/vue/the-difference-between-vue2-and-vue3-in-two-way-binding.md' },
    { text: '🔸 Vue2 组件选项 extends 的用法', link: '/learn/web/vue/component-extends.md' },
];

export default vueItems;
