import 'viewerjs/dist/viewer.min.css';
import Viewer from 'viewerjs';

/**
 * 给图片添加预览功能
 */
const setViewer = (el?: string) => {
    document.querySelectorAll(el ? el: '.vp-doc img').forEach(item => {
        (item as HTMLElement).onclick = () => {
            const viewer = new Viewer(<HTMLElement>item, {
                navbar: false,
                title: false,
                toolbar: {
                    zoomIn: 4,
                    zoomOut: 4,
                    prev: 4,
                    next: 4,
                    reset: 4,
                    oneToOne: 4
                },
                hide(e) {
                    viewer.destroy();
                }
            });
            viewer.show()
        }
    });
};

export default setViewer;
