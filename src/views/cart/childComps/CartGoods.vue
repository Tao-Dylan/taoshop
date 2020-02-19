<template>
  <div class="cart_goods">
    <ul class="goods_wrapper">
      <!-- 商品列表 -->
      <li class="item" v-for="(item,index) in shopCart" :key="item.id">
        <!-- 商品签的勾选按钮 -->
        <van-checkbox
          class="checkbox"
          checked-color="#75a342"
          icon-size="18px"
          v-model="item.checked"
          @click="checkBoxClick(item.id)"
        ></van-checkbox>
        <img :src="item.smallImage" alt />
        <div class="info">
          <p class="title">{{item.name}}</p>
          <div class="price_num">
            <div class="price">{{item.price | moneyFormat}}</div>
            <div class="change_num">
              <span @click="reduceGoods(item.id,item.num)" class="reduce">-</span>
              <span class="count" v-model="item.num">{{item.num}}</span>
              <span @click="addGoods(item.id,item.name,item.smallImage,item.price)" class="add">+</span>
            </div>
          </div>
        </div>
      </li>
      <!-- 提交订单 -->
      <van-submit-bar
        class="bottom_submit"
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="isSelectedSAll">全选</van-checkbox>
      </van-submit-bar>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
import { getLocalStore } from "@/common/global";
import { Dialog, Toast } from "vant";
export default {
  name: "CartGoods",
  data() {
    return {};
  },
  computed: {
    ...mapState(["shopCart"])
  },
  created() {},
  mounted() {},
  computed: {
    ...mapState(["shopCart"]),
    ...mapGetters({
      selectedGoodsNum: "SELECTED_GOODS_COUNT",
      totalPrice: "SELECTED_GOODS_PRICE"
    }),
    // 1. 是否全选
    isSelectedSAll: {
      get() {
        let tag = this.totalCount > 0;
        let shopCart = this.shopCart;
        Object.values(shopCart).forEach(goods => {
          if (!goods.checked) {
            tag = false;
          }
        });
        return tag;
      },
      set(value) {
        let isSelectedAll = !value;
        this.ALL_SELECT_GOODS({ isSelectedAll });
      }
    },
    totalCount() {
      return Object.keys(this.shopCart).length;
    }
  },
  methods: {
    ...mapMutations([
      "ADD_GOODS",
      "REDUCE_GOODS",
      "SINGLE_SELECT_GOODS",
      "DELETE_SELECT_GOODS",
      "ALL_SELECT_GOODS"
    ]),
    // 3. 减少商品书数量
    reduceGoods(goodsID, goodsNum) {
      if (goodsNum > 1) {
        // 减少商品数量
        this.REDUCE_GOODS({
          goodsID
        });
      } else if (goodsNum === 1) {
        // 删除商品
        Dialog.confirm({
          title: "温馨提示...",
          message: "确认移出此商品吗"
        })
          .then(() => {
            this.REDUCE_GOODS({ goodsID });
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    // 4. 增加商品数量
    addGoods(goodsID, goodsName, goodsSmallImage, goodsPrice) {
      console.log(goodsID);
      this.ADD_GOODS({
        goodsID,
        goodsName,
        goodsSmallImage,
        goodsPrice
      });
    },
    // 5. 单个商品的选中与否
    checkBoxClick(goodsID) {
      this.SINGLE_SELECT_GOODS({ goodsID });
    },
    // 提交结算按钮
    onSubmit() {
      // 当选中的商品大于0，跳转到订单页面
      if (this.selectedGoodsNum > 0) {
        // 跳转路由
        this.$router.push("/order");
      } else {
        Toast({
          message: "您还没选择宝贝哟",
          duration: 1000
        });
      }
    }
  }
};
</script>

<style scoped lang="less">
.cart_goods {
  margin-top: 60px;
  width: 100%;
  .goods_wrapper {
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
        padding-left: 10px;

        .title {
          height: 40px;
          line-height: 20px;
          font-size: 12px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .price_num {
          margin-top: 30px;
          line-height: 20px;
          .price {
            color: #f386be;
            font-size: 14px;
          }
          .change_num {
            position: absolute;
            top: 70px;
            right: 0;
            width: 90px;
            display: flex;
            text-align: center;
            border: 1px solid #ccc;
            .reduce {
              width: 30px;
              border-right: 1px solid #ccc;
            }
            .count {
              width: 30px;
              line-height: 20px;
              font-size: 12px;
            }
            .add {
              width: 30px;
              border-left: 1px solid #ccc;
            }
          }
        }
      }
    }
    .bottom_submit {
      position: fixed;
      bottom: 50px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
