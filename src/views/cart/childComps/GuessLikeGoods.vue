<template>
  <div class="good_list">
    <ul class="goods_wrapper">
      <li class="item" v-for="(item,index) in guessLikeGoodsList" :key="item.id">
        <img :src="item.small_image" alt />
        <p class="item_title">{{item.name}}</p>
        <p class="item_sub_title">{{item.spec}}</p>
        <span class="price">{{item.price | moneyFormat}}</span>
        <span class="originPrice">{{item.origin_price | moneyFormat}}</span>
        <div class="buy_car">
          <van-icon class="icon" name="shopping-cart-o" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GuessLikeGoods",
  props: {
    guessLikeGoodsList: {
      type: Array,
      default: () => []
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

<style scoped lang="less">
.goods_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 2%;
  padding-top: 2%;
  background-color: #f5f5f5;
  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 48%;
    padding: 5px;
    margin-right: 2%;
    margin-bottom: 2%;
    border-radius: 10px;
    background-color: #fff;
    img {
      width: 100%;
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
