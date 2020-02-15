<template>
  <div id="home">
    <div v-if="!isShowLoading">
      <!-- 头部搜索框 -->
      <Header></Header>
      <!-- 轮播图 -->
      <Swiper :swiper-list="swiperList" />
      <!-- serves -->
      <serves />
      <!-- Grid -->
      <grid :grid-list="girdList" />
      <!-- 限时抢购 -->
      <flash-sale :flash-sale-goods-list="flashSaleGoodsList" />
      <!-- 特色专区 -->
      <special-zoon />
      <!-- tab标签页 -->
      <tab-bar
        :tabbar-all-goods-list="tabbarAllGoodsList"
        :flash-sale-goods-list="flashSaleGoodsList"
      />
    </div>
    <!-- 加载中 -->
    <van-loading v-else class="loading" type="spinner" size="50px" color="#1989fa" />
    <!-- 返回顶部 -->
    <back-top @scrollToTop="scrollToTop" />
  </div>
</template>

<script>
import { getHomeData } from "@/network/home";
import BackTop from "@/components/backtop/BackTop";
import MyScroll from "@/components/scroll/MyScroll";

import Header from "./childComps/head/header.vue";
import Swiper from "./childComps/swiper/Swiper";
import Serves from "./childComps/serves/Serves";
import Grid from "./childComps/grid/Grid";
import FlashSale from "./childComps/flash/FlashSale";
import SpecialZoon from "./childComps/special/SpecialZoon";
import TabBar from "./childComps/tabbar/TabBar";

export default {
  name: "Home",
  components: {
    BackTop,
    MyScroll,
    Header,
    Swiper,
    Serves,
    Grid,
    FlashSale,
    SpecialZoon,
    TabBar
  },
  data() {
    return {
      isShowLoading: true, // 是否显示加载中组件
      swiperList: [], // 首页轮播图数据
      girdList: [], // 首页九宫格分类数据
      flashSaleGoodsList: [], // 首页限时抢购数据
      tabbarAllGoodsList: [] // tabbar所有数据
    };
  },
  created() {
    this._getHomeData();
  },
  mounted() {},
  methods: {
    _getHomeData() {
      getHomeData().then(res => {
        const homeData = res.data;
        if (homeData.success) {
          // console.log(homeData);
          // 保存轮播图数据
          this.swiperList = homeData.data.list[0].icon_list;
          // 保存九宫格分类数据
          this.girdList = homeData.data.list[2].icon_list;
          // 保存限时抢购商品数据
          this.flashSaleGoodsList = homeData.data.list[3].product_list;
          // 保存tabbar下的所有数据
          this.tabbarAllGoodsList = homeData.data.list[12].product_list;
          this.isShowLoading = false;
        }
      });
      // this.showBackTop()
    },
    // 监听货到顶部按钮
    scrollToTop() {
      console.log("back");
    }
  }
};
</script>

<style scoped lang="less">
#home {
  position: relative;
  width: 100%;
  height: 1700px;
  background-color: #f5f5f5;
  .loading {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%);
  }
}
</style>
