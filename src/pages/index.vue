<template>
  <div>
    <a-button type="primary">测试成功</a-button>
  </div>
  <div>{{  tableData }}</div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import { itemPost } from '~/services/query'

const tableData=ref([])
onMounted(() => {
  itemPost().then(res=>{
    tableData.value=res.data.data
    console.log(res.data.data);
  })
})
</script>

<style scoped>

</style>