<template>
  <div id="cart">
    <!-- 顶部搜索框 -->
    <eat-header-search />
    <!-- 今日菜单 -->
    <today-menu />
  </div>
</template>

<script>
import EatHeaderSearch from "./childCopms/eatHeaderSearch/EatHeaderSearch";
import TodayMenu from "./childCopms/todayMenu/TodayMenu";
export default {
  name: "Eat",
  components: {
    EatHeaderSearch,
    TodayMenu
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
</style>