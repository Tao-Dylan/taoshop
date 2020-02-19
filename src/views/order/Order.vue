<template>
  <div id="order">
    <!-- 顶部填写订单 -->
    <van-nav-bar title="填写订单" :fixed="true" left-arrow @click-left="onClickLeft" />

    <!-- 滚动区域 -->
    <my-scroll class="scroll_height">
      <div class="scroll_content">
        <!-- 选择收货地址 -->
        <van-contact-card
          :type="address_type"
          add-text="选择收货地址"
          :name="address_name"
          @click="chooseAddress"
          style="margin-top:46px"
        />
        <!-- 送达时间 -->
        <van-cell-group>
          <van-cell title="送达时间" value="请选择送达时间" is-link>
            <template slot="label">
              <span class="custom-title">超过十分钟可获得积分补偿</span>
              <van-icon name="question-o" />
            </template>
          </van-cell>
        </van-cell-group>

        <!-- 商品列表 -->
        <buy-goods-list />

        <!-- 优惠券及积分满减 -->
        <van-cell-group style="margin-top: 0.6rem">
          <van-cell title="优惠券" is-link value="0张可用"></van-cell>
          <van-cell>
            <span slot="title">
              使用{{integral}}积分兑换
              <b>{{integralToprice | moneyFormat}}</b>
            </span>
            <van-switch
              v-model="checked"
              slot="right-icon"
              @input="onInput"
              active-color="#07c160"
            />
          </van-cell>
        </van-cell-group>

        <!-- 商品金额 -->
        <van-cell-group style="margin-top: 0.6rem">
          <van-cell title="商品金额">
            <div class="money">19.00</div>
          </van-cell>
          <van-cell title="配送费">
            <div class="money">0.00</div>
          </van-cell>
          <van-cell title="积分" v-show="isShowPreferential">
            <div class="money">0.00</div>
          </van-cell>
        </van-cell-group>
      </div>
    </my-scroll>

    <!-- 支付方式 -->
    <pay-method @deletePay="deletePay" v-if="showPayMethod" />
    <!-- </van-overlay> -->

    <!-- 提交订单按钮 -->
    <van-submit-bar
      :price="selectedTotalPrice"
      :button-text="`结算(${selectedGoodsCount})`"
      @submit="onSubmit"
    />

    <!-- 动态跳转路由 -->
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BuyGoodsList from "./childComps/BuyGoodsList";
import PayMethod from "./childComps/PayMethod";
import MyScroll from "@/components/scroll/MyScroll";
import { Toast, Dialog } from "vant";
export default {
  name: "Order",
  components: {
    MyScroll,
    BuyGoodsList,
    PayMethod
  },
  data() {
    return {
      checked: false, // 优惠券是否使用
      showPayMethod: false, // 是否展示支付方式，底部弹框
      address_type: "add", //地址卡片类型
      address_name: null,
      isShowPreferential: false, // 是否显示积分
      integral: 1000 // 积分
    };
  },
  computed: {
    ...mapState(["shopCart"]),
    ...mapGetters({
      selectedTotalPrice: "SELECTED_GOODS_PRICE",
      selectedGoodsCount: "SELECTED_GOODS_COUNT"
    }),
    // 计算积分兑换人命币
    integralToprice() {
      if (this.integral > 0) {
        return this.integral / 100;
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 顶部返回箭头
    onClickLeft() {
      this.$router.back();
    },
    // 订单提交按钮
    onSubmit() {
      this.showPayMethod = !this.showPayMethod;
    },
    // 提交后不想支付删除支付按钮
    deletePay() {
      this.showPayMethod = !this.showPayMethod;
    },
    // switch开关使用积分
    onInput(checked) {
      // 使用积分
      let discountsPrice = this.integralToprice * 100;
      // 判断积分使用条件是否满足
      if (discountsPrice > this.selectedTotalPrice) {
        Dialog.alert({
          message: "您的实际价格小于积分兑换价格,建议您在多买几件"
        }).then(() => {
          this.checked = false;
        });
      } else {
        this.isShowPreferential = !this.isShowPreferential;
      }
    },
    // 选择收货地址
    chooseAddress() {
      // console.log(this.$router);
      this.$router.replace("/order/myAddress");
    }
  }
};
</script>

<style scoped lang="less">
#order {
  height: 100%;
  .scroll_height {
    height: calc(100vh - 96px);
  }
}
/*转场动画*/
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.3s;
}
.router-slider-enter,
.router-slider-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>
