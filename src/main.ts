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

// 导入组件库
import * as antIcon from '@ant-design/icons-vue'

const app = createApp(App);

// 注册组件
Object.keys(antIcon).forEach(key => {
    app.component(key, antIcon[key])
});

// 添加到全局
app.config.globalProperties.$antIcons = antIcon;

app.use(router).use(pinia).mount('#app');
