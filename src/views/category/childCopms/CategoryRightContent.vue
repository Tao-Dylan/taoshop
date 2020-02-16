<template>
  <div class="category_right_content">
    <!-- 顶部tab栏 -->
    <my-scroll
      ref="top_height"
      class="scroll_top_width"
      :scrollY="false"
      :scrollX="true"
      :listen-scroll="true"
      :probe-ypet="3"
      @scroll="scroll"
    >
      <div class="top_tab">
        <div
          ref="top_title"
          @click="tabClick(index)"
          :class="{active: currentIndex === index}"
          class="top_tab_title"
          v-for="(itemTab,index) in categoryRightList"
          :key="itemTab.id"
        >{{itemTab.name}}</div>
      </div>
    </my-scroll>
    
    <my-scroll ref="content_height" class="scroll_content_height" :scrollY="true" :scrollX="false">
      <!-- 内容展示 -->
      <div class="goods_item_wrapper">
        <div
          ref="goods"
          class="item_wrapper"
          v-for="(itemInfo,indey) in categoryRightList"
          :key="itemInfo.id"
        >
          <div class="item_title">{{itemInfo.name}}</div>
          <goods-list-item
            @addToCart="addToCart"
            :item="item"
            class="item"
            v-for="(item,index) in itemInfo.products"
            :key="item.id"
          />
        </div>
      </div>
    </my-scroll>
  </div>
</template>

<script>
import MyScroll from "@/components/scroll/MyScroll";
import GoodsListItem from "./GoodsListItem";
import { Toast } from "vant";

export default {
  name: "CateRightContent",
  components: {
    MyScroll,
    GoodsListItem
  },
  props: {
    categoryRightList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      active: 0,
      currentIndex: 0,
      goodsItem: []
    };
  },
  created() {},
  mounted() {},
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      const goodsElement = this.$refs.goods[index];
      const topElement = this.$refs.top_title[index];
      this.$refs.top_height.scrollToElement(topElement, 200, -40);

      // 点击滚动到对应的标题商品内容
      this.$refs.top_height.scrollToElement(0, 0);
      this.$refs.content_height.scrollToElement(goodsElement, 200);
    },
    // 监听滚动位置
    scroll(pos) {
      // console.log(pos);
    },
    // 监听添加购物车
    addToCart() {
      Toast({
        message: "加入购物车",
        duration: 800
      });
    }
  }
};
</script>

<style scoped lang="less">
.category_right_content {
  position: absolute;
  left: 26%;
  right: 0;
  top: 54px;
  .scroll_top_width {
    margin-left: 1%;
    width: 100%;
    height: 45px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    background-color: #fff;
    .top_tab {
      display: inline-block;
      white-space: nowrap;
      .top_tab_title {
        display: inline;
        line-height: 45px;
        padding: 0 20px;
      }
      .active {
        color: #3cb963;
      }
    }
  }
  .scroll_content_height {
    height: calc(100vh - 149px);
    overflow: hidden;
    .goods_item_wrapper {
      display: flex;
      flex-direction: column;
      .item_wrapper {
        .item_title {
          height: 45px;
          line-height: 45px;
          font-size: 14px;
          padding-left: 20px;
          color: #93999f;
          border-left: 4px solid #3cb963;
          background-color: #f3f5f7;
        }
      }
    }
  }
}
</style>
