<template>
  <div id="navigation">
    <van-tabbar class="active_tab" v-model="active" active-color="#75a342">
      <van-tabbar-item
        @click="tab(index,item.name)"
        v-for="(item,index) in tabbars "
        :key="index"
        replace
      >
        <span :class="currIndex == index ? active:''">{{item.title}}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? item.active : item.normal" />
        </template>
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
import { mapMutations } from 'vuex'
export default {
  name: "navigatiosn",
  data() {
    return {
      active: Number(sessionStorage.getItem("tabbarActive")) || 0,
      currIndex: 0,
      tabbars: [
        {
          name: "Home",
          title: "首页",
          normal: require("@/images/tabbar/home_default.png"),
          active: require("@/images/tabbar/home_selected.png")
        },
        {
          name: "Category",
          title: "分类",
          normal: require("@/images/tabbar/category_default.png"),
          active: require("@/images/tabbar/category_selected.png")
        },
        {
          name: "Eat",
          title: "吃什么",
          normal: require("@/images/tabbar/eat_default.png"),
          active: require("@/images/tabbar/eat_selected.png")
        },
        {
          name: "Cart",
          title: "购物车",
          normal: require("@/images/tabbar/shoppingcart_default.png"),
          active: require("@/images/tabbar/shoppingcart_selected.png")
        },
        {
          name: "Profile",
          title: "我的",
          normal: require("@/images/tabbar/profile_default.png"),
          active: require("@/images/tabbar/profile_selected.png")
        }
      ]
    };
  },
  mounted() {
    this._initData()
  },
  watch: {
    active(val) {
      //  本地存储
      sessionStorage.setItem("tabbarActive", val);
    }
  },
  methods: {
    ...mapMutations(['INIT_SHOP_CART']),
    // 点击切换tab
    tab(index,name) {
      this.currIndex = index;
      this.$router.push(name);
      sessionStorage.setItem("tabbarActive", index);
    },
    // 初始化数据，获取本地存储
    _initData() {
      this.INIT_SHOP_CART()
    }
  }
};
</script>

<style scoped lang="less">
</style>
