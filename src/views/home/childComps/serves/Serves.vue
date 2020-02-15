<template>
  <div id="serves">
    <div class="tips">
      <div class="serves_speed">
        <img src="@/images/icon/transport.png" alt />
        <span class="speed_text">最快29分钟送达</span>
      </div>
      <div class="serves_carriage">
        <img src="@/images/icon/money.png" alt />
        <span class="carriage_text">0元起送 0配送费</span>
      </div>
      <div class="serves_sale">
        <img src="@/images/icon/seal.png" alt />
        <span class="sale_text">安心退</span>
      </div>
    </div>
    <img class="adImg" src="http:\/\/img.ddimg.mobi\/o_1dkib68ka1t1i1l0cctkvgi1s0e10.jpg" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
#serves {
  margin-top: 3px;
  width: 100%;
  position: relative;
  .tips {
    display: flex;
    font-size: 10px;
    height: 25px;
    line-height: 25px;
    justify-content: space-between;
    padding: 0 10px;
    .serves_speed {
      width: 33%;
      display: flex;
      // padding-right: 10px;
      img {
        height: 25px;
        width: 25px;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
    .serves_carriage {
      width: 33%;
      display: flex;
      // padding-right: 10px;
      img {
        height: 25px;
        width: 25px;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
    .serves_sale {
      width: 33%;
      display: flex;
      // padding-right: 10px;
      img {
        height: 25px;
        width: 25px;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
  .adImg {
    padding-top: 5px;
    width: 100%;
  }
}
</style>
