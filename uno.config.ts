import { defineConfig } from 'unocss'
import { presetWind, presetIcons, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerDirectives()]
})
