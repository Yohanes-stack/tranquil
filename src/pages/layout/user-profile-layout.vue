<template>
  <a-layout class="content-layout">
    <!-- 左侧侧边栏 -->
    <a-layout-sider class="sider" :width="350">
      <!-- 个人信息模块 -->
      <div class="profile-module">
        <!-- 个人信息内容 -->
        <profileSummary></profileSummary>
      </div>

      <!-- 虚拟成就模块 -->
      <div class="achievements-module">
        <!-- 虚拟成就内容 -->
      </div>
    </a-layout-sider>

    <!-- 中间内容区域 -->
    <a-layout class="content-area">
      <!-- 第一块代办列表 -->
      <div class="todo-list content-module">
        <!-- 代办列表内容 -->
      </div>

      <!-- 代办列表内容下方，活跃统计模块 -->
      <div class="activity-stats content-module">
        <!-- 活跃统计模块内容 -->
      </div>

      <!-- 活跃统计模块下方，活动状态模块 -->
      <div class="activity-status content-module">
        <!-- 活动状态模块内容 -->
      </div>
    </a-layout>
  </a-layout>
</template>


<script>
import profileSummary from '../org/tranquil/userProfile/profile-summary.vue';
import contributionGraph from '../org/tranquil/userProfile/contribution-graph.vue';
export default{
  name: 'ContentLayout',
  components: {
    profileSummary,
    contributionGraph
  }

}
</script>



<style scoped>

*{
  background-color: #f0f2f5 !important;
}
.ant-layout-sider{
  border: none !important;
}
.content-layout {
  min-height: 100vh;
  background-color: #f0f2f5;
}

.sider {
  background-color: #f0f2f5;
  padding: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.profile-module {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.achievements-module {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.content-area {
  display: flex;
  padding: 20px;
}

.content-module {
  flex: 1;
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}
</style>
