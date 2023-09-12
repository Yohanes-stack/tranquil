<template>

  <a-modal   :visible="popupVisible"
             @ok="handleVisibleChange"
             @click="handleClick"
             @mousedown="startPressTimer"
             @mouseup="stopPressTimer"
             @mouseleave="stopPressTimer"
             @touchstart="startPressTimer"
             @touchend="stopPressTimer"
             @touchcancel="stopPressTimer"
             :footer="null"
             :closable="false"
             class="count-down">

    <div class="_base-count-down no-rtl">
      <div class="content">
        <slot v-bind="{
        d: days, h: hours, m: mins, s: seconds,
        hh: `00${hours}`.slice(-2),
        mm: `00${mins}`.slice(-2),
        ss: `00${seconds}`.slice(-2),
      }"></slot>
      </div>
    </div>
  </a-modal>
</template>

<script setup>
import {ref, watch, onMounted, computed} from 'vue';

const days = ref('0');
const hours = ref('00');
const mins = ref('00');
const seconds = ref('00');
const timer = ref(null);
const curTime = ref(0);
const popupVisible = ref(false);

const pressTimer = ref(null);
const pressStartTime = ref(null);
const pressWidth = ref(0);
const maxPressTime = 3000; // 3 seconds


const pressProgress = computed(() => {
  if (!pressStartTime.value || !pressTimer.value) {
    return 0;
  }
  const currentTime = Date.now();
  const elapsedTime = currentTime - pressStartTime.value;
  return (elapsedTime / maxPressTime) * 100;
});


const props = defineProps({
  time: {
    type: [Number, String],
    default: 0
  },
  refreshCounter: {
    type: [Number, String],
    default: 0
  },
  end: {
    type: [Number, String],
    default: 0
  },
  isMiniSecond: {
    type: Boolean,
    default: false
  }
});

const duration = computed(() => {
  if (props.end) {
    let end = String(props.end).length >= 13 ? +props.end : +props.end * 1000;
    end -= Date.now();
    return end;
  }
  const time = props.isMiniSecond ? Math.round(+props.time / 1000) : Math.round(+props.time);
  return time;
});

const durationFormatter = (time) => {
  if (!time) return {ss: 0};
  let t = time;
  const ss = t % 60;
  t = (t - ss) / 60;
  if (t < 1) return {ss};
  const mm = t % 60;
  t = (t - mm) / 60;
  if (t < 1) return {mm, ss};
  const hh = t % 24;
  t = (t - hh) / 24;
  if (t < 1) return {hh, mm, ss};
  const dd = t;
  return {dd, hh, mm, ss};
};

const countDown = () => {
  curTime.value = Date.now();
  getTime(duration.value);
};

const getTime = (time) => {
  if (timer.value) clearTimeout(timer.value);
  if (time < 0) return;

  const {dd, hh, mm, ss} = durationFormatter(time);
  days.value = dd || 0;
  hours.value = hh || 0;
  mins.value = mm || 0;
  seconds.value = ss || 0;

  timer.value = setTimeout(() => {
    const now = Date.now();
    const diffTime = Math.floor((now - curTime.value) / 1000);
    const step = diffTime > 1 ? diffTime : 1;
    curTime.value = now;
    getTime(time - step);
  }, 1000);
};

const startPressTimer = () => {
  pressStartTime.value = Date.now();
  pressTimer.value = setInterval(updatePressWidth, 10);
};

const stopPressTimer = () => {
  clearInterval(pressTimer.value);
  pressTimer.value = null;
  pressStartTime.value = null;
  pressWidth.value = 0;
};

const updatePressWidth = () => {
  pressWidth.value = Math.min(pressProgress.value, 100);
};

const handleClick = () => {
  console.log("aaa")
  if (pressTimer.value && pressProgress.value >= 100) {
    // Long press detected, close the modal
    popupVisible.value = false;
    stopPressTimer();
  }
};
const onBeforeUnmount = () => {
  stopPressTimer();
};


onMounted(countDown);

watch([duration, props.refreshCounter], () => {
  countDown();
});

const handleVisibleChange = (visible) => {
  popupVisible.value = visible;
};
const openPopover = () => {
  popupVisible.value = true;
  console.log(popupVisible)
};


defineExpose({
  openPopover,
  stopPressTimer,
  handleClick,
  startPressTimer
});

</script>

<style scope>

._base-count-down {
  color: #fff;
  text-align: left;
  position: relative;
}

._base-count-down .content {
  width: auto;
  display: flex;
  align-items: center;
}

._base-count-down span {
  display: inline-block;
}

._base-count-down .section {
  position: relative;
}

.press-bar {
  height: 10px;
  background-color: darkblue;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.1s linear;
}
</style>
