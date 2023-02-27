<template>
    <div id="content">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
    </div>
</template>

<script setup lang="ts">
    import { nextTick } from 'vue';

    nextTick(() => {
        let content: HTMLElement = document.getElementById('content')
        content.addEventListener('click', function (e) {
            const box = e.target as HTMLElement
            alert(box.innerText)
        })
    })

</script>

<style scoped lang="scss">
    #content {
        height: 120px;
        width: 120px;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;

        .box {
            text-align: center;
            line-height: 60px;
            border: 1px solid blanchedalmond;
            cursor: pointer;

            &:nth-of-type(1) {
                background-color: #6ee7b7;
            }

            &:nth-of-type(2) {
                background-color: #89DDFF;
            }

            &:nth-of-type(3) {
                background-color: #C792EA;
            }

            &:nth-of-type(4) {
                background-color: #eab308;
            }
        }
    }
</style>
