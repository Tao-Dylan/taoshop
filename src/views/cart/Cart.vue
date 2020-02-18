<template>
  <div id="cart" :style="totalCount?'padding-bottom:100px':''">
    <!-- 头部区域 -->
    <header class="header_titel">购物车</header>
    <!-- 购物车没有商品 -->
    <div v-show="!totalCount" class="cartEmpty">
      <img src="@/images/cart/empty.png" alt />
      <div class="title">亲！这里空空如也哦~</div>
      <router-link class="go_home" to="/navigation/home">去逛逛</router-link>
    </div>
    <!-- 购物车有商品 -->
    <cart-goods v-show="totalCount" />
    <!-- 猜你喜欢组件 -->
    <van-divider :style="{ color: '#ccc', borderColor: '#ccc', padding: '0 16px' }">
      <van-icon name="like" style="padding:0 5px" color="red" />猜你喜欢
    </van-divider>
    <!-- 猜你喜欢商品列表组件 -->
    <guess-like-goods :guess-like-goods-list="guessLikeGoodsList" />
  </div>
</template>

<script>
import { getGuessYouLike } from "@/network/cart.js";

// 引入vuex
import { mapState } from "vuex";
import { getLocalStore } from "@/common/global";

import GuessLikeGoods from "./childComps/GuessLikeGoods";
import CartGoods from "./childComps/CartGoods";
export default {
  name: "Cart",
  components: {
    GuessLikeGoods,
    CartGoods
  },
  data() {
    return {
      guessLikeGoodsList: [] // 猜你喜欢数据
    };
  },
  computed: {
    ...mapState(["shopCart"]),
    totalCount() {
      return Object.keys(this.shopCart).length > 0;
    }
  },
  created() {},
  mounted() {
    this._initData();
  },
  methods: {
    // 获取网路数据
    _initData() {
      getGuessYouLike().then(res => {
        const guessLike = res.data;
        // console.log(guessLike);
        if (guessLike.success) {
          this.guessLikeGoodsList = guessLike.data.product_list;
          // console.log(this.guessLikeGoodsList);
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
#cart {
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  .header_titel {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    justify-content: center;
    background-color: #fff;
    z-index: 99;
  }
  .cartEmpty {
    margin-top: 50px;
    text-align: center;
    height: 250px;
    width: 100%;
    img {
      width: 50%;
    }
    .title {
      margin-bottom: 10px;
      padding: 5px 0;
      font-size: 16px;
      color: #000;
    }
    .go_home {
      padding: 10px 30px;
      border-radius: 20px;
      font-size: 18px;
      color: #fff;
      background-color: #45c763;
    }
  }
}
</style>
