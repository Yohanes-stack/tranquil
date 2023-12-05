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
        <div id="myEcharts" :style="{ width: '900px', height: '300px' }"></div>
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
import { onMounted, onUnmounted } from 'vue';
import * as echarts from "echarts";
export default {
  name: 'ContentLayout',
  components: {
    profileSummary,
    contributionGraph
  },
  setup() {
    /// 声明定义一下echart
    let echart = echarts;

    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      echart.dispose();
    });


    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(document.getElementById("myEcharts"), "dark");
      // 把配置和数据放这里
      chart.setOption(option);
      window.onresize = function () {
        //自适应大小
        chart.resize();
      };
    }

    const data = genData(50);
    option = {
      title: {
        text: '同名数量统计',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData
      },
      series: [
        {
          name: '姓名',
          type: 'pie',
          radius: '55%',
          center: ['40%', '50%'],
          data: data.seriesData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    function genData(count) {
      // prettier-ignore
      const nameList = [
        '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
      ];
      const legendData = [];
      const seriesData = [];
      for (var i = 0; i < count; i++) {
        var name =
          Math.random() > 0.65
            ? makeWord(4, 1) + '·' + makeWord(3, 0)
            : makeWord(2, 1);
        legendData.push(name);
        seriesData.push({
          name: name,
          value: Math.round(Math.random() * 100000)
        });
      }
      return {
        legendData: legendData,
        seriesData: seriesData
      };
      function makeWord(max, min) {
        const nameLen = Math.ceil(Math.random() * max + min);
        const name = [];
        for (var i = 0; i < nameLen; i++) {
          name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
        }
        return name.join('');
      }
    }


    return { initChart };
  }

}
</script>



<style scoped>
* {
  /*background-color: #f0f2f5 !important;*/
}

.ant-layout-sider {
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
