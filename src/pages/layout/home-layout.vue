<template>

  <!-- Content -->
  <a-layout class="layout-content">
    <!-- Sider (Left) -->
    <a-layout-sider class="sider" :width="170"></a-layout-sider>

    <!-- Content Area -->
    <a-layout class="content">
      <app-main/>
    </a-layout>

    <!-- Sider (Right) -->
    <a-layout-sider class="sider" :width="200"></a-layout-sider>
  </a-layout>
</template>

<script>
import appMain from "../org/tranquil/home/app-main.vue";

export default {
  name: 'home-layout',
  components: {
    appMain
  }

}
</script>

<style>
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
</style>




