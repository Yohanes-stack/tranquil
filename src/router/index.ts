import {createRouter, createWebHistory} from 'vue-router'

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
            redirect: "/home",
            children: [
                {
                    path: '/home',
                    component: () => import('~/pages/layout/home-layout.vue'),

                },
                {
                    path: '/userProfile',
                    component: () => import('~/pages/layout/user-profile-layout.vue'),

                },]
        },
    ],
})

export default router