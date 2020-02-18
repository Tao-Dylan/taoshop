<template>
  <div id="home">
    <div class="show_loading" v-if="!isShowLoading">
      <!-- 头部搜索框 -->
      <Header-search />
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
      <van-divider>亲！！别上拉啦，人家是有底线的......</van-divider>
    </div>
    <!-- 加载中 -->
    <show-loading v-else />
    <!-- 返回顶部 -->
    <back-top @scrollToTop="scrollToTop" />
  </div>
</template>

<script>
import { getHomeData } from "@/network/home";
import BackTop from "@/components/backtop/BackTop";
import MyScroll from "@/components/scroll/MyScroll";
import ShowLoading from "@/components/showLoading/ShowLoading";

// 引入vuex
import { mapMutations } from "vuex";
// 引入消息发布订阅
import PubSub from "pubsub-js";
import { ADD_TO_CART } from "@/common/pubsub_type";

import HeaderSearch from "./childComps/head/HeaderSearch";
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
    ShowLoading,
    HeaderSearch,
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
    this._initData();
  },
  mounted() {
    // 接受订阅
    PubSub.subscribe(ADD_TO_CART, (msg, goods) => {
      if (msg == ADD_TO_CART) {
        // 添加数据
        this.ADD_GOODS({
          goodsID: goods.id,
          goodsName: goods.name,
          smallImage: goods.small_image,
          goodsPrice: goods.price
        });
      }
    });
  },
  methods: {
    // vuex中的 ADD_TO_CART 方法
    ...mapMutations(['ADD_GOODS']),
    // 获取网络数据
    _initData() {
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
    // 监听滚到顶部按钮
    scrollToTop() {
      console.log("back");
    }
  }
};
</script>

<style scoped lang="less">
#home {
  width: 100%;
  padding-bottom: 50px;
  background-color: #f5f5f5;
}
</style>
