<template>
  <div class="navbar">
    <a-row>
      <a-col :span="6">
        <!-- 左侧导航内容 -->
        <div class="nav-left">

          <a-avatar src="logo2.png" :size="32" @click="routerHome" style="cursor:pointer;"/>

        </div>
      </a-col>
      <a-col :span="6"></a-col>
      <a-col :span="4">
        <!-- 中间导航内容 -->
        <div class="nav-center">
          <!--          <a-input-search v-model:value="value" placeholder="input search loading deault" class="nav-search"/>-->

        </div>
      </a-col>
      <a-col :span="1"></a-col>
      <a-col :span="4">
        <!-- 右侧导航内容 -->
        <div class="nav-right flex-container">
          <div class="flex-item" style="height:100%;flex:1;cursor:pointer;">
            <Badge :count="notificationCount" style="display:block;margin-top:6px;width:2.5em;">
              <BellOutlined style="font-size: 24px;cursor:pointer;"/>
            </Badge>
          </div>
          <!--            <button @click="increaseCount">增加通知数量</button>-->


          <div  class="flex-item" style="height:100%;flex:1;">
            <div class="flame-icon" style="cursor:pointer;">
              <Badge :count="heatCount"  style="display:block;margin-top:6px;width:2.5em;">
                <FireOutlined style="font-size:24px"/>
              </Badge>
            </div>
          </div>

          <div  class="flex-item" style="height:100%;flex:1;">
            <div class="flame-icon" style="cursor:pointer;">
              <div style="margin-top:6px;width:2.5em;">
                <SyncOutlined   style="font-size:24px"/>
              </div>
            </div>
          </div>


          <div  class="flex-item" style="height:100%;flex:3;">
          <a-avatar src="https://avatars.githubusercontent.com/u/76607191?v=4" :size="32"
                    style="box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);cursor:pointer;" @click="showDrawer" />
            <stateDrawer
                :visible="visible"
                :showDrawer="showDrawer"
                :afterVisibleChange="afterVisibleChange">
            </stateDrawer>
          </div>

        </div>
      </a-col>

    </a-row>
  </div>
</template>
<script>
import {ref} from 'vue';
import {Badge} from 'ant-design-vue';
import {BellOutlined} from '@ant-design/icons-vue';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import stateDrawer from './profileActivitySidebar/state-drawer.vue';
import {useRouter} from "vue-router";

export default {
  components: {
    Badge,
    BellOutlined,
    FontAwesomeIcon,
    stateDrawer
  },
  setup() {

    const visible = ref(false);
    const afterVisibleChange = bool => {
      console.log('visible', bool);
    };
    const showDrawer = () => {
      visible.value = !visible.value;
    };


    const notificationCount = ref(0);

    const increaseCount = () => {
      notificationCount.value += 1;
    };
    const router = useRouter();

    const routerHome = () => {
      router.push('/')
    }
    return {
      //铃铛数量
      notificationCount: 99,
      //热度数量
      heatCount: 0,
      increaseCount,
      visible,
      afterVisibleChange,
      showDrawer,
      routerHome
    };
  }
};
</script>
<style>
.navbar {
  background-color: #ffffff;
  color: #fff;
  height: 100%;
}

.ant-input-search {
  border-radius: 45px !important;
}

.nav-left,
.nav-center,
.nav-right {
  padding-top: 8px;
  height: 100%;
}


.flex-container {
  display: flex; /* 使用 Flexbox 布局 */
}

.flex-item {
  /*flex: 1; !* 均分空间，使三个 div 元素平均宽度 *!*/
  /*border: 1px solid #ccc;*/
  box-sizing: border-box;
}

.nav-left {
  font-size: 12px;
  font-weight: bold;
}

.nav-center a,
.nav-right a {
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
}

.nav-center a:hover,
.nav-right a:hover {
  color: #1890ff;
}
</style>
