<template>
  <div id="flash_wrapper">
    <!--限时抢购世间  -->
    <div class="flash_title">
      <div class="title">限时抢购</div>
      <van-count-down :time="time">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours | showHours}}</span>
          <span class="item">{{ timeData.minutes |showHours }}</span>
          <span class="item">{{ timeData.seconds |showHours }}</span>
        </template>
      </van-count-down>
      <div class="more">更多</div>
    </div>

    <!-- 滚动区域-横向滚动 -->
    <my-scroll class="scroll_width" :listenScroll="true" :scrollX="true" :scrollY="false">
      <!-- 限时抢购商品 -->
      <flash-goods :flash-sale-goods-list="flashSaleGoodsList" />
    </my-scroll>
  </div>
</template>

<script>
import FlashGoods from "./FlashGoods";
import MyScroll from "@/components/scroll/MyScroll";
export default {
  name: "FlashSale",
  components: {
    FlashGoods,
    MyScroll
  },
  props: {
    flashSaleGoodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      time: 30 * 60 * 1000 * 100
    };
  },
  filters: {
    showHours(time) {
      if (time < 10) {
        return "0" + time;
      }
      return time;
    }
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
#flash_wrapper {
  position: relative;
  width: 100%;
  background-color: #fff;
  .flash_title {
    display: flex;
    .title {
      height: 20px;
      line-height: 2opx;
      padding-left: 5px;
      padding-right: 10px;
      vertical-align: middle;
      border-left: 4px solid #3cb963;
    }
    .item {
      display: inline-block;
      width: 22px;
      margin-right: 5px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #1989fa;
    }
    .more {
      padding-left: 165px;
      color: #75a342;
    }
  }
  .scroll_width {
    width: 100%;
    overflow: hidden;
  }
}
</style>
