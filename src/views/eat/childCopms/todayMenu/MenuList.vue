<template>
  <div class="menu_lsit">
    <p class="title">今日菜单</p>
    <my-scroll ref="menu_width" class="scroll_width" :scrollX="true" :scrollY="false">
      <ul class="scroll_content">
        <li
          ref="menu"
          :class="{active:currentIndex === index}"
          @click="menuClick(index)"
          v-for="(item,index) in todayMenuCategoryLists"
          :key="item.id"
        >{{item.name}}</li>
      </ul>
    </my-scroll>
    <div class="all" @click="clickAll">
      <div class="all_title">{{msg}}</div>
      <van-icon class="down_icon" v-if="!isDown" name="arrow-down" />
      <van-icon class="up_icon" v-else name="arrow-up" />
    </div>
    <!-- 折叠菜单内容 -->
    <pull-down-menu
      @menuDownClick="menuDownClick"
      v-if="isShowDownMenu"
      :today-menu-category-lists="todayMenuCategoryLists"
    />
  </div>
</template>

<script>
import MyScroll from "@/components/scroll/MyScroll";
import PullDownMenu from "./PullDownMenu";
export default {
  name: "MenuList",
  components: {
    MyScroll,
    PullDownMenu
  },
  props: {
    todayMenuCategoryLists: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeNames: ["1"],
      msg: "全部",
      isDown: false,
      isShowDownMenu: false,
      currentIndex: 0
    };
  },
  created() {},
  mounted() {},
  methods: {
    menuClick(index) {
      // console.log(index);
      this.isShowDownMenu = false;
      this.currentIndex = index;
      const menuElement = this.$refs.menu[index];
      this.$refs.menu_width.scrollToElement(menuElement, 200, -100);
    },
    // 监听折叠菜单点击功能
    clickAll() {
      this.isShowDownMenu = !this.isShowDownMenu;
      this.isDown = !this.isDown;
      console.log("isDown:", this.isDown);
      this.msg = this.isDown ? "收起" : "全部";
    },
    // 监听折叠菜单里面点击
    menuDownClick(index) {
      console.log(index);
      this.currentIndex = index;
      this.isShowDownMenu = !this.isShowDownMenu;
      const menuElement = this.$refs.menu[index];
      this.$refs.menu_width.scrollToElement(menuElement, 200, -100);
    }
  }
};
</script>

<style scoped lang="less">
.menu_lsit {
  position: relative;
  padding-top: 54px;
  .title {
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 18px;
    color: #000;
    border-left: 4px solid #75a342;
    background-color: #fff;
  }
  .scroll_width {
    width: 100%;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    ul {
      display: inline-block;
      padding: 5px;
      align-items: center;
      border-bottom: 1px solid #e8e9e8;
      background-color: #fff;
      li {
        height: 25px;
        line-height: 25px;
        padding: 0 8px;
        margin-right: 5px;
        border: 1px solid #ccc;
        border-radius: 10px;
        display: inline-block;
        white-space: nowrap;
        font-size: 12px;
      }
      .active {
        color: #75a342;
        border: 1px solid #75a342;
      }
    }
  }
  .all {
    position: absolute;
    display: flex;
    top: 80px;
    right: 0;
    height: 36px;
    padding: 0 10px;
    text-align: center;
    line-height: 36px;
    background-color: #fff;
    .all_title {
      padding-right: 15px;
      font-size: 14px;
    }
    .down_icon {
      position: absolute;
      right: 5px;
      top: 10px;
    }
    .up_icon {
      position: absolute;
      right: 5px;
      top: 10px;
    }
  }
}
</style>
