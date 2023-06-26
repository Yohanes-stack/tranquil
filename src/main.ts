import { createApp } from 'vue'
import App from './App.vue'

// 路由
import router from './router'

// pinia存储
import { createPinia } from 'pinia'
const pinia = createPinia()

// 配合pinia持久化本地存储 yarn add pinia-plugin-persist
import piniaPluginPersist from 'pinia-plugin-persist'
pinia.use(piniaPluginPersist)

// 引入mock
import "~/mock/index.js"

// 引入ant
import 'ant-design-vue/dist/antd.css';

createApp(App).use(router).use(pinia).mount('#app')
