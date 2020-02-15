<template>
  <div id="flash_goods">
    <ul class="wrapper_width">
      <li class="flash_item" v-for="(item,index) in flashSaleGoodsList" :key="index">
        <div class="top">
          <img :src="item.small_image" alt />
          <span class="title">{{item.product_name}}</span>
        </div>
        <div class="price">
          <span class="new_price">{{item.price | moneyFormat}}</span>
          <span class="old_price">{{item.origin_price | moneyFormat}}</span>
          <div class="buy_car">
            <van-icon name="shopping-cart-o" size="14px" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FlashGoods",
  props: {
    flashSaleGoodsList: {
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
    // console.log(this.flashSaleGoodsList);
  },
  mounted() {
    // console.log(this.flashSaleGoodsList);
  },
  methods: {}
};
</script>

<style scoped lang="less">
#flash_goods {
  display: inline-block;
  .wrapper_width {
    display: inline-block;
    white-space: nowrap;
    .flash_item {
      display: inline-block;
      width: 115px;
      padding: 5px;
      .top {
        img {
          width: 100%;
        }
        .title {
          white-space: normal;
          height: 40px;
          line-height: 17px;
          font-size: 12px;
          color: #000;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .price {
        position: relative;
        display: flex;
        height: 30px;
        flex-direction: column;
        justify-content: space-around;
        // background-color: pink;
        .new_price {
          font-size: 16px;
          color: #fe6263;
        }
        .old_price {
          font-size: 10px;
          text-decoration: line-through;
        }
        .buy_car {
          position: absolute;
          right: 10px;
          height: 23px;
          width: 23px;
          padding-top: 4px;
          text-align: center;
          color: #fff;
          background-color: #3eba65;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
