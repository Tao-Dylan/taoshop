<template>
  <div id="gird_wrapper" >
    <van-grid :column-num="5" :border="false">
      <van-grid-item
        v-for="(item,index) in gridList"
        :key="index"
        :icon="item.icon_url"
        :text="item.name"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: {
    gridList: {
      type: Array,
      default() {
        return [];
      }
    }
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
