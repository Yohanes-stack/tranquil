<template>

  <div style="height: 100%">
    <!--  卡片组-->
    <a-page-header
        class="demo-page-header"
        style="border: 1px solid rgb(235, 237, 240)"
        title="学习计划"

    >
      <a-descriptions size="small" :column="3">
        <a-descriptions-item>
          <a-card hoverable style="width: 300px" class="card">
            <template #cover>
              <img
                  alt="example"
                  src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=800"
                  style="height: 180px;width:300px;border-radius: 15px 15px 0px 0px;"

              />
            </template>
            <template #actions>
              <setting-outlined key="setting" />
              <edit-outlined key="edit" />
              <ellipsis-outlined key="ellipsis" />
            </template>
            <a-card-meta title="Card title" description="This is the description">
              <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random" />
              </template>
            </a-card-meta>
          </a-card>


          <a-card hoverable style="width: 300px" class="card">
            <template #cover>
              <img
                  alt="example"
                  src="https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&w=800"
                  style="height: 180px;width:300px;border-radius: 15px 15px 0px 0px;"

              />
            </template>
            <template #actions>
              <setting-outlined key="setting" />
              <edit-outlined key="edit" />
              <ellipsis-outlined key="ellipsis" />
            </template>
            <a-card-meta title="Card title" description="This is the description">
              <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random" />
              </template>
            </a-card-meta>
          </a-card>



          <a-card hoverable style="width: 300px" class="card">
            <template #cover>
              <img
                  alt="example"
                  src="https://images.pexels.com/photos/73828/volcanic-eruption-eruption-volcano-volcanism-73828.jpeg?auto=compress&cs=tinysrgb&w=800"
                  style="height: 180px;width:300px;border-radius: 15px 15px 0px 0px;"

              />
            </template>
            <template #actions>
              <setting-outlined key="setting" />
              <edit-outlined key="edit" />
              <ellipsis-outlined key="ellipsis" />
            </template>
            <a-card-meta title="Card title" description="This is the description">
              <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random" />
              </template>
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

.content-card {
  border-radius: 15px;
}
</style>