<template>
  <div id="profile">
    <van-nav-bar
      title="我的"
      :fixed="true"
      :border="false"
      style="background-color: #3bba63;color:#FFF;"
    />
    <!-- 个人信息 -->
    <van-cell-group style="margin-top:46px" :border="false">
      <van-cell
        center
        is-link
        label-class="labelClass"
        style="background-color: #3bba63;color:#FFF;"
      >
        <template slot="title">
          <div class="personMsg">
            <img src="@/images/mine/defaultImg.jpeg" alt />
            <div v-if="false" class="person_info">
              <p class="name">涛-Dylan</p>
              <p class="phone">手机号：11223455433</p>
            </div>
            <div class="person_info">
              <router-link style="color:#fff" to="/login">立即登录</router-link>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 我的订单 -->
    <van-cell-group>
      <van-cell icon="label" title="我的订单" value="查看全部订单" is-link />
    </van-cell-group>
    <!-- 服务 -->
    <van-cell-group>
      <van-grid :border="false">
        <van-grid-item
          v-for="(order,index) in orderData"
          :key="index"
          :icon="order.icon"
          :text="order.title"
        />
      </van-grid>
    </van-cell-group>
    <!-- 优惠券、收货地址 -->
    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="我的优惠券" icon="gold-coin" value="1张" is-link></van-cell>
      <van-cell title="我的收货地址" icon="todo-list" is-link></van-cell>
    </van-cell-group>
    <!-- 我的绿卡 -->
    <van-cell-group style="margin-top:0.4rem">
      <van-cell is-link icon="vip-card">
        <template slot="title">
          <span class="custom-title">我的绿卡</span>
          <van-tag type="danger" :round="true">NEW</van-tag>
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 联系客服，意见反馈 -->
    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="联系客服" icon="phone" value="客服时间 07:00-22:00" is-link></van-cell>
      <van-cell title="意见反馈" icon="comment-circle" is-link></van-cell>
    </van-cell-group>
    <!-- app下载链接 -->
    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="叮咚买菜APP" icon="gem" value="下载APP体验更佳" is-link></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderData: [
        { icon: "cart-circle-o", title: "待支付" },
        { icon: "gift-o", title: "待收货" },
        { icon: "smile-comment-o", title: "待评价" },
        { icon: "cash-back-record", title: "售后/退款" }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    login() {}
  }
};
</script>

<style scoped lang="less">
#profile {
  width: 100%;
  .personMsg {
    display: flex;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .person_info {
      padding-left: 10px;
    }
  }
}
.van-cell__left-icon {
  color: #45c763;
  font-size: 18px;
}
</style>
