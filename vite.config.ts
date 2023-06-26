import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// npm i rollup-plugin-visualizer -D   检查打包体积
import { visualizer } from 'rollup-plugin-visualizer'

// 按需引入AntDesign
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// 下载 yarn add @types/node -D
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需引入AntDesign
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  // 配置路径
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  // 打包命令,打包之后会生成一个文件stats.html
  build: {
    rollupOptions: {
      plugins: [visualizer()]
    },
  }
})

