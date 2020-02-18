<template>
  <div class="search">
    <van-search v-model="value" show-action placeholder="搜索美食" @search="onSearch">
      <div slot="action" @click="onSearch">
        <van-icon name="photograph" size="20px" />
      </div>
    </van-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSearch() {
      alert("搜索页面");
    }
  }
};
</script>

<style scoped lang="less">
.search {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
}
</style>
