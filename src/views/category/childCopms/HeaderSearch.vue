<template>
  <div class="search_wrapper">
    <van-search @click="searchBox" v-model="value" placeholder="请输入搜索关键词" background="#fff"  />
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
  data() {
    return {
      value: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    searchBox() {
      alert('跳转搜索页面')
    }
  }
};
</script>

<style scoped lang="less">
.search_wrapper {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 99;
  //  border-bottom: 1px solid #e6e6e6;
}
</style>
