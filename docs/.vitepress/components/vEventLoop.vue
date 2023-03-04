<template>
    <div class="event-loop-container">
        <div class="event-loop-box">
            <div class="event-loop__core">
                <div class="core__stack-and-apis">
                    <div class="core__stack">
                        <div class="stack__title">
                            <slot name="stack">调用栈</slot>
                        </div>
                        <div class="stack__content">
                            <template v-if="stack">
                                <div class="stack__info" v-for="(item, index) in stack" :key="index" v-text="item"/>
                                <div style="text-align: center; background-color: unset">⬇</div>
                            </template>
                        </div>
                    </div>
                    <div class="core__apis">
                        <div class="apis__title">
                            <slot name="apis">WebAPIs</slot>
                        </div>
                        <div class="apis__content">
                            <template v-if="apis">
                                <div style="text-align: center; background-color: unset">⬆</div>
                                <div class="apis__info" v-for="(item, index) in apis" :key="index">
                                    <div class="info__time">
                                        <div>{{ item.time }}</div>
                                        <div class="time__info">{{ item.info }}</div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="event-loop__queue">
                    <div class="queue__loop">
                        <div class="loop__img">
                            <slot name="loopImg">
                                <svg :class="loop ? 'whirling': ''" t="1677768425470" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                                    <path
                                        d="M721.024 725.333A298.667 298.667 0 1 1 810.667 512 42.667 42.667 0 0 0 896 512a384 384 0 1 0-128 286.208v12.459c0 23.722 19.115 42.666 42.667 42.666 23.722 0 42.666-19.114 42.666-42.666v-128A42.539 42.539 0 0 0 810.667 640h-128C658.944 640 640 659.115 640 682.667c0 23.722 19.115 42.666 42.667 42.666h38.357z"></path>
                                </svg>
                            </slot>
                        </div>
                        <div class="loop__title">
                            <slot name="loop">事件<br/>循环</slot>
                        </div>
                    </div>
                    <div class="queue__arrow">
                        <svg t="1677768909291" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                             width="32" height="32">
                            <path d="M825.6 544H128.7168a32 32 0 1 1 0-64h696.8832a32 32 0 0 1 0 64z" fill="#7f8497"></path>
                            <path
                                d="M597.4528 798.72a32 32 0 0 1-22.6304-54.6304L806.656 512l-231.8336-231.8336a32 32 0 1 1 45.2608-45.2608L897.1264 512l-277.0432 277.0944a31.8976 31.8976 0 0 1-22.6304 9.6256z"
                                fill="#7f8497"></path>
                        </svg>
                    </div>
                    <div class="queue">
                        <div class="queue__title">
                            <slot name="queue">回调队列</slot>
                        </div>
                        <div class="queue__content">
                            <div class="micro-task">
                                <div class="micro-task__title">
                                    <slot name="micro-task">微任务</slot>
                                </div>
                                <div class="micro-task__info">
                                    <template v-if="queue && queue[0]">
                                        <div style="text-align: center; background-color: unset">⬇</div>
                                        <div v-for="(item, index) in queue[0]" :key="index">{{ item }}</div>
                                    </template>
                                </div>
                            </div>
                            <div class="macro-task">
                                <div class="macro-task__title">
                                    <slot name="macro-task">宏任务</slot>
                                </div>
                                <div class="macro-task__info">
                                    <template v-if="queue && queue[1]">
                                        <div style="text-align: center; background-color: unset">⬇</div>
                                        <div v-for="(item, index) in queue[1]" :key="index">{{ item }}</div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="event-loop__console">
                <div class="console__title">
                    <slot name="console">浏览器控制台</slot>
                </div>
                <div class="console__result">
                    <template v-if="console">
                        <div class="result__info"
                             v-for="(item, index) in console"
                             :key="index"
                             :class="index === consoleIndex ? 'zd' : (consoleIndex === -1 && index === console.length - 1) ? 'zd': ''"
                        >
                            {{ item }}
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    type apisType = {
        time: number,
        info: string
    }

    const { loop, stack, apis, queue, console, consoleIndex } = withDefaults(defineProps<{
        /*栈内容*/
        stack: string[] | null
        /*APIs内容*/
        apis: apisType[] | null
        /*event-loop图标旋转*/
        loop: boolean
        /*队列信息*/
        queue: string[][] | null
        /*控制台内容*/
        console: string[] | null
        /*控制台标记*/
        consoleIndex: number | null
    }>(), {
        stack: null,
        apis: null,
        loop: false,
        queue: null,
        console: null,
        consoleIndex: null
    });
</script>

<style scoped lang="scss">
    $backgroundColor: #676E95;
    $borderColor: lightslategrey;
    $fontColor: #1c1e21;

    @mixin titleStyle {
        background-color: $backgroundColor;
        color: white;
        height: 24px;
        line-height: 20px;
        font-size: 16px;
        text-align: center;
    }

    @mixin info {
        font-size: .8em;
        border-radius: 4px;
        padding: 4px;
        white-space: pre-wrap;
        line-height: 1.2em;
    }

    .whirling {
        animation: whirling 3.6s linear infinite;
        fill: red !important;
    }

    @keyframes whirling {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(-360deg);
        }
    }

    .event-loop-container {
        width: 100%;
        margin: 20px 0;

        .event-loop-box {
            width: 100%;
            max-width: 600px;
            border: 2px solid $borderColor;
            border-radius: 4px;
            margin: 0 auto;

            .event-loop__core {
                padding: 20px 20px 0;

                .core__stack-and-apis {
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(2, auto);
                    grid-column-gap: 10px;

                    > div {
                        min-height: 120px;
                        border: 2px solid $borderColor;
                        border-radius: 4px;

                        > [class*='title'] {
                            @include titleStyle;
                        }
                    }

                    .core__stack {
                        .stack__content {
                            padding: 10px;
                            display: flex;
                            flex-direction: column-reverse;
                            min-height: 120px;

                            .stack__info {
                                margin-top: 5px;
                                background: #b5eaff;
                                @include info;
                            }
                        }
                    }

                    .core__apis {
                        .apis__content {
                            padding: 10px;
                            display: flex;
                            flex-direction: column-reverse;
                            justify-content: flex-end;

                            .apis__info {
                                padding: 4px;
                                margin-bottom: 5px;

                                .info__time {
                                    background-color: darkorange;
                                    display: grid;
                                    grid-template-columns: 60px auto;
                                    padding: 4px;
                                    border-radius: 4px;
                                    color: white;

                                    > div:first-child {
                                        font-size: .8em;
                                    }

                                    .time__info {
                                        @include info;
                                        background-color: #b9ffbe;
                                        color: black;
                                    }
                                }

                                @media screen and (max-width: 768px) {
                                    .info__time {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }
                }

                .event-loop__queue {
                    width: 100%;
                    display: grid;
                    padding: 20px 0;
                    grid-template-columns: 48px 40px auto;

                    .queue__loop {
                        margin: auto 0;

                        .loop__img {
                            margin: 0 auto;

                            > svg {
                                fill: #333333;
                            }
                        }

                        .loop__title {
                            font-size: .8em;
                            color: #7f8497;
                            line-height: 1em;
                            text-align: center;
                        }
                    }

                    .queue__arrow {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .queue {
                        border: 2px solid $borderColor;
                        border-radius: 4px;

                        .queue__title {
                            @include titleStyle;
                        }

                        .queue__content {
                            padding: 5px;

                            .macro-task, .micro-task {
                                margin: 5px;
                                border: 2px solid $borderColor;

                                > [class*='title'] {
                                    @include titleStyle;
                                }

                                > [class*='info'] {
                                    min-height: 40px;
                                    padding: 5px;

                                    > div {
                                        @include info;
                                    }
                                }
                            }

                            .micro-task {
                                .micro-task__info {
                                    > div {
                                        background-color: #adffad;
                                    }
                                }
                            }

                            .macro-task {
                                .macro-task__info {
                                    > div {
                                        background-color: #ff9ec9;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .event-loop__console {
                width: 100%;

                .console__title {
                    @include titleStyle;
                    border-top: 2px solid $borderColor;
                }

                .console__result {
                    width: 100%;
                    color: $fontColor;
                    min-height: 40px;

                    .result__info {
                        padding: 0 15px;
                        font-size: 14px;
                        color: #606266;
                        border-bottom: 1px dotted #7f8497;

                        &.zd {
                            background-color: #fff2bd;
                        }
                    }
                }
            }
        }
    }
</style>
