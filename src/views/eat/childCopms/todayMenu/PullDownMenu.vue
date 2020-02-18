<template>
  <div class="pull_down_menu">
    <p class="title">菜单分类</p>
    <ul class="list">
      <li
        class="item"
        ref="menu"
        @click="menuDownClick(index)"
        v-for="(item,index) in todayMenuCategoryLists"
        :key="item.id"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PullDOwnMenu",
  props: {
    todayMenuCategoryLists: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    menuDownClick(index) {
      this.$emit("menuDownClick", index);
    }
  }
};
</script>

<style scoped lang="less">
.pull_down_menu {
  position: absolute;
  height: calc(100vh - 170px);
  // padding-bottom: 10px;
  // border-bottom: 4px solid #75a342;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 99;
  .title {
    padding: 10px;
    font-size: 14px;
    color: #808080;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    .item {
      height: 25px;
      width: 21%;
      margin: 1% 2%;
      line-height: 25px;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 10px;
      white-space: nowrap;
      font-size: 12px;
    }
  }
}
</style>
