<template>
    <div
        v-if="ctl.hideHeaderTopNav"
        class="absolute top-0 left-0 z-100 w-0 h-full transition-all duration-250 ease-in-out overflow-hidden"
        :class="{ 'w-80!': openStatus }"
    >
        <div class="flex flex-col w-full h-full bg-white p-[var(--base-size)] rounded-[6px_0_0_6px]">
            <div class="grow min-h-0 overflow-y-auto">
                <div
                    v-for="nav in navList"
                    :key="nav.link"
                    class="py-[calc(var(--base-size)*.25)]"
                >
                    <a
                        v-if="nav.link"
                        :href="nav.link"
                        class="text-[calc(var(--base-size)*1.125)]! whitespace-nowrap text-ellipsis"
                        @click="close"
                    >
                        {{ nav.text }}
                    </a>
                    <div v-else>
                        <p class="text-[calc(var(--base-size)*1.125)]! text-gray">
                            {{ nav.text }}
                        </p>
                        <div
                            v-for="subNav in nav.items"
                            :key="subNav.link"
                            class="ml-[calc(var(--base-size)*1.5)] py-[calc(var(--base-size)*.25)]"
                        >
                            <a
                                :href="subNav.link"
                                class="text-[calc(var(--base-size)*1.125)]! whitespace-nowrap text-ellipsis"
                                @click="close"
                            >
                                {{ subNav.text }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useData } from 'vitepress';
    import { onMounted, onUnmounted, ref } from 'vue';
    import { controllerStore } from '@store/controller';
    import emitter from '../../emitter';

    const ctl = controllerStore();
    const { theme } = useData();
    const navList = theme.value.nav;

    const openStatus = ref(false);

    function close() {
        openStatus.value = false;
        emitter.emit('close-backdrop');
    }

    onMounted(() => {
        emitter.on('open-nav-modal', () => {
            openStatus.value = true;
        });
        emitter.on('close-nav-modal', () => {
            openStatus.value = false;
        });
    });

    onUnmounted(() => {
        emitter.off('open-nav-modal');
        emitter.off('close-nav-modal');
    });
</script>

<style scoped lang="scss">

</style>
