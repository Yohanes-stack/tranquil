<template>
  <div>
<!--    <a-button type="primary" @click="showModal">打开模态对话框</a-button>-->
    <a-modal v-model:visible="visible" title="模态对话框" @ok="handleOk" @cancel="handleCancel">
      <emoji-picker @emoji="insert" :search="search">
        <div slot="emoji-invoker" slot-scope="{ events: { click: clickEvent } }" @click.stop="clickEvent">
          <button type="button">open</button>
        </div>
        <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
          <div>
            <div>
              <input type="text" v-model="search">
            </div>
            <div>
              <div v-for="(emojiGroup, category) in emojis" :key="category">
                <h5>{{ category }}</h5>
                <div>
            <span
                v-for="(emoji, emojiName) in emojiGroup"
                :key="emojiName"
                @click="insert(emoji)"
                :title="emojiName"
            >{{ emoji }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </emoji-picker>
      <a-input v-model="inputText" placeholder="请输入内容"/>
    </a-modal>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import {Button, Modal, Input} from 'ant-design-vue';
import {EmojiPicker} from 'vue-emoji-picker';

export default defineComponent({
  components: {
    'a-button': Button,
    'a-modal': Modal,
    'a-input': Input,
    'emoji-picker': EmojiPicker
  },
  data() {
    return {
      visible: false,
      inputText: '',
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      console.log('Input Text:', this.inputText);
      this.visible = false;
      this.inputText = '';
    },
    handleCancel() {
      this.visible = false;
      this.inputText = '';
    },
    insert(emoji) {
      this.inputText += emoji
    },
  },
});
</script>
