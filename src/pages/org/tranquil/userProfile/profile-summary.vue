<!--个人概要-->
<template>
  <div class="user-profile">
    <!-- 用户头像、昵称等信息 -->
    <div class="user-info" style="margin:0 auto;width:256px;">
      <a-avatar :size="256">
        <template #icon>
          <UserOutlined/>
        </template>
      </a-avatar>
      <p class="username" style="text-align:center;font-size:30px">Yohanes</p>
      <!--      简介-->
      <h3>路漫漫其修远兮，吾将上下而求索</h3>

      <a-button block style="border-radius:5px;background-color:#f6f8fa" class="edit-summary">编辑简介</a-button>
      <!--      <a-button size="200" @click="openNotification">编辑简介</a-button>-->
    </div>
  </div>
</template>


<script lang="ts" setup>
import {notification} from 'ant-design-vue';

const openNotification = () => {
  notification.open({
    message: '👋，消息来咯',
    description:
        '这是一个消息',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
</script>

<style scoped>
.edit-summary {
  background-color: #f6f8fa; /* 默认蓝色背景 */
  border-color: #d6d8db;
  color: #000;
}

.edit-summary:hover {
  background-color: #f3f4f6 !important; /* 深灰色背景 */
  /*border-color: #333;*/
}

</style>

