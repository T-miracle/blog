// uno.config.ts
import {
    defineConfig,
    presetUno,
    presetWebFonts,
    presetAttributify,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss';

export default defineConfig({
    shortcuts: [
        // ...
        [ 'flex-center', 'flex items-center justify-center' ]
    ],
    theme: {
        colors: {
            // ...
        }
    },
    presets: [
        presetUno(),
        presetAttributify({ /* preset options */ }),
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
});
