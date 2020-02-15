<template>
  <div class="wrapper">
    <div class="location_wrapper">
      <van-icon class="loc_icon" name="location-o" size="20px" />
      <span class="address">{{"请选择位置请选择位置"}}</span>
    </div>
    <div class="search_wrapper">
      <div class="search_content">
        <van-icon class="search_icon" name="search" size="20px" />
        <span class="search_title">输入商品名称</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  height: 55px;
  line-height: 55px;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  display: flex;
  color: #fff;
  z-index: 2;
  .location_wrapper {
    margin-top: 10px;
    margin-left: 3px;
    position: relative;
    height: 33px;
    line-height: 33px;
    width: 33%;
    white-space: nowrap;
    opacity: 0.6;
    background-color: black;
    border-radius: 150px;
    .loc_icon {
      position: absolute;
      left: 7px;
      top: 7px;
      color: #999;
    }
    .address {
      padding-left: 32px;
      display: inline-block;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 70%;
    }
  }
  .search_wrapper {
    flex: 1;
    height: 55px;
    line-height: 55px;
    // background-color: pink;
    .search_content {
      margin: 11px 5px 0;
      flex: 1;
      height: 33px;
      line-height: 33px;
      text-align: center;
      background-color: #fff;
      border-radius: 15px;
      color: #999;
      .search_icon {
        margin-top: 8px;
      }
      .search_title {
        display: inline-block;
        vertical-align: top;
        margin-left: 5px;
        font-size: 16px;
      }
    }
  }
}
</style>
