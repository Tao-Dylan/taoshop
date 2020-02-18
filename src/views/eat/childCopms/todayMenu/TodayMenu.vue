<template>
  <div class="today_menu" v-if="!isShowLading">
    <!-- 菜单列表，横向滚动 -->
    <menu-list :today-menu-category-lists="todayMenuCategoryLists" />
    <!-- 对应菜单详细内容 -->
    <menu-detail :menu-list-detail="menuListDetail" />
  </div>
  <!-- 加载中 -->
  <show-loading v-else />
</template>

<script>
import { getTodayMenuCategoryList, getTodayMenuDetail } from "@/network/eat";
import { setLocalStore, getLocalStore } from '@/common/global.js'

import ShowLoading from "@/components/showLoading/ShowLoading";
import MyScroll from "@/components/scroll/MyScroll";

import MenuList from "./MenuList";
import MenuDetail from "./MenuDetail";

export default {
  name: "TodayMenu",
  components: {
    ShowLoading,
    MyScroll,
    MenuList,
    MenuDetail
  },
  data() {
    return {
      isShowLading: true, // 显示加载中
      todayMenuCategoryLists: [], // 今日菜单列表数据
      menuListDetail: [] // 菜单详细内容
    };
  },
  created() {
    this.initData();
  },
  mounted() {},
  methods: {
    // 异步获取数据
    initData() {
      // 获取菜单选项
      getTodayMenuCategoryList().then(res => {
        const menuData = res.data;
        // console.log(menuData);
        if (menuData.success) {
          this.todayMenuCategoryLists = menuData.data.list;
          // console.log(this.todayMenuCategoryLists);
        }
      });
      // 根据菜单选项获取具体数据
      getTodayMenuDetail("/lk01").then(res => {
        const detailMenu = res.data;
        // console.log(detailMenu);
        if (detailMenu.success) {
          this.menuListDetail = detailMenu.data.big_recommend.list;
          console.log(this.menuListDetail);
        }
      });
      this.isShowLading = false;
    }
  }
};
</script>

<style scoped lang="less">
</style>
