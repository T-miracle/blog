<template>
    <div id="parent">
        <div>
            <button @click="visible = !visible">{{ !visible ? '打开' : '关闭' }}子组件</button>
        </div>
        <child v-if="visible"/>
    </div>
</template>

<script>
    import child from './child.vue';

    export default {
        name: 'parent',
        components: {
            child
        },
        data() {
            return {
                visible: false
            };
        }
    };
</script>

<style lang="scss" scoped>
    #parent {
        margin: 20px;

        button {
            border: 1px solid #606266;
            border-radius: 4px;
            padding: 2px 5px;
            background-color: #e7e7e7;
        }
    }
</style>
