<template>
  <div>
    <CountdownPopup :time="timeInSeconds" ref="countdownPopupRef">
      <template v-slot="timeObj">
        <div class="count-down" style="height: 100%; width: 200px; margin: 0 auto;">
          <div class="count-down-round">
            <p style="color: #000000; font-size: 35px; text-align: center;">
              {{ timeObj.mm }}:{{ timeObj.ss }}
            </p>
          </div>
        </div>
      </template>
    </CountdownPopup>
    <button @click="openCountdownPopover">打开倒计时弹窗</button>
  </div>
</template>

<script setup>
import CountdownPopup from "./count-down.vue";
import { ref, defineExpose } from "vue";

const countdownPopupRef = ref(null);
const timeInSeconds = ref(3600);

    const openCountdownPopover = () => {
      if (countdownPopupRef.value) {
        debugger
        countdownPopupRef.value.openPopover();
      }
    };

defineExpose({
  openCountdownPopover,
  timeInSeconds
});
</script>

<style>
.count-down-round {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 5px solid #b9b6b4;
  height: 200px;
  width: 200px;
  margin: 0 auto;
}

.count-down-round p {
  text-align: center;
  margin: 0;
}
</style>
