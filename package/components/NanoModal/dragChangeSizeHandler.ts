import { HandlerFnParams } from '../../utils/drag';
import { Ref } from 'vue';
import type { LayoutBaseInfo } from '@store/contentLayout';

export type DragChangeModalSizeHandlerIncomingParams = {
    key: string;
    screenX: number;
    screenY: number;
    top: number;
    left: number;
    w: number;
    h: number;
    range: {
        minWidth: number;
        maxWidth: number;
        minHeight: number;
        maxHeight: number;
    }
}

/**
 * Drag change modal size handler
 * @param {HandlerFnParams<DragChangeModalSizeHandlerIncomingParams>} handlerFnResult
 * @param {Ref<LayoutBaseInfo>} layout
 */
export const dragChangeModalSizeHandler = (
    handlerFnResult: HandlerFnParams<DragChangeModalSizeHandlerIncomingParams>,
    layout: Ref<LayoutBaseInfo>
) => {
    const { x, y, originalData, pointerWelt } = handlerFnResult;
    const { key, screenX, screenY, top, left, w, h, range } = originalData;
    const { minWidth, maxWidth, minHeight, maxHeight } = range;
    if (key === 't') {
        if (h - y >= minHeight && h - y <= maxHeight) {
            if (pointerWelt.top) {
                layout.value.top = 0;
                layout.value.height = `${ (h + top) / screenY * 100 }vh`;
            } else {
                layout.value.top = `${ (top + y) / screenY * 100 }vh`;
                layout.value.height = `${ (h - y) / screenY * 100 }vh`;
            }
        } else {
            if (h - y < minHeight) {
                layout.value.top = `${ (top + h - minHeight) / screenY * 100 }vh`;
                layout.value.height = minHeight / screenY * 100 + 'vh';
            } else {
                layout.value.top = `${ (top + h - maxHeight) / screenY * 100 }vh`;
                layout.value.height = maxHeight / screenY * 100 + 'vh';
            }
        }
    } else if (key === 'l') {
        leftChangeSizeHandler({ x, w, left, minWidth, maxWidth, screenX, layout });
    } else if (key === 'b') {
        bottomChangeSizeHandler({ y, h, minHeight, maxHeight, screenY, layout });
    } else if (key === 'r') {
        rightChangeSizeHandler({ x, w, minWidth, maxWidth, screenX, layout });
    } else if (key === 'lt') {
        topChangeSizeHandler({ y, h, top, minHeight, maxHeight, screenY, layout });
        leftChangeSizeHandler({ x, w, left, minWidth, maxWidth, screenX, layout });
    } else if (key === 'rt') {
        topChangeSizeHandler({ y, h, top, minHeight, maxHeight, screenY, layout });
        rightChangeSizeHandler({ x, w, minWidth, maxWidth, screenX, layout });
    } else if (key === 'lb') {
        bottomChangeSizeHandler({ y, h, minHeight, maxHeight, screenY, layout });
        leftChangeSizeHandler({ x, w, left, minWidth, maxWidth, screenX, layout });
    } else if (key === 'rb') {
        bottomChangeSizeHandler({ y, h, minHeight, maxHeight, screenY, layout });
        rightChangeSizeHandler({ x, w, minWidth, maxWidth, screenX, layout });
    }
};

type ChangeSizeHandlerParams = {
    x: number;
    y: number;
    w: number;
    h: number;
    top: number;
    left: number;
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    screenX: number;
    screenY: number;
    layout: Ref<LayoutBaseInfo>;
}

function topChangeSizeHandler({
    y, h, top, minHeight, maxHeight, screenY, layout
}: Pick<ChangeSizeHandlerParams, 'y' | 'h' | 'top' | 'minHeight' | 'maxHeight' | 'screenY' | 'layout'>) {
    if (h - y >= minHeight && h - y <= maxHeight) {
        layout.value.top = `${ (top + y) / screenY * 100 }vh`;
        layout.value.height = `${ (h - y) / screenY * 100 }vh`;
    } else {
        if (h - y < minHeight) {
            layout.value.top = `${ (top + h - minHeight) / screenY * 100 }vh`;
            layout.value.height = minHeight / screenY * 100 + 'vh';
        } else {
            layout.value.top = `${ (top + h - maxHeight) / screenY * 100 }vh`;
            layout.value.height = maxHeight / screenY * 100 + 'vh';
        }
    }
}

function bottomChangeSizeHandler({
    y, h, minHeight, maxHeight, screenY, layout
}: Pick<ChangeSizeHandlerParams, 'y' | 'h' | 'minHeight' | 'maxHeight' | 'screenY' | 'layout'>) {
    if (h + y >= minHeight && h + y <= maxHeight) {
        layout.value.height = `${ (h + y) / screenY * 100 }vh`;
    } else {
        if (h + y < minHeight) {
            layout.value.height = minHeight / screenY * 100 + 'vh';
        } else {
            layout.value.height = maxHeight / screenY * 100 + 'vh';
        }
    }
}

function leftChangeSizeHandler({
    x, w, left, minWidth, maxWidth, screenX, layout
}: Pick<ChangeSizeHandlerParams, 'x' | 'w' | 'left' | 'minWidth' | 'maxWidth' | 'screenX' | 'layout'>) {
    if (w - x >= minWidth && w - x <= maxWidth) {
        layout.value.left = `${ (left + x) / screenX * 100 }vw`;
        layout.value.width = `${ (w - x) / screenX * 100 }vw`;
    } else {
        if (w - x < minWidth) {
            layout.value.left = `${ (left + w - minWidth) / screenX * 100 }vw`;
            layout.value.width = minWidth / screenX * 100 + 'vw';
        } else {
            layout.value.left = `${ (left + w - maxWidth) / screenX * 100 }vw`;
            layout.value.width = maxWidth / screenX * 100 + 'vw';
        }
    }
}

function rightChangeSizeHandler({
    x, w, minWidth, maxWidth, screenX, layout
}: Pick<ChangeSizeHandlerParams, 'x' | 'w' | 'minWidth' | 'maxWidth' | 'screenX' | 'layout'>) {
    if (w + x >= minWidth && w + x <= maxWidth) {
        layout.value.width = `${ (w + x) / screenX * 100 }vw`;
    } else {
        if (w + x < minWidth) {
            layout.value.width = minWidth / screenX * 100 + 'vw';
        } else {
            layout.value.width = maxWidth / screenX * 100 + 'vw';
        }
    }
}
