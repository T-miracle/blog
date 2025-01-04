type DragChangeWidthOptions = {
    parentEl: HTMLElement;
    targetEl: HTMLElement;
    dragEl: HTMLElement;
    otherEls: HTMLElement[];
    minWidth?: number;
    reservedWidth?: number;
    reverseDirection?: boolean;
}

/**
 * 拖拽改变宽度
 * @param {Object} options
 * @param {HTMLElement} options.parentEl 父元素
 * @param {HTMLElement} options.targetEl 目标元素
 * @param {HTMLElement} options.dragEl 拖拽元素
 * @param {HTMLElement[]} options.otherEls 其他元素(用于控制目标元素最大宽度)
 * @param {number} options.minWidth 目标元素最小宽度
 * @param {number} [options.reservedWidth] 给其他元素预留的最小宽度
 * @param {boolean} [options.reverseDirection] 是否反向增加宽度
 */
export function dragChangeWidth(
    {
        parentEl,
        targetEl,
        dragEl,
        otherEls,
        minWidth = 160,
        reservedWidth = 400,
        reverseDirection = false
    }: DragChangeWidthOptions
) {
    dragEl.addEventListener('mousedown', (e: MouseEvent) => {
        e.preventDefault();
        const startX = e.clientX;
        const bodyWidth = parentEl.clientWidth;
        const targetWidth = targetEl.clientWidth;
        // get otherEl width
        let otherTotalWidth = 0;
        otherEls.forEach(el => {
            otherTotalWidth += el.clientWidth;
        });

        const onMouseMove = (e: MouseEvent) => {
            const diff = e.clientX - startX;
            const newTargetLine = targetWidth + (reverseDirection ? -diff : diff);
            // 控制最小宽度
            if (newTargetLine < minWidth) {
                return;
            }
            // 控制最大宽度
            if (newTargetLine > bodyWidth - otherTotalWidth - reservedWidth) {
                return;
            }
            const percentage = newTargetLine / bodyWidth * 100;
            targetEl.style.setProperty('width', `${ percentage }%`);
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
};
