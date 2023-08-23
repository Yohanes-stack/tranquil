// 统一管理所有的模块

import useHomeStore from "./modules/home";
import useQueryStore from "./modules/query";

import { createRouter, createWebHistory } from "vue-router";

import UserProfile from "org/modulesUserProfile.vue"; // 假设 UserProfilePage 是你的个人主页组件

const useStore = () => {
  return {
    home: useHomeStore(),
    query: useQueryStore(),
  }
}

const routes = [
  // 其他路由配置...
  {
    path: "/user-profile",
    name: "UserProfile",
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default useStore

export default router

