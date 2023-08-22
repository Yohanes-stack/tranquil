<template>
  <div class="navbar">
    <a-row>
      <a-col :span="6">
        <!-- 左侧导航内容 -->
        <div class="nav-left">
          <img
              src="https://imgproxy-us-east-2-new.icons8.com/oT-MyLMTqQUutSKfLI2VOdJG-WcKucoJJ1DY3i7QEsg/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTgx/LzNkZjQ1Y2VhLTY5/MTEtNDViMS05NTEw/LTYyZTk2NDRmYWRl/YS5wbmc.png/download?filename=biro-blue-camera-with-flash-on-orange-strap-1.png"
              alt="logo"
              style="width:30px;height:30px;border-radius：50%;">
        </div>
      </a-col>
      <a-col :span="8">
        <!-- 中间导航内容 -->
        <div class="nav-center">
          <a-input-search v-model:value="value" placeholder="input search loading deault" loading />

        </div>
      </a-col>
      <a-col :span="6">
        <!-- 右侧导航内容 -->
        <div class="nav-right">


          <img
              src="https://imgproxy-us-east-2-new.icons8.com/oT-MyLMTqQUutSKfLI2VOdJG-WcKucoJJ1DY3i7QEsg/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTgx/LzNkZjQ1Y2VhLTY5/MTEtNDViMS05NTEw/LTYyZTk2NDRmYWRl/YS5wbmc.png/download?filename=biro-blue-camera-with-flash-on-orange-strap-1.png"
              alt="logo"
              style="width:30px;height:30px;border-radius：50%;">
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>


</script>
<style>
.navbar {
  background-color: #ffffff;
  color: #fff;
  height: 100%;
}

.nav-left,
.nav-center,
.nav-right {
  padding-top: 8px;
  height: 100%;
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
