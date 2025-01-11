<template>
    <transition name="fade">
        <div
            v-if="visible"
            ref="modal"
            class="absolute"
            :style="{ ...layoutStyle, transition }"
        >
            <slot/>

            <div :ref="el => els.t = el" class="absolute top--1 left-0 w-full h-1 cursor-ns-resize"/>
            <div :ref="el => els.l = el" class="absolute top-0 left--1 w-1 h-full cursor-ew-resize"/>
            <div :ref="el => els.b = el" class="absolute bottom--1 left-0 w-full h-1 cursor-ns-resize"/>
            <div :ref="el => els.r = el" class="absolute top-0 right--1 w-1 h-full cursor-ew-resize"/>
            <div :ref="el => els.lt = el" class="absolute top--1 left--1 w-1 h-1 cursor-nwse-resize"/>
            <div :ref="el => els.rt = el" class="absolute top--1 right--1 w-1 h-1 cursor-nesw-resize"/>
            <div :ref="el => els.lb = el" class="absolute bottom--1 left--1 w-1 h-1 cursor-nesw-resize"/>
            <div :ref="el => els.rb = el" class="absolute bottom--1 right--1 w-1 h-1 cursor-nwse-resize"/>
        </div>
    </transition>
</template>

<script setup lang="ts">
    import { getHeightFromString, getWidthFromString, type LayoutBaseInfo } from '@store/contentLayout';
    import { ComponentPublicInstance, computed, onMounted, ref, watch } from 'vue';
    import { drag } from '../../utils/drag';
    import { type OriginLayout, Size } from './types';
    import { debounce } from 'lodash-es';
    import {
        dragChangeModalSizeHandler,
        type DragChangeModalSizeHandlerIncomingParams
    } from '@NanoUI/NanoModal/dragChangeSizeHandler';

    const emit = defineEmits<{
        'update:layout': [ LayoutBaseInfo ];
    }>();

    const props = withDefaults(defineProps<{
        dragEl?: HTMLElement | null;
        layout: LayoutBaseInfo;
        widthRange?: [ Size, Size ];
        heightRange?: [ Size, Size ];
    }>(), {
        dragEl: null,
        widthRange: () => [ '20vw', '80vw' ],
        heightRange: () => [ '50vh', '80vh' ]
    });
    const fullscreen = defineModel<boolean>('fullscreen', {
        default: false
    });
    const visible = defineModel<boolean>('visible', {
        default: false
    });

    const layout = ref<LayoutBaseInfo>(props.layout);
    watch(() => props.layout, (value) => {
        layout.value = value;
    }, { immediate: true, deep: true });
    watch(layout, debounce(value => {
        emit('update:layout', value);
    }, 100), { deep: true });
    const layoutStyle = computed(() => {
        if (fullscreen.value) {
            return {
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh'
            };
        } else {
            return {
                ...layout.value,
                minWidth: props.widthRange[0],
                maxWidth: props.widthRange[1],
                minHeight: props.heightRange[0],
                maxHeight: props.heightRange[1]
            };
        }
    });

    const defaultTransition: string = 'top .12s, left .12s, width .12s, height .12s';
    const transition = ref(defaultTransition);

    const range = computed(() => {
        const [ minWidth, maxWidth ] = props.widthRange;
        const [ minHeight, maxHeight ] = props.heightRange;
        return {
            minWidth: getWidthFromString(minWidth?.toString()),
            maxWidth: getWidthFromString(maxWidth?.toString()),
            minHeight: getHeightFromString(minHeight?.toString()),
            maxHeight: getHeightFromString(maxHeight?.toString())
        };
    });

    const modal = ref<HTMLElement | null>(null);
    const els = ref<Record<string,  Element | ComponentPublicInstance | null>>({});

    onMounted(() => {
        Object.keys(els.value).forEach(key => {
            const el = els.value[key] as HTMLElement | null;
            if (el) {
                drag<DragChangeModalSizeHandlerIncomingParams>({
                    el,
                    originalData: () => {
                        return {
                            key,
                            screenX: document.documentElement.clientWidth,
                            screenY: document.documentElement.clientHeight,
                            top: modal.value!.offsetTop,
                            left: modal.value!.offsetLeft,
                            w: modal.value!.clientWidth,
                            h: modal.value!.clientHeight,
                            range: range.value
                        };
                    },
                    handlerFn: e => dragChangeModalSizeHandler(e, layout),
                    beforeFn: () => transition.value = '',
                    afterFn: () => transition.value = defaultTransition
                });
            }
        });
    });

    // drag element to move modal
    const dragInit = watch(() => props.dragEl, (value) => {
        // console.log('dragEl changed', value);
        if (value) {
            drag<OriginLayout>({
                el: value,
                originalData: () => {
                    const { clientWidth: screenWidth, clientHeight: screenHeight } = document.documentElement;
                    const { offsetLeft, offsetTop } = modal.value!;
                    const width = getWidthFromString(layout.value.width);
                    return {
                        isFullscreen: fullscreen.value,
                        notFullScreenWidth: width,
                        screenWidth,
                        screenHeight,
                        left: offsetLeft,
                        top: offsetTop
                    };
                },
                handlerFn: ({
                    x,
                    y,
                    originalData: { isFullscreen, notFullScreenWidth, screenWidth, screenHeight, left, top },
                    pointerWelt,
                    initial
                }) => {
                    let newLeft = left + x;
                    const newTop = top + y;
                    if (isFullscreen) {
                        fullscreen.value = false;
                        const moreThanHalf = initial.x > screenWidth / 2;
                        const offsetLeft = moreThanHalf ?
                            (initial.x / screenWidth) * notFullScreenWidth :
                            initial.x;
                        newLeft = initial.x - offsetLeft + x;
                    }
                    if (pointerWelt.top) {
                        transition.value = defaultTransition;
                        fullscreen.value = true;
                    }
                    if (!pointerWelt.top && !pointerWelt.bottom && newTop > 0) {
                        layout.value.top = newTop / screenHeight * 100 + 'vh';
                    } else {
                        layout.value.top = pointerWelt.bottom ? '98vh' : '0';
                    }
                    if (!pointerWelt.left && !pointerWelt.right) {
                        layout.value.left = newLeft / screenWidth * 100 + 'vw';
                    }
                },
                beforeFn: () => transition.value = '',
                afterFn: () => transition.value = defaultTransition
            });
            dragInit.pause();
        } else {
            dragInit.resume();
        }
    });
</script>

<style scoped lang="scss">
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-leave-active {
        transition-duration: .25s;
    }
</style>
