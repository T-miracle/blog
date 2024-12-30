<template>
    <ul class="VPDocOutlineItem" :class="root ? 'relative z-1' : 'px-4'">
        <li v-for="{ children, link, title } in headers">
            <a class="block text-[0.875rem] font-400 select-none py-.6" :href="link" @click="onClick" :title="title">
                {{ title }}
            </a>
            <template v-if="children?.length">
                <NanoOutlineItem :headers="children"/>
            </template>
        </li>
    </ul>
</template>

<script setup lang="ts">
    import NanoOutlineItem from '@NanoUI/NanoOutlineItem/index.vue';
    // @ts-expect-error outline
    import type { MenuItem } from 'vitepress/dist/client/theme-default/composables/outline';
    import emitter from '../../emitter';

    defineProps<{
        headers: MenuItem[]
        root?: boolean
    }>();

    function onClick({ target: el }: Event) {
        const id = (el as HTMLAnchorElement).href!.split('#')[1];
        const heading = decodeURIComponent(id);
        emitter.emit('scroll-to-hash', heading);
    }
</script>

<style scoped lang="scss">
    .active {
        color: #5a55c0;
    }
</style>
