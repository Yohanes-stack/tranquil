<template>
  <div>
    <a-drawer
        :title="name"
        placement="right"
        :visible="visible"
        @close="showDrawer"
        @afterVisibleChange="afterVisibleChange"
        class="state-drawer"
    >
      <slot>
        <a-menu mode="vertical" :theme="theme">
          <a-menu-item key="1">
            <SmileOutlined />
            设置状态
          </a-menu-item>
          <a-divider />
          <a-menu-item key="2">
            <UserOutlined />
            个人资料
          </a-menu-item>
          <a-menu-item key="3">
            <SettingOutlined />
            隐私设置
          </a-menu-item>
        </a-menu>
      <state-selected></state-selected>
      </slot>
    </a-drawer>
  </div>
</template>


<script>
import { defineComponent, ref, watch } from 'vue';
import { Menu } from 'ant-design-vue';
import stateSelected from "~/pages/org/tranquil/state-selected.vue";
export default defineComponent({
  components: {
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'state-selected': stateSelected
  },
  props: {
    visible: Boolean,
    showDrawer: Function,
    afterVisibleChange: Function
  },
  setup() {
    return{
      name: 'Yohanes',
      theme: 'light', // 切换为 'light' 或 'dark'
    }
  }


});
</script>
<style scope>
.ant-drawer-content-wrapper{

  width:300px !important;
}
.ant-drawer-content{
  border-radius: 10px !important;
}
.ant-menu-item{
  /*height:30px !important;*/

}
.ant-menu-item{
  border-radius: 10px !important;
  color:#000 !important;
}

.ant-menu-item:hover {
  background-color: #f0f2f4;
}

/* 鼠标悬浮在 a-menu-item 上时，不改变文字颜色 */
.ant-menu-item:hover a {
  color: inherit;
}

</style>
