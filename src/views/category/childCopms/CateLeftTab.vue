<template>
  <div class="category_left_tab">
    <my-scroll class="scroll_left_wrapper">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          :class="{selected:currentIndex === index}"
          @click="itemClick(index)"
          v-for="(item,index) in categoryLeftList"
          :key="index"
          :title="item.name"
        />
      </van-sidebar>
    </my-scroll>
  </div>
</template>

<script>
import PubSub from "pubsub.js";
import MyScroll from "@/components/scroll/MyScroll";

export default {
  name: "CateLeftTab",
  components: {
    MyScroll
  },
  props: {
    categoryLeftList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      activeKey: 0,
      currentIndex: 0
    };
  },
  created() {},
  mounted() {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // 发送通知传递给CategoryContent,并且传递索引值
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style scoped lang="less">
.category_left_tab {
  // height: 100vh;
  .scroll_left_wrapper {
    width: 100%;
    height: calc(100vh - 104px);
    overflow: hidden;
    .van-sidebar {
      width: 100%;
      .van-sidebar-item {
        text-align: center;
        padding: 12px;
        border-bottom: 1px solid #ccc;
        background-color: #f4f4f4;
        .van-sidebar-item__text {
          margin: 10px 15px;
        }
      }
      .van-sidebar-item--select {
        border-left: 4px solid #3cb963;
      }
      .selected {
        background-color: #fff;
      }
    }
  }
}
</style>
