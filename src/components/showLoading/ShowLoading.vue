<template>
  <div class="show_loading">
    <van-loading class="loading" type="spinner" size="50px" color="#1989fa" />
  </div>
</template>

<style scoped lang="less">
.show_loading {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  .loading {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%);
  }
}
</style>
