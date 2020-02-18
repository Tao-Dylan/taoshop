<template>
  <div id="category_wrapper">
    <!-- 顶部搜索栏 -->
    <header-search />
    <div class="content_wrapper" v-if="!isShowLoading">
      <!-- 左边大菜单 -->
      <cate-left-tab
        class="left_wrapper"
        @tabClick="tabClick"
        :category-left-list="categoryLeftList"
      />
      <!-- 右边内容 -->
      <category-right-content class="right_wrapper" :category-right-list="categoryRightList" />
    </div>
    <!-- 加载中 -->
    <show-loading v-else />
  </div>
</template>

<script>
import { getCategoryLeftData, getCategoryRightData } from "@/network/category";
import MyScroll from "@/components/scroll/MyScroll";
import ShowLoading from "@/components/showLoading/ShowLoading";

import HeaderSearch from "./childCopms/HeaderSearch";
import CateLeftTab from "./childCopms/CateLeftTab";
import CategoryRightContent from "./childCopms/CategoryRightContent";

export default {
  name: "HeadSearch",
  components: {
    MyScroll,
    ShowLoading,
    HeaderSearch,
    CateLeftTab,
    CategoryRightContent
  },
  data() {
    return {
      isShowLoading: true, // 是否显示加载图标
      categoryLeftList: [], // 左边标题数据
      categoryRightList: [], // 左边标题数据
      leftCurrentIndex: 0 // 左侧当前显示的标签索引
    };
  },
  created() {
    this._initData();
  },
  mounted() {},
  methods: {
    // 初始化操作，请求数据
    _initData() {
      // 左边标题数据
      getCategoryLeftData().then(res => {
        const leftData = res.data;
        // console.log(leftData);
        if (leftData.success) {
          this.categoryLeftList = leftData.data.cate;
        }
      });
      // 右边详细数据
      getCategoryRightData("/lk001").then(res => {
        const rightData = res.data;
        // console.log(rightData);
        if (rightData.success) {
          this.categoryRightList = rightData.data.cate;
          console.log(this.categoryRightList);
        }
      });
      // 隐藏Loading组件
      this.isShowLoading = false;
    },
    tabClick(index) {
      this.leftCurrentIndex = index;
      getCategoryRightData(`/lk00${index + 1}`).then(res => {
        const rightData = res.data;
        // console.log(res);
        if (rightData.success) {
          this.categoryRightList = rightData.data.cate;
          console.log(this.categoryRightList);
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
#category_wrapper {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  .content_wrapper {
    position: absolute;
    top: 54px;
    left: 0;
    right: 0;
    display: flex;
    .left_wrapper {
      width: 25%;
    }
    .right_wrapper {
      width: 75%;
    }
  }
}
</style>
