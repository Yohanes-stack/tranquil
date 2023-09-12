<template>
  <div class="layout">
    <!-- Header -->
    <a-header class="header">
      <appNav/>
    </a-header>
    <router-view></router-view>
    <!-- Footer -->
    <a-footer class="footer">
      <contributionGraph></contributionGraph>
    </a-footer>
  </div>
</template>


<script>
import appNav from "./org/tranquil/app-nav.vue";
import userProfileLayout from "~/pages/layout/user-profile-layout.vue";
import homeLayout from "~/pages/layout/home-layout.vue";
import contributionGraph from './org/tranquil/userProfile/contribution-graph.vue';
export default{
  name: 'App',
  components: {
    appNav,
    contributionGraph,
    homeLayout,
    userProfileLayout
  }

}
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

.footer {
  background-color: #001529;
  color: #fff;
  text-align: center;
  height: 100px; /* 设置底部高度为 100px */
  line-height: 100px;
}
</style>


