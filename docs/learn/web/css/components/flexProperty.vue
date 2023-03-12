<template>
    <div class="flex-property">
        <div class="demo-container">
            <h3>父元素属性设置</h3>
            <div class="select-btn-group" v-for="(prop, idx) in parentAllStyle" :key="idx">
                <span>{{ idx }}: </span>
                <div>
                    <el-select v-model="parentRadios[idx]" size="small">
                        <el-option
                            v-for="(item, index) in prop"
                            :key="index"
                            :label="item"
                            size="small"
                            :value="item"
                        />
                    </el-select>
                </div>
            </div>
            <h3>子元素属性设置</h3>
            <div class="select-btn-group">
                <span>子元素个数: </span>
                <el-input-number :min="3" :max="12" size="small" :precision="0" v-model="num"/>
            </div>
            <div class="select-btn-group">
                <span>设置第n个子元素: </span>
                <el-input-number :min="1" :max="num" size="small" :precision="0" v-model="nthElement.id"/>
            </div>
            <div class="select-btn-group">
                <span>宽度：</span>
                <div>
                    <el-input-number :min="20" :max="300" size="small" :precision="0" :step="20" v-model="nthElement.width"
                                     :disabled="nthElement.autoWidth"/>
                    px
                    <el-switch v-model="nthElement.autoWidth" style="margin-left: 20px"/>
                    自动宽度
                </div>
            </div>
            <div class="select-btn-group">
                <span>高度：</span>
                <div>
                    <el-input-number :min="20" :max="300" size="small" :precision="0" :step="20" v-model="nthElement.height"
                                     :disabled="nthElement.autoHeight"/>
                    px
                    <el-switch v-model="nthElement.autoHeight" style="margin-left: 20px"/>
                    自动高度
                </div>
            </div>
            <div class="select-btn-group">
                <span>order：</span>
                <div>
                    <el-input-number size="small" :precision="0" v-model="nthElement.order"/>
                </div>
            </div>
            <div class="select-btn-group">
                <span>flex-grow：</span>
                <div>
                    <el-input-number :min="0" size="small" :precision="0" v-model="nthElement.flexGrow" @change="handleFlexGrow"/>
                </div>
            </div>
            <div class="select-btn-group">
                <span>flex-shrink：</span>
                <div>
                    <el-input-number :min="0" :max="1" size="small" :precision="0" v-model="nthElement.flexShrink"/>
                </div>
            </div>
            <div class="select-btn-group">
                <span>flex-basis：</span>
                <div>
                    <el-input-number :min="0" size="small" :precision="0" :step="20" v-model="nthElement.flexBasis"
                                     :disabled="nthElement.autoFlexBasis"/>
                    px
                    <el-switch v-model="nthElement.autoFlexBasis" style="margin-left: 20px"/>
                    自动
                </div>
            </div>
            <div class="select-btn-group">
                <span>align-self：</span>
                <div>
                    <el-select v-model="nthElement.alignSelf" size="small">
                        <el-option
                            v-for="(item, index) in childAlignSelfStyle"
                            :key="index"
                            :label="item"
                            size="small"
                            :value="item"
                        />
                    </el-select>
                </div>
            </div>
            <div class="demo-box" :style="parentStyle">
                <div ref="demoChildren" v-for="i in num"
                     :key="i"
                     :style="[{ order: i }, i === nthElement.id ? childStyle : {}]">
                    {{ i }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, reactive, ref } from 'vue';
    import { ElSelect, ElOption, ElInputNumber, ElSwitch } from 'element-plus';

    // 数据：父元素所有样式
    const parentAllStyle: { [prop: string]: string[] } = {
        'flex-direction': [ 'unset', 'row', 'row-reverse', 'column', 'column-reverse' ],
        'flex-wrap': [ 'unset', 'nowrap', 'wrap', 'wrap-reverse' ],
        'justify-content': [ 'unset', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around' ],
        'align-items': [ 'unset', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch' ],
        'align-content': [ 'unset', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch' ]
    };
    // 数据：父元素单选数据
    const parentRadios = reactive({
        'flex-direction': 'unset',
        'flex-wrap': 'unset',
        'justify-content': 'unset',
        'align-items': 'unset',
        'align-content': 'unset'
    });
    // 数据：子元素的个数
    const num = ref<number>(12);
    // 数据：第n个子元素的属性设置
    const nthElement = reactive({
        id: 2,
        width: 120,
        height: 120,
        autoWidth: false,
        autoHeight: false,
        order: 2,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 120,
        autoFlexBasis: false,
        alignSelf: 'auto'
    });
    // 数据：子元素的样式
    const childAlignSelfStyle = [ 'auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch' ];
    // 计算：父元素样式
    const parentStyle = computed(() => {
        return {
            'flex-direction': parentRadios['flex-direction'],
            'flex-wrap': parentRadios['flex-wrap'],
            'justify-content': parentRadios['justify-content'],
            'align-items': parentRadios['align-items'],
            'align-content': parentRadios['align-content']
        };
    });
    // 计算：捆绑在子元素上的样式
    const childStyle = computed(() => {
        let flexStyle = {
            order: nthElement.order,
            flexGrow: nthElement.flexGrow,
            flexShrink: nthElement.flexShrink,
            flexBasis: nthElement.autoFlexBasis ? 'auto' : nthElement.flexBasis + 'px',
            alignSelf: nthElement.alignSelf
        };
        let widthAndHeight = {
            width: nthElement.autoWidth ? 'auto' : nthElement.width + 'px',
            height: nthElement.autoHeight ? 'auto' : nthElement.height + 'px'
        };
        return { ...flexStyle, ...widthAndHeight };
    });
    // 节点：子元素的节点数组
    const demoChildren = ref<HTMLElement[] | null>(null);
    // 方法：`flex-grow`的值变更时触发该事件
    const handleFlexGrow = (val: number) => {
        demoChildren.value.forEach((item: HTMLElement) => {
            if (val >= 1) {
                item.style.width = 'auto';
                item.style.flexGrow = '1';
            } else {
                item.style.width = '';
                item.style.flexGrow = '';
            }
        });
    };
</script>

<style scoped lang="scss">
    .flex-property {
        width: 100%;
        height: auto;

        h3 {
            background-color: #9b9b9b;
            text-align: center;
            font-size: 1.2em;
            color: white;
            font-weight: 500;
            margin: 0;
        }

        > .demo-container {
            width: 100%;
            border: 2px solid rgba(119, 136, 153, 1);
            border-radius: 4px;

            > .select-btn-group {
                margin: 5px 10px;
                display: grid;
                grid-template-columns: 160px auto;
                grid-column-gap: 20px;

                > span {
                    display: inline-block;
                    width: 160px;
                    text-align: right;
                    font-weight: bold;
                    margin-right: 20px;
                }

                :deep(.el-switch) {
                    height: 24px;
                }
            }

            > .demo-box {
                margin: 0 10px 10px;
                border: 1px solid gray;
                height: 600px;
                overflow: hidden;
                display: flex;

                > div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 10px;
                    width: 80px;
                    height: 80px;
                    background-color: #c3ff00;

                    $bgColorList: #ff8900 #7595ff #00c54d #ff4671 #00a69a #b335d9 #babe0b #21ce78 #cccccc #e07474 #21e357 #c3ff00;

                    @for $i from 1 to length($bgColorList)+1 {
                        &:nth-child(#{$i}) {
                            background-color: nth($bgColorList, $i);
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .flex-property > .demo-container > .select-btn-group {
            display: block;

            > span {
                display: block;
                text-align: left;
            }
        }
    }
</style>
