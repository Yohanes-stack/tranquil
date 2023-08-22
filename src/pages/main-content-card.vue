<template>
  <div class="card-list" style="margin-top:15px;">
    <a-card v-for="post in posts" :key="post.id" class="post-card" hoverable>
      <div class="total">
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
          name: 'Yohanes',
          time: '2021-01-01',
          content: 'SPI package allowing Spring AOP framework to handle arbitrary advice types.\n' +
              'Users who want merely to use the Spring AOP framework, rather than extend its capabilities, don\'t need to concern themselves with this package.\n' +
              '\n' +
              'You may wish to use these adapters to wrap Spring-specific advices, such as MethodBeforeAdvice, in MethodInterceptor, to allow their use in another AOP framework supporting the AOP Alliance interfaces.\n' +
              '\n' +
              'These adapters do not depend on any other Spring framework classes to allow such usage.',
          tags: ['Java', 'Spring']
        }, {
          id: 2,
          avatar: 'https://img2.baidu.com/it/u=2530819475,1294900637&fm=253&fmt=auto&app=138&f=JPEG?w=508&h=500',
          name: 'Power',
          time: '2021-01-01',
          content: '这是一篇文章内容，内容超出部分将显示省略号。',
          tags: ['标签1', '标签2']
        }, {
          id: 3,
          avatar: '头像链接',
          name: 'Join',
          time: '2021-01-01',
          content: '这是一篇文章内容，内容超出部分将显示省略号。',
          tags: ['标签1', '标签2']
        }, {
          id: 4,
          avatar: '头像链接',
          name: 'Mary',
          time: '2021-01-01',
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
  height:160px;
  border-radius: 15px;
}

.name-time {
  height:100%;
  margin: 0px;
}
.name-time p{
  margin-bottom: 0;
}
.total{
  height:50px;
  display: grid;
  grid-template-columns: 1fr 23fr; /* 将容器分成两列，每列宽度相等 */

}

.post-title {
  font-size: 14px;
  font-weight: bold;
  color:#365781;
}

.post-time {
  color: #888;
  font-size:12px;
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
  display: inline-block;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 20px;
  background-color: #3d7d3f;
  color: white;
}
</style>
