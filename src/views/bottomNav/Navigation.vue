<template>
  <div id="navigation">
    <van-tabbar v-model="active" active-color="#75a342">
      <van-tabbar-item replace to="/navigation/home">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? home_icon.active : home_icon.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/navigation/category">
        <span>分类</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? category_icon.active : category_icon.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/navigation/eat">
        <span>吃什么</span>
        <img slot="icon" slot-scope="props" :src="props.active ? eat_icon.active : eat_icon.normal" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/navigation/cart">
        <span>购物车</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? cart_icon.active : cart_icon.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/navigation/profile">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? mine_icon.active : mine_icon.normal"
        />
      </van-tabbar-item>
    </van-tabbar>
    <!-- 是否缓存界面 选择加载 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "navigatiosn",
  data() {
    return {
      active: 0,
      home_icon: {
        normal: require("@/images/tabbar/home_default.png"),
        active: require("@/images/tabbar/home_selected.png")
      },
      category_icon: {
        normal: require("@/images/tabbar/category_default.png"),
        active: require("@/images/tabbar/category_selected.png")
      },
      eat_icon: {
        normal: require("@/images/tabbar/eat_default.png"),
        active: require("@/images/tabbar/eat_selected.png")
      },
      cart_icon: {
        normal: require("@/images/tabbar/shoppingcart_default.png"),
        active: require("@/images/tabbar/shoppingcart_selected.png")
      },
      mine_icon: {
        normal: require("@/images/tabbar/profile_default.png"),
        active: require("@/images/tabbar/profile_selected.png")
      }
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
#navigation {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
