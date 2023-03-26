import 'viewerjs/dist/viewer.min.css';
import Viewer from 'viewerjs';
import { nextTick, onMounted, watch } from 'vue';
import { useRoute } from 'vitepress';

/**
 * 给图片添加预览功能
 */
const setViewer = (el?: string, option?: Viewer.Options) => {
    // 默认配置
    const defaultBaseOption: Viewer.Options = {
        navbar: false,
        title: false,
        toolbar: {
            zoomIn: 4,
            zoomOut: 4,
            prev: 4,
            next: 4,
            reset: 4,
            oneToOne: 4
        }
    }
    document.querySelectorAll(el ? el: '.vp-doc img').forEach((item: HTMLElement) => {
        item.onclick = () => {
            const viewer = new Viewer(<HTMLElement>item, {
                ...defaultBaseOption,
                ...option,
                hide(e) {
                    viewer.destroy();
                }
            });
            viewer.show()
        }
    });
};

const imageViewer = (el?: string) => {
    const route = useRoute();
    onMounted(() => {
        setViewer(el);
    })
    watch(() => route.path, () => nextTick(() => {
        setViewer(el);
    }));
}

export default imageViewer;
