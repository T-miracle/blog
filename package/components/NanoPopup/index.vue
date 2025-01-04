<template>
    <div
        class="absolute [display:none] min-w-40 bg-white shadow-2xl"
        :class="{ 'block!': visible }"
        un-border="~ .25 solid rounded-2 [#B9BDC9]"
    >
        <slot/>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const visible = ref(false);

    function open() {
        visible.value = true;
    }

    function close() {
        visible.value = false;
    }

    defineExpose({
        open,
        close
    });
</script>

<style scoped lang="scss">

</style>
