<template>
    <div id="child">
        <span>{{ testData }}</span>
        <button @click="updateData">修改值</button>
    </div>
</template>

<script>
    export default {
        name: 'child',
        data() {
            return {
                testData: '我是子页面'
            };
        },
        methods: {
            updateData() {
                this.testData = this.testData + '=';
            }
        },
        setup() {
            console.log('setup', /*this.$el, this.$data*/);
        },
        beforeCreate() {
            console.log('beforeCreate', this.$el, this.$data);
        },
        created() {
            console.log('created', this.$el, this.$data);
        },
        beforeMount() {
            console.log('beforeMount', this.$el, this.$data);
        },
        mounted() {
            console.log('mounted', this.$el, this.$data);
        },
        beforeUpdate() {
            console.log('beforeUpdate', this.$el, this.$data);
        },
        updated() {
            console.log('updated', this.$el, this.$data);
        },
        beforeUnmount() {
            console.log('beforeUnmount', this.$el, this.$data);
        },
        unmounted() {
            console.log('unmounted', this.$el, this.$data);
        },
        activated() {
            console.log('activated', this.$el, this.$data);
        },
        deactivated() {
            console.log('deactivated', this.$el, this.$data);
        }
    };
</script>

<style lang="scss" scoped>
    #child {
        margin: 10px 0;
        padding: 4px;
        background-color: rgba(200, 200, 200, 0.5);
        color: #1e1e20;

        button {
            color: #000;
            margin-left: 20px;
            border: 1px solid #7f8497;
            padding: 0 4px;
            background-color: rgba(231, 231, 231, 0.66);
        }
    }
</style>
