// uno.config.ts
import {
    defineConfig,
    presetUno,
    presetWebFonts,
    presetAttributify,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss';
// @ts-ignore
import presetRemToPx from '@unocss/preset-rem-to-px';

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            // ...
        }
    },
    presets: [
        presetUno(),
        presetAttributify({ /* preset options */ }),
        presetRemToPx({
            baseFontSize: 4
        }),
        presetWebFonts({
            provider: 'none',
            fonts: {
                RecMonoCasual: 'RecMonoCasual'
            }
        })
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ]
})
