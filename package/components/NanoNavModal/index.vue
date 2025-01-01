<template>
    <div
        v-if="ctl.hideHeaderTopNav"
        class="nav-area fixed z-100 flex flex-col w-72vw h-screen bg-white p-4"
        :class="{ 'open': openStatus }"
    >
        <div class="shrink-0 font-bold text-4">
            导航
        </div>
        <div class="grow min-h-0 overflow-y-auto">
            <div
                v-for="nav in navList"
                :key="nav.link"
                class=""
            >
                <a
                    v-if="nav.link"
                    :href="nav.link"
                    class="text-3.5"
                    @click="close"
                >
                    {{ nav.text }}
                </a>
                <div v-else>
                    <p class="text-3.5">
                        {{ nav.text }}
                    </p>
                    <div
                        v-for="subNav in nav.items"
                        :key="subNav.link"
                        class="ml-6"
                    >
                        <a
                            :href="subNav.link"
                            class="text-3.5"
                            @click="close"
                        >
                            {{ subNav.text }}
                        </a>
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

    const ctl = controllerStore();

    import emitter from '../../emitter';

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
    .nav-area {
        transform: translateX(-100%);
        transition: transform 0.25s ease;
        overscroll-behavior: contain;
    }

    .nav-area.open {
        transform: translateX(0);
        transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    }
</style>
