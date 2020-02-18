<template>
  <div class="cart_goods">
    <ul class="goods_wrapper">
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
      <van-submit-bar
        class="bottom_submit"
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="isSelectedSAll" @click="allSelect(isSelectedSAll)">全选</van-checkbox>
      </van-submit-bar>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { getLocalStore } from "@/common/global";
import { Dialog } from "vant";
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
    // 1. 是否全选
    isSelectedSAll: {
      get() {
        let shopCart = this.shopCart;
        let tag = Object.values(shopCart).every(
          (goods, index) => goods.checked
        );
        return tag
      },
      set(value) {
        this.value = value;
      }
    },
    // 2. 计算总价
    totalPrice() {
      let totalPrice = 0;
      Object.values(this.shopCart).forEach((goods, index) => {
        if (goods.checked) {
          totalPrice += goods.price * goods.num * 100;
        }
      });
      return totalPrice;
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
    // 6. 全选的选中与否
    allSelect(isSelectedSAll) {
      console.log(isSelectedSAll);
      this.ALL_SELECT_GOODS({ isSelectedSAll });
    },

    // 提交按钮
    onSubmit() {}
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
