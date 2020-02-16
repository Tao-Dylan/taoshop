<template>
  <div class="goods_item">
    <div class="left_image">
      <img :src="item.small_image" width="100px" alt />
    </div>
    <div class="right_info">
      <div class="titel">{{item.product_name}}</div>
      <div class="title_spec">{{item.spec}}</div>
      <div class="price">
        <span class="new_price">{{item.price | moneyFormat }}</span>
        <span class="old_price">{{item.origin_price | moneyFormat}}</span>
        <div class="buy_car" @click="addToCart">
          <van-icon class="icon" name="shopping-cart-o" size="15px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
};
</script>

<style scoped lang="less">
.goods_item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 5px 10px 10px;
  border-bottom: 1px solid #e6e7e8;
  background-color: #fff;
  .left_image {
    width: 30%;
    img {
      width: 100%;
    }
  }
  .right_info {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5px;
    .title {
      font-size: 17px;
    }
    .title_spec {
      height: 35px;
      line-height: 15px;
      font-size: 12px;
    }
    .price {
      position: relative;
      font-size: 14px;
      .new_price {
        color: #ff3636;
      }
      .old_price {
        padding-left: 3px;
        font-size: 12px;
        text-decoration: line-through;
      }
      .buy_car {
        position: absolute;
        bottom: 0;
        right: 10px;
        height: 25px;
        width: 25px;
        text-align: center;
        border-radius: 50%;
        background-color: #3eb965;
        .icon {
          top: 5px;
        }
        color: #fff;
      }
    }
  }
}
</style>
