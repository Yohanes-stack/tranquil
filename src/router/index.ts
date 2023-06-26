import { createRouter, createWebHistory } from 'vue-router'

// 创建路由
const router = createRouter({
  // 创建history模式的路由
  history: createWebHistory(),

  // 创建hash模式的路由
  // history: createWebHashHistory(),

  // 配置路由规则
  routes: [
    {
      path: '/',
      component: () => import('~/pages/index.vue'),
      // 二级路由
      // children: [
      //   {
      //     path: 'index',
      //     component: () => import(''),
      //   }
      // ]
    },
  ],
})

export default router