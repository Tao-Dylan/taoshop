<template>
  <div class="add_address">
    <van-nav-bar title="编辑地址" :fixed="true" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from "@/common/area.js";
import { Toast } from "vant";
export default {
  name: "EditAddress",
  data() {
    return {
      areaList: areaList,
      searchResult: []
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 返回上一级页面
    onClickLeft() {
      this.$router.go(-1);
    },
    // 保存地址
    onSave() {
      Toast("保存成功");
    },
    // 数据改变
    onChangeDetail() {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style scoped lang="less">
.add_address {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  z-index: 99999;
  .van-address-edit {
    margin-top: 46px;
  }
}
</style>
