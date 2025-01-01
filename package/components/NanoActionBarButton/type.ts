import { ComponentCustomOptions } from 'vue';

export type NanoActionBarButtonType = {
    id: string,
    icon: ComponentCustomOptions,
    clickFn: () => any
}
