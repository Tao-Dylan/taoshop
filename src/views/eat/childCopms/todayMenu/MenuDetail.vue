<template>
  <div class="menu_detail">
    <my-scroll class="menu_detail_scrolll_wrapper" @pullingUp="pullingUp" :pullup="true">
      <ul class="list_scroll_wrapper">
        <li class="list_item" v-for="(item,index) in menuListDetail" :key="item.id">
          <img class="item_img" v-lazy="item.image" alt />
          <div class="desc">{{item.name}}</div>
          <div class="user_info">
            <img class="avatar" :src="item.author_avatar" alt />
            <span class="username">{{item.author_name}}</span>
          </div>
        </li>
      </ul>
    </my-scroll>
  </div>
</template>

<script>
import MyScroll from "@/components/scroll/MyScroll";
export default {
  name: "MenuDetail",
  components: {
    MyScroll
  },
  props: {
    menuListDetail: {
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
    // 监听滚动到底部
    pullingUp() {
      console.log("到底啦");
    }
  }
};
</script>

<style scoped lang="less">
.menu_detail {
  width: 100%;
  background-color: #eee;
  .menu_detail_scrolll_wrapper {
    height: calc(100vh - 170px);
    overflow: hidden;
    .list_scroll_wrapper {
      width: 100%;
      padding: 10px;
      column-count: 2;
      column-gap: 8px;
      .list_item {
        padding-bottom: 10px;
        margin-bottom: 10px;
        break-inside: avoid;
        border-radius: 10px;
        background-color: #fff;
        .item_img {
          width: 100%;
          border-radius: 10px;
          background-size: contain;
          background-image: url('../../../../images/placeholderImg/product-img-load.png')
        }
        .desc {
          margin-left: 10px;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
        }
        .user_info {
          .avatar {
            width: 25px;
            height: 25px;
            margin-left: 10px;
            border-radius: 50%;
            vertical-align: middle;
          }
          .username {
            padding-left: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
