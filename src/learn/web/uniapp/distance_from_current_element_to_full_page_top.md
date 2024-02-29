# uni-app 获取当前元素与完整页面顶部的距离

::: tip 相似问题
1. *uni-app 将元素滚动到屏幕顶部*
:::

实现思路：

```vue
<template>
    <view>
        <!-- ... -->
        <view id="el">...</view>
        <!-- ... -->
    </view>
</template>
<script>
    export default {
        data() {
            return {
                // 状态栏高度
                statusBarHeight: 0,
                // 当前滚动高度
                scrollTop: 0
            }
        },
        created() {
            uni.getSystemInfo({
                success: res => {
                    // 获取状态栏高度
                    this.statusBarHeight = res.statusBarHeight;
                }
            });
        },
        // 第一步：监听当前页面滚动的高度
        onPageScroll(event) {
            // 当前滚动高度
            this.scrollTop = event.scrollTop;
        },
        methods: {
            getElementDistanceFromTop() {
                // 第二步：获取当前元素顶部距离屏幕顶部的距离
                uni.createSelectorQuery().select('#' + name + index).boundingClientRect(rect => {
                    if (rect.top < 0) {
                        uni.pageScrollTo({
                            // 计算距离：
                            // 当前元素与完整页面顶部的距离 = 当前页面滚动的高度 + 当前元素顶部距离屏幕顶部的距离 + 高度偏移量 + 顶部安全距离（即手机状态栏高度）
                            scrollTop: this.scrollTop + rect.top - uni.upx2px(0 /* 高度偏移量 */) + this.statusBarHeight,
                            duration: 0
                        });
                    }
                }).exec();
            }
        }
    }
</script>
```


