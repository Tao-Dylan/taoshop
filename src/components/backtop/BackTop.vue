<template>
  <div id="back_top" @click="scrollToTop">
    <van-icon name="upgrade" size="50px" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    scrollToTop() {
      // console.log("back");
      this.$emit('scrollToTop')
    }
  }
};
</script>

<style scoped lang="less">
#back_top {
  position: fixed;
  bottom: 80px;
  right: 20px;
  color: #fe7f80;
}
</style>
