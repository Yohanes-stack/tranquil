<template>
  <div class="layout">
    <!-- Header -->
    <a-header class="header">
      <appNav/>
    </a-header>

    <!-- Content -->
    <a-layout class="layout-content">
      <!-- Sider (Left) -->
      <a-layout-sider class="sider" :width="170"></a-layout-sider>

      <!-- Content Area -->
      <a-layout class="content">

        <component :is="currentComponent"/>

        <app-main/>
      </a-layout>

      <!-- Sider (Right) -->
      <a-layout-sider class="sider" :width="200"></a-layout-sider>
    </a-layout>

    <!-- Footer -->
    <a-footer class="footer">
      <contributionGraph></contributionGraph>
    </a-footer>
  </div>
</template>


<script>
import appNav from "./org/tranquil/app-nav.vue";
import appMain from "./org/tranquil/app-main.vue";
import uerProfile from './org/tranquil/UserProfile.vue'
import contributionGraph from './org/tranquil/contribution-graph.vue';
export default({
  name: 'App',
  components: {
    appNav,
    appMain,
    contributionGraph,
    uerProfile
  },
  setup() {
    return {
      currentComponent: "appMain", // 初始显示的组件
    }
  }

})
</script>


<style>
.layout {
  min-height: 100vh;
}

.layout .header {
  display: block;
  height: 50px; /* 将 Header 高度设置为 60px */
  background-color: #001529;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
}

.layout-content {
  display: flex;
  flex: 1;
}

.sider {
  background-color: #f0f2f5;
  padding: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.content {
  flex: 1;
  padding: 20px;
  height: 80%;
}

.footer {
  background-color: #001529;
  color: #fff;
  text-align: center;
  height: 100px; /* 设置底部高度为 100px */
  line-height: 100px;
}
</style>
