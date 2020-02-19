<template>
  <div class="buy_goods_list">
    <ul class="buy_lsit_wrapper">
      <li class="item" v-for="(item,index) in goods">
        <img :src="item.smallImage" alt />
        <div class="info">
          <p class="title">{{item.name}}</p>
          <div class="price_num">
            <span class="price">{{item.price | moneyFormat}}</span>
            <!-- <span class="total_num">共{{item.num}}件</span> -->
            <span class="total_num">共{{item.num}}件</span>
            <span class="calculate">小计：</span>
            <span class="total_price">{{item | itemTotalPrice |moneyFormat}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "BuyGoodsList",
  data() {
    return {};
  },
  filters: {
    itemTotalPrice(item) {
      return item.price * item.num;
    }
  },
  computed: {
    ...mapState(["shopCart"]),
    ...mapGetters({
      selectedCount: "SELECTED_GOODS_COUNT",
      goods: "SELECTED_GOODS"
    }),

    // 单件商品的总价：数量*价格
    itemTotalPrice(item) {
      return item.num * item.price;
    }
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {}
  }
};
</script>

<style scoped lang="less">
.buy_goods_list {
  width: 100%;
  padding-bottom: 10px;
  .buy_lsit_wrapper {
    .item {
      display: flex;
      margin: 10px;
      padding: 8px;
      border-radius: 8px;
      background-color: #fff;
      .checkbox {
        width: 6%;
      }
      img {
        width: 29%;
        height: 100%;
      }
      .info {
        position: relative;
        display: flex;
        width: 65%;
        flex-direction: column;
        padding-left: 20px;
        .title {
          height: 40px;
          line-height: 20px;
          font-size: 14px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .price_num {
          position: relative;
          display: flex;
          justify-content: flex-end;
          margin-top: 30px;
          line-height: 20px;
          font-size: 14px;
          .price {
            position: absolute;
            left: 0;
            bottom: 0;
            color: #f386be;
          }
          .calculate {
          }
          .total_num {
            padding-right: 10px;
            font-size: 12px;
          }
          .total_price {
            color: red;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>

