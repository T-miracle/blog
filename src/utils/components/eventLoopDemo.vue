<template>
    <v-event-loop-list :data-list="dataList"/>
</template>

<script lang="ts" setup>
    import { reactive } from 'vue';
    import VEventLoopList from './vEventLoopList.vue';

    type dataListType = {
        id: number,
        content: {
            eventLoopData?: {
                /* 栈内容*/
                stack?: string[]
                /* APIs内容*/
                apis?: {
                    time?: string,
                    info: string
                }[]
                /* event-loop图标旋转*/
                loop?: boolean
                /* 队列信息*/
                queue?: string[][]
                /* 控制台内容*/
                console?: string[]
                /* 控制台标记*/
                consoleIndex?: number
            },
            desc?: string[]
        }
    }

    const dataList: dataListType[] = reactive([
        {
            id: 1,
            content: {
                eventLoopData: {
                    loop: false
                },
                desc: [
                    `代码准备运行中，事件循环还未开始`
                ]
            }
        },
        {
            id: 2,
            content: {
                eventLoopData: {
                    stack: [ '/what_is_event_loop_asyn_1.png' ]
                },
                desc: [
                    `开始运行，事件循环开始，先执行<img src="https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_asyn_1.png" alt=""/>，这个任务被压入调用栈中`
                ]
            }
        },
        {
            id: 3,
            content: {
                eventLoopData: {
                    console: [ '开始' ],
                    consoleIndex: -1
                },
                desc: [
                    '因为该任务是同步任务，立马被执行，执行完毕后被弹出，结果会被浏览器控制台打印',
                    '此时调用栈空闲，如果没有微任务在队列中，会等待下一个任务入栈'
                ]
            }
        },
        {
            id: 4,
            content: {
                eventLoopData: {
                    stack: [ 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1.png' ],
                    console: [ '开始' ]
                },
                desc: [
                    `下一个 <img src="https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1.png" alt="" /> 任务被压入调用栈中`
                ]
            }
        },
        {
            id: 5,
            content: {
                eventLoopData: {
                    stack: [ 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1.png' ],
                    apis: [ { time: '1000ms', info: 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1_func_1.png' } ],
                    console: [ '开始' ]
                },
                desc: [
                    '调用栈发现 <img src="https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1.png" alt="" /> 这个任务是异步执行的操作（宏任务），' +
                        '会把该任务的子任务（方法）放到 <code>WebAPIs</code> 中，如果有执行时间会进入计时，计时完毕放到宏任务队列'
                ]
            }
        },
        {
            id: 6,
            content: {
                eventLoopData: {
                    apis: [ { time: '1000ms', info: `https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1.png` } ],
                    console: [ '开始' ]
                },
                desc: [
                    `<img src="https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1.png" alt=""/> 内部子任务被放入后，它本身被调用栈弹出，调用栈空闲，事件循环也没有发现可执行的微任务`
                ]
            }
        },
        {
            id: 7,
            content: {
                eventLoopData: {
                    stack: [ 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_asyn_2.png' ],
                    apis: [ { time: '1000ms', info: `https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1.png` } ],
                    console: [ '开始' ]
                },
                desc: [
                    `继续执行同步任务 <img src="https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_asyn_2.png" alt="">，压入调用栈中`
                ]
            }
        },
        {
            id: 8,
            content: {
                eventLoopData: {
                    apis: [ { time: '1000ms', info: `https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_asyn_2.png` } ],
                    console: [ '开始', '结束' ],
                    consoleIndex: -1
                },
                desc: [
                    `被执行，弹出调用栈，在浏览器控制台中打印，调用栈空闲`
                ]
            }
        },
        {
            id: 9,
            content: {
                eventLoopData: {
                    queue: [ , [ `https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1_func_1.png` ] ],
                    console: [ '开始', '结束' ]
                },
                desc: [
                    `定时任务计时完毕，被丢入宏任务队列`
                ]
            }
        },
        {
            id: 10,
            content: {
                eventLoopData: {
                    stack: [ 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1_func_1.png' ],
                    console: [ '开始', '结束' ]
                },
                desc: [
                    `事件循环发现队列中的宏任务，于是把这个任务放入调用栈中`
                ]
            }
        },
        {
            id: 11,
            content: {
                eventLoopData: {
                    stack: [ 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1_func_1.png', 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1_func_1_asyn_1.png' ],
                    console: [ '开始', '结束' ]
                },
                desc: [
                    `因为这是个方法，所以其中的内容被提取，依次放在调用栈的堆上`
                ]
            }
        },
        {
            id: 12,
            content: {
                eventLoopData: {
                    stack: [ 'https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1_func_1.png' ],
                    console: [ '开始', '结束', '定时' ],
                    consoleIndex: -1
                },
                desc: [
                    `<img src="https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1_func_1_asyn_1.png" alt=""/>被执行，在浏览器控制台上打印，随后被抛出调用栈`
                ]
            }
        },
        {
            id: 13,
            content: {
                eventLoopData: {
                    console: [ '开始', '结束', '定时' ]
                },
                desc: [
                    `因为 <img src="https://namichong.obs.cn-south-1.myhuaweicloud.com/Blog/images/what_is_event_loop_settimeout_1_func_1.png" alt=""/> 里的任务都被执行，所以它被抛出了调用栈`
                ]
            }
        },
        {
            id: 14,
            content: {
                eventLoopData: {
                    console: [ '开始', '结束', '定时' ],
                    loop: false
                },
                desc: [
                    `全部任务执行完成，事件循环结束`
                ]
            }
        }
    ]);
</script>

<style scoped lang="scss">

</style>
