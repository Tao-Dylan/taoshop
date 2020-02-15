<template>
  <div id="tab_bar_item">
    <div class="item" v-for="(item,index) in tabbarAllGoodsList" :key="item.id">
      <img :src="item.small_image" alt />
      <p class="item_title">{{item.name}}</p>
      <p class="item_sub_title">{{item.spec}}</p>
      <span class="price">{{item.price | moneyFormat}}</span>
      <span class="originPrice">{{item.origin_price | moneyFormat}}</span>
      <div class="buy_car">
        <van-icon class="icon" name="shopping-cart-o" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    tabbarAllGoodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  created() {
    console.log(this.tabbarAllGoodsList);
  },
  mounted() {},
  methods: {}
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
  font-size: 13px;
  background-color: #f5f5f5;
  .item {
    position: relative;
    width: 48%;
    margin-right: 2%;
    padding: 5px;
    margin-bottom: 2%;
    background-color: #fff;
    img {
      width: 100%;
    }
    .item_title {
      line-height: 18px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .item_sub_title {
      padding-bottom: 20px;
      line-height: 20px;
      font-size: 12px;
      color: #808080
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
