<template>
  <div id="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#75a342">
      <van-swipe-item v-for="(item,index) in swiperList" :key="index">
        <img :src="item.icon_url" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    swiperList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped >
#swiper {
  width: 100%;
}
/*  穿透样式 */
#swiper /deep/ .van-swipe__indicator {
  background-color: rgb(39, 37, 37);
}
#swiper /deep/ img {
  width: 100%;
}
</style>
