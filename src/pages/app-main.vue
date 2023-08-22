<template>

  <div style="height: 100%">
<!--  卡片组-->
  <a-page-header
      class="demo-page-header"
      style="border: 1px solid rgb(235, 237, 240)"
      title="学习计划"

  >
    <template #extra>
      <a-button key="1" type="primary">添加计划</a-button>
    </template>
    <a-descriptions size="small" :column="3">
      <a-descriptions-item>
        <a-card hoverable class="card" style="width: 240px;">
          <template #cover>
            <img alt="example" src="https://pic.leetcode.cn/1689928177-naxFrJ-pds%20ad%20cover.png"/>
          </template>
          <a-card-meta title="30天Pandas 挑战">
            <template #description>30天30题上手Pandas</template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="card" style="width: 240px;">
          <template #cover>
            <img alt="example" src="https://pic.leetcode.cn/1690881907-CELYGc-Top%20Interview%20150%20%F0%9F%91%8C@3-240x240.png  "/>
          </template>
          <a-card-meta title="30天Pandas 挑战">
            <template #description>30天30题上手Pandas</template>
          </a-card-meta>
        </a-card>
      </a-descriptions-item>
    </a-descriptions>
  </a-page-header>
<!--内容-->
    <div>
    <mainContentCard></mainContentCard>
    </div>
    <div style="width:200px;margin:0 auto;">
    <a-pagination v-model:current="current" simple :total="50" style="margin-top:20px;"/>
    </div>
  </div>
</template>


<script>
import mainContentCard from "./main-content-card.vue";


export default {
  name: 'app-main',
  components: {
    mainContentCard
  }
}
</script>

<style>
.card {
  border-radius: 15px;
  margin-right: 26px;
}
.content-card{
  border-radius: 15px;
}
</style>