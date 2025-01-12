// Drag move handler function
export type HandlerFnParams<T> = {
    // x-axis moving distance
    x: number;
    // y-axis moving distance
    y: number;
    // Original data
    originalData: T;
    // Whether pointer is welted
    pointerWelt: {
        top: boolean;
        bottom: boolean;
        left: boolean;
        right: boolean;
    },
    // Initial position
    initial: {
        x: number;
        y: number;
    }
}

// Drag options
export type DragOptions<T> = {
    // The element to be dragged
    el: HTMLElement;
    // Original data
    originalData: T | (() => T);
    // Handler function
    handlerFn?: (data: HandlerFnParams<T>) => void;
    // Before drag function
    beforeFn?: () => void;
    // After drag function
    afterFn?: () => void;
}

/**
 * Drag the element to change the width of the child element
 * @param options Drag options
 * @param options.el The element to be dragged
 * @param options.originalData Original data (passed to handlerFn for use)
 * @param options.handlerFn Handler function
 * @param options.beforeFn Before drag do something
 * @param options.afterFn After drag do something
 */
export function drag<T>({ el, originalData, handlerFn, beforeFn, afterFn }: DragOptions<T>) {
    if (!el) {
        return;
    }
    el.addEventListener('mousedown', (e: MouseEvent) => {
        e.preventDefault();
        beforeFn?.bind(null)();
        const startX = e.clientX;
        const startY = e.clientY;
        const screenWith = document.documentElement.clientWidth;
        const screenHeight = document.documentElement.clientHeight;

        const _originalData = originalData instanceof Function ? originalData.bind(null)() : originalData;

        const dragEvent = (e: MouseEvent) => {
            const x = e.clientX - startX;
            const y = e.clientY - startY;
            const pointerWelt = {
                top: e.clientY < 0,
                bottom: e.clientY > screenHeight,
                left: e.clientX < 0,
                right: e.clientX > screenWith
            };
            handlerFn?.bind(null, {
                x,
                y,
                originalData: _originalData,
                pointerWelt,
                initial: {
                    x: startX,
                    y: startY
                }
            })();
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', dragEvent);
            document.removeEventListener('mouseup', onMouseUp);
            afterFn?.bind(null)();
        };

        document.addEventListener('mousemove', dragEvent);
        document.addEventListener('mouseup', onMouseUp);
    });
};
