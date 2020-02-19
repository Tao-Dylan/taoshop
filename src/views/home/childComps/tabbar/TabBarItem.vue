<template>
  <div id="tab_bar_item">
    <div class="item" v-for="(item,index) in tabbarAllGoodsList" :key="item.id">
      <img v-lazy="item.small_image" alt />
      <p class="item_title">{{item.name}}</p>
      <p class="item_sub_title">{{item.spec}}</p>
      <span class="price">{{item.price | moneyFormat}}</span>
      <span class="originPrice">{{item.origin_price | moneyFormat}}</span>
      <div class="buy_car" @click="addToCart(item)">
        <van-icon class="icon" name="shopping-cart-o" />
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import { ADD_TO_CART } from "@/common/pubsub_type";
import { Toast } from "vant";
export default {
  name: "TabBarItem",
  props: {
    tabbarAllGoodsList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    addToCart(goods) {
      // 发送通知
      PubSub.publish(ADD_TO_CART, goods);
      Toast({
        message: "添加购物车",
        duration: 800
      });
    }
  },
  // 取消通知订阅
  beforeDestroy() {
    PubSub.unsubscribe(ADD_TO_CART);
  }
};
</script>

<style scoped lang="less">
#tab_bar_item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 2%;
  padding-top: 2%;
  background-color: #f5f5f5;
  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 48%;
    margin-right: 2%;
    padding: 5px;
    margin-bottom: 2%;
    background-color: #fff;
    img {
      width: 100%;
      // 等比缩小图片来适应元素的尺寸
      background-size: contain;
      background-image: url("../../../../images/placeholderImg/product-img-load.png");
    }
    .item_title {
      font-size: 13px;
      line-height: 18px;
      color: #000;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .item_sub_title {
      font-size: 12px;
      padding-bottom: 20px;
      line-height: 20px;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #808080;
    }
    .price {
      padding-right: 5px;
      font-size: 16px;
      color: #f37078;
    }
    .originPrice {
      color: #999;
      text-decoration: line-through;
    }
    .buy_car {
      position: absolute;
      bottom: 5px;
      right: 10px;
      height: 26px;
      line-height: 26px;
      width: 26px;
      text-align: center;
      border-radius: 50%;
      background-color: #46c26d;
      .icon {
        top: 3px;
        height: 20px;
        width: 20px;
        color: #fff;
      }
    }
  }
}
</style>
