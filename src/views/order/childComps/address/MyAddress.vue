<template>
  <div class="my_adddress">
    <!-- 我的地址 -->
    <van-nav-bar title="我的地址" :fixed="true" left-arrow @click-left="onClickLeft" />
    <!-- 联系人地址列表 -->
    <van-address-list
      style="margin-top:56px "
      v-model="chosenAddressId"
      add-button-text="+ 增加新地址"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
    <!-- 动态跳转路由 -->
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    // 添加地址
    onAdd() {
      this.$router.push({ path: "/order/myAddress/addAddress" });
    },
    // 编辑地址
    onEdit() {
      this.$router.push({ path: "/order/myAddress/editAddress" });
    }
  }
};
</script>

<style scoped lang="less">
.my_adddress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #f5f5f5;
  .van-address-list {
    padding: 0;
    .van-address-item {
      border-radius: 0;
    }
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
