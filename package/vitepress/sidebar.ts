import { computed, ComputedRef, onMounted, Ref, ref, watch, watchEffect, watchPostEffect } from 'vue';
// @ts-expect-error shared
import { isActive, inBrowser } from 'vitepress/dist/client/shared';
// @ts-expect-error sidebar
import { hasActiveLink as containsActiveLink } from 'vitepress/dist/client/theme-default/support/sidebar';
import { useData } from 'vitepress';
import type { DefaultTheme } from 'vitepress/theme';

export interface SidebarControl {
    collapsed: Ref<boolean>
    collapsible: ComputedRef<boolean>
    isLink: ComputedRef<boolean>
    isActiveLink: Ref<boolean>
    hasActiveLink: ComputedRef<boolean>
    hasChildren: ComputedRef<boolean>
    toggle(): void
}

const hashRef = ref(inBrowser ? location.hash : '');
if (inBrowser) {
    window.addEventListener('hashchange', () => {
        hashRef.value = location.hash;
    });
}

export function useSidebarControl(item: ComputedRef<DefaultTheme.SidebarItem>): SidebarControl {
    const { page } = useData();

    const collapsed = ref(false);

    const collapsible = computed(() => {
        return item.value.collapsed != null;
    });

    const isLink = computed(() => {
        return !!item.value.link;
    });

    const isActiveLink = ref(false);
    const updateIsActiveLink = () => {
        isActiveLink.value = isActive(page.value.relativePath, item.value.link);
    };

    watch([ page, item, hashRef ], updateIsActiveLink);
    onMounted(updateIsActiveLink);

    const hasActiveLink = computed(() => {
        if (isActiveLink.value) {
            return true;
        }

        return item.value.items ?
            containsActiveLink(page.value.relativePath, item.value.items) :
            false;
    });

    const hasChildren = computed(() => {
        return !!(item.value.items && item.value.items.length);
    });

    watchEffect(() => {
        collapsed.value = !!(collapsible.value && item.value.collapsed);
    });

    watchPostEffect(() => {
        ;(isActiveLink.value || hasActiveLink.value) && (collapsed.value = false);
    });

    function toggle() {
        if (collapsible.value) {
            collapsed.value = !collapsed.value;
        }
    }

    return {
        collapsed,
        collapsible,
        isLink,
        isActiveLink,
        hasActiveLink,
        hasChildren,
        toggle
    };
}
