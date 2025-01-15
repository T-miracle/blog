import { ComponentCustomOptions } from 'vue';

export type NanoActionBarButtonType = {
    id: string,
    icon: ComponentCustomOptions,
    disabled?: () => boolean,
    clickFn: () => void
}
