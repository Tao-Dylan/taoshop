<template>
  <div class="search_wrapper">
    <van-search v-model="value" placeholder="请输入搜索关键词" background="#fff" />
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
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
      value: ""
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
</style>
