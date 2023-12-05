<template>
  <div style="height: 100%">
    <!-- 卡片组 -->
<!--    <a-page-header-->
<!--        class="demo-page-header"-->
<!--        style="border: 1px solid rgb(235, 237, 240);"-->
<!--        title="专注"-->
<!--    >-->
<!--      <a-descriptions size="small" :column="3">-->
<!--        <a-descriptions-item>-->
<!--          <a-card hoverable style="width: 300px" class="card" @click="openCountdownPopover">-->
<!--            <template #cover>-->
<!--              <img-->
<!--                  alt="example"-->
<!--                  src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=800"-->
<!--                  style="height: 180px; width: 300px; border-radius: 15px 15px 0px 0px;"-->
<!--              />-->
<!--            </template>-->
<!--            <template #actions>-->
<!--              <setting-outlined key="setting" />-->
<!--              <edit-outlined key="edit" />-->
<!--              <ellipsis-outlined key="ellipsis" />-->
<!--            </template>-->
<!--            <a-card-meta title="快速开始" description="快速开始专注统计">-->
<!--              <template #avatar>-->
<!--                <a-avatar src="https://joeschmoe.io/api/v1/random" />-->
<!--              </template>-->
<!--            </a-card-meta>-->
<!--          </a-card>-->
<!--          &lt;!&ndash; 添加更多卡片项 &ndash;&gt;-->
<!--        </a-descriptions-item>-->
<!--      </a-descriptions>-->
<!--    </a-page-header>-->

    <!-- 内容 -->
    <div>
      <mainContentCard></mainContentCard>
    </div>

    <div style="width: 200px; margin: 0 auto;">
      <a-pagination v-model:current="current" simple :total="50" style="margin-top: 20px;" />
    </div>
  </div>

  <!-- 倒计时弹窗 -->
  <CountdownPopup ref="countdownRef">
    <div class="count-down">
      <p>{{ formattedTime }}</p>
    </div>
  </CountdownPopup>
</template>

<script setup>
import mainContentCard from "./main-content-card.vue";
import CountdownPopup from "../profileActivitySidebar/count-down-round.vue"; // 根据实际路径修改
import {defineExpose, ref} from "vue";

const current = ref(1);
const formattedTime = ref("");
const countdownPopupRef = ref(null)
const openCountdownPopover = () => {
  if (countdownPopupRef.value) {
    debugger
    countdownPopupRef.value.timeInSeconds = 3600
    countdownPopupRef.value.openCountdownPopover();
  }
};

defineExpose({
  openCountdownPopover,
});


</script>

<style>
.card {
  border-radius: 15px;
  margin-right: 26px;
}
</style>
