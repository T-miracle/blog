// uno.config.ts
import {
    defineConfig,
    presetUno, presetWebFonts,
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
        presetRemToPx({
            baseFontSize: 4
        }),
        presetWebFonts({
            provider: 'none',
            fonts: {
                SmileySans: 'SmileySans',
                ColaBear: 'ColaBear'
            }
        })
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ]
})
