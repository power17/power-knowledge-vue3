import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// Icon
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import UnoCSS from 'unocss/vite'
import Layouts from 'vite-plugin-vue-layouts'
import { viteMockServe } from 'vite-plugin-mock'
// px转化成vw
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        // 开启defineModel，3.3实验特性
        defineModel: true,
        // 开启解构props
        propsDestructure: true
      }
    }),
    vueJsx(),
    // 自动化路由
    Pages(),
    // 自动引入组
    // 自动布局
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    Components({
      resolvers: [IconsResolver({ prefix: 'i' })]
    }),
    Icons({
      autoInstall: true
    }),
    UnoCSS(),
    // mock
    viteMockServe({
      mockPath: 'mock',
      enable: false
    }),
    // 自动引入核心库
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        // custom
        {
          axios: [
            // default imports
            ['default', 'axios'] // import { default as axios } from 'axios',
          ]
        },
        // example type import
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport8plugin({
          unitToConvert: 'px',
          viewportWidth: (file) => {
            let num = 1920
            if (file.indexOf('m_') !== -1) {
              num = 375
            }
            return num
          },
          unitPrecision: 5, // 单位转换后保留的精度
          propList: ['*', '!font-size'], // 能转化为vw的属性列表
          viewportUnit: 'vw', // 希望使用的视口单位
          fontViewportUnit: 'vw', // 字体使用的视口单位
          selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
          minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
          mediaQuery: true, // 媒体查询里的单位是否需要转换单位
          replace: true, //  是否直接更换属性值，而不添加备用属性
          exclude: [/node_modules\/ant-design-vue/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
          landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
          landscapeUnit: 'vw', // 横屏时使用的单位
          landscapeWidth: 1024 // 横屏时使用的视口宽度
        })
      ]
    }
  }
})
