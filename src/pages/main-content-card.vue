<template>
  <div class="card-list">
    <a-card v-for="post in posts" :key="post.id" class="post-card">
      <div classs="total">
        <a-avatar :src="post.avatar" :size="32"/>
        <div class="name-time">
          <p class="post-title">{{ post.name }}</p>
          <p class="post-time">{{ post.time }}</p>
        </div>
      </div>
      <p class="post-content">{{ post.content }}</p>
      <a-tooltip placement="top">
        <template slot="title">{{ post.content }}</template>
        <template slot="default">
          <a-button type="link">查看内容</a-button>
        </template>
      </a-tooltip>
      <div class="post-tags">
        <a-tag v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</a-tag>
      </div>
    </a-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F0c71ab96-68df-4649-9a1d-dafaf55d8730%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695279484&t=2999d950dfdab665cff58784b285da3b',
          name: '用户名',
          time: '发表时间',
          content: '这是一篇文章内容，内容超出部分将显示省略号。',
          tags: ['标签1', '标签2']
        }, {
          id: 2,
          avatar: 'https://img2.baidu.com/it/u=2530819475,1294900637&fm=253&fmt=auto&app=138&f=JPEG?w=508&h=500',
          name: '用户名',
          time: '发表时间',
          content: '这是一篇文章内容，内容超出部分将显示省略号。',
          tags: ['标签1', '标签2']
        }, {
          id: 3,
          avatar: '头像链接',
          name: '用户名',
          time: '发表时间',
          content: '这是一篇文章内容，内容超出部分将显示省略号。',
          tags: ['标签1', '标签2']
        }, {
          id: 4,
          avatar: '头像链接',
          name: '用户名',
          time: '发表时间',
          content: '这是一篇文章内容，内容超出部分将显示省略号。',
          tags: ['标签1', '标签2']
        },
        // 添加更多文章数据...
      ]
    };
  }
};
</script>

<style>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.post-card {
  width: 100%;
  padding: 20px;

}

.name-time {
  width: 100px;
  margin: 0px;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
}
.total{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.post-title {
  font-size: 18px;
  font-weight: bold;
}

.post-time {
  color: #888;
  margin-top: 5px;
}

.post-content {
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post-tags {
  margin-top: 10px;
}

.tag {
  margin-right: 5px;
}
</style>
