import { nextTick, onMounted, watch } from 'vue';
import { useRoute } from 'vitepress';

const setGoogleAnalysis = () => {
    // 获取 head 标签
    let headTag: HTMLElement = document.getElementsByTagName('head')[0];
    let googleScript: string = `
<!-- Google tag (gtag.js) -->
<script class="google-analysis" async src="https://www.googletagmanager.com/gtag/js?id=G-2L9EPR0ZMM"></script>
<script class="google-analysis">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-2L9EPR0ZMM');
</script>`;
    if (document.getElementsByClassName('google-analysis').length === 0) {
        headTag.insertAdjacentHTML('beforeend', googleScript);
    }
}

const googleAnalysis = () => {
    const route = useRoute();
    onMounted(() => {
        setGoogleAnalysis();
    });
    watch(() => route.path, () => nextTick(() => {
        setGoogleAnalysis();
    }));
}

export default googleAnalysis;
