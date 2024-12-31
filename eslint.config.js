import pluginVue from 'eslint-plugin-vue';
import js from '@eslint/js'
import ts from 'typescript-eslint'

export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    ...pluginVue.configs['flat/essential'],
    {
        files: [ '**/*.vue', '**/*.ts' ],
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        },
        rules: {
            // 允许any类型
            '@typescript-eslint/no-explicit-any': 'off',
            // 允许未使用的变量
            "@typescript-eslint/no-unused-expressions": "off",

            /** 空格 */
            // 数组括号前后的空格
            'array-bracket-spacing': [ 'error', 'always' ],
            // 对象括号前后的空格
            'object-curly-spacing': [ 'error', 'always' ],
            // 对象属性的冒号前后的空格
            'key-spacing': [ 'error', { 'beforeColon': false, 'afterColon': true } ],
            // 元素间的逗号空格间距
            'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
            // 函数方法括号前后的空格
            'space-before-function-paren': [ 'error', 'never' ],
            // 函数方法括号内部空格
            'space-in-parens': [ 'error', 'never' ],
            // 函数方法括号内部参数空格
            'func-call-spacing': [ 'error', 'never' ],
            // 代码块中的空格
            'space-before-blocks': [ 'error', 'always' ],
            // 参数计算符号两边的空格
            'space-infix-ops': 'error',
            // 关键字前后的空格
            'keyword-spacing': [ 'error', { 'before': true, 'after': true } ],
            // 注释前后的空格
            'spaced-comment': [ 'error', 'always' ],
            // 一元操作符前后的空格
            'space-unary-ops': [ 'error', { 'words': true, 'nonwords': false } ],
            // 模板字符串中的空格
            'template-curly-spacing': [ 'error', 'always' ],
            // vue 插槽表达式空格
            'vue/mustache-interpolation-spacing': [ 'error', 'always' ],

            /** 数组、对象对齐 */
            // 确保数组的多行格式对齐
            'array-bracket-newline': ['error', 'consistent'],
            // 确保数组元素的换行方式一致
            'array-element-newline': ['error', 'consistent'],
            // 确保对象的多行格式对齐
            'object-curly-newline': ['error', { multiline: true, consistent: true }],

            /** Vue风格 */
            // 设置 Vue 模版中 <template> 标签中的代码缩进为 4 个空格，有一层默认缩进
            'vue/html-indent': [ 'error', 4, { 'baseIndent': 1 } ],
            // 设置 Vue 模板中 <script> 标签中的代码缩进为 4 个空格，有一层默认缩进
            'vue/script-indent': [ 'error', 4, { 'baseIndent': 1, 'switchCase': 1 } ],
            // vue组件命名允许单个单词的名称
            'vue/multi-word-component-names': 'off',
            // 禁用闭合标签前的空格
            'no-whitespace-before-property': 'error',
            // 空标签必须使用闭合
            'vue/html-self-closing': [ 'error', { 'html': { 'void': 'always' } } ],
            // 禁用 v-for 指令的 template key
            'vue/no-v-for-template-key-on-child': 'off',
            // 禁用 v-text、v-html、v-on 指令在组件上
            'vue/no-v-text-v-html-on-component': 'off',
            // 允许 v-html 指令
            'vue/no-v-html': 'off',
            // 闭合标签去除多余的空格
            'vue/html-closing-bracket-spacing': [ 'error', {
                'startTag': 'never',
                'endTag': 'never',
                'selfClosingTag': 'never'
            } ],
            // 闭合标签换行
            'vue/html-closing-bracket-newline': [ 'error', {
                'singleline': 'never',
                'multiline': 'always'
            } ],

            /** 其他 */
            // 强制使用强类型判断（例如 `===` 和 `!==`）
            'eqeqeq': [ 'error', 'always', { 'null': 'ignore' } ],
            // 操作符如果换行，操作符必须在行尾
            'operator-linebreak': [ 'error', 'after' ],
            // 禁用尾随逗号
            'comma-dangle': [ 'error', 'never' ],
            // 换行符使用 lf 风格
            // 'linebreak-style': [ 'error', 'unix' ],
            // 字符串使用单引号 或者 反引号，不允许双引号
            'quotes': [ 'error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true } ],
            // 总是使用分号结尾
            'semi': [ 'error', 'always' ],
            // 禁止 console，预防内存泄漏
            'no-console': 'warn'
        }
    }
];
