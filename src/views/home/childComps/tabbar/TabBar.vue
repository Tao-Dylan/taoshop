<template>
  <div id="tab_bar">
    <!-- tab标签 -->
    <van-tabs v-model="active" color="#28BE57" title-active-color="#28BE57" animated sticky>
      <van-tab v-for="(item,index) in items" :key="item.id" :title="item">
        <div slot="title">
          <span>{{item}}</span>
        </div>
        <tab-bar-item v-if="item === '全部'" :tabbar-all-goods-list="tabbarAllGoodsList" />
        <tab-bar-item v-if="item === '晚餐'" :tabbar-all-goods-list="flashSaleGoodsList" />
        <tab-bar-item v-if="item === '人气'" :tabbar-all-goods-list="tabbarAllGoodsList" />
        <tab-bar-item v-if="item === '心选'" :tabbar-all-goods-list="flashSaleGoodsList" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  name: "TabBar",
  components: {
    TabBarItem
  },
  props: {
    tabbarAllGoodsList: {
      type: Array,
      default() {
        return [];
      }
    },
    flashSaleGoodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      active: 0,
      items: ["全部", "晚餐", "人气", "心选"]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
#tab_bar {
  width: 100%;
}
</style>
