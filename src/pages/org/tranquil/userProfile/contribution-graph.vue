<template>
  <div class="contributions-calendar">
    <div class="calendar-grid">
      <div v-for="(day, index) in days" :key="index" class="calendar-day" :style="getDayStyle(day)"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      days: [], // 你需要填充的日期数据
    };
  },
  methods: {
    getDayStyle(day) {
      const color = getColorBasedOnCommits(day.commits); // 根据提交数量获取颜色
      return {
        backgroundColor: color,
      };
    },
  },
});

// 根据提交数量获取颜色，示例逻辑
function getColorBasedOnCommits(commits) {
  if (commits === 0) {
    return '#ebedf0'; // 灰色
  } else if (commits < 5) {
    return '#c6e48b'; // 浅绿
  } else if (commits < 10) {
    return '#7bc96f'; // 绿色
  } else if (commits < 20) {
    return '#239a3b'; // 深绿
  } else {
    return '#196127'; // 更深的绿色
  }
}
</script>

<style scoped>
.contributions-calendar {
  width: 100%;
  display: flex;
  justify-content: center;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 12px); /* 一周七天 */
  grid-gap: 1px;
}

.calendar-day {
  width: 12px;
  height: 12px;
}
</style>