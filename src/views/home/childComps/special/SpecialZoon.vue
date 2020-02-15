<template>
  <div id="special_wrapper">
    <div class="titleWrapper">
      <div class="title">特色专区</div>
    </div>
    <div class="contentWrapper">
      <!-- 新品尝鲜 -->
      <div class="wrapperItem">
        <div class="newItem" v-for="newItem in newItemList" :key="newItem.id">
          <span class="itemTitle">{{newItem.title}}</span>
          <p class="itemSubTitle">{{newItem.subtitle}}</p>
          <img class="itemImg" src="@/images/special/newImageOne.jpg" alt />
          <img class="itemImg" src="@/images/special/newImageTwo.jpg" alt />
        </div>
      </div>
      <!-- 九月热卖 -->
      <div class="hotItem" v-for="hotItem in hotItemList" :key="hotItem.id">
        <span class="itemTitle hotItemTitle">{{hotItem.title}}</span>
        <p class="itemSubTitle">{{hotItem.subtitle}}</p>
        <img class="itemImg" src="@/images/special/hotImageOne.jpg" alt />
        <img class="itemImg" src="@/images/special/hotImageTwo.jpg" alt />
      </div>
      <!-- VIP专享 -->
      <div class="vipItem" v-for="vipItem in vipItemList" :key="vipItem.id">
        <span class="itemTitle vipItemTitle">{{vipItem.title}}</span>
        <p class="itemSubTitle">{{vipItem.subtitle}}</p>
        <img class="itemImg" src="@/images/special/vipImageOne.jpg" alt />
        <img class="itemImg" src="@/images/special/vipImageTwo.jpg" alt />
      </div>
      <!-- 其他列表 -->
      <div class="otherItem" v-for="otherItem in otherItemList" :key="otherItem.id">
        <p class="otherTitle">{{otherItem.title}}</p>
        <p class="otherSubTitle itemSubTitle">{{otherItem.subtitle}}</p>
        <img class="otherImage" src="@/images/special/peanut.jpeg" alt />
      </div>
      <!-- 平价菜场 -->
      <div class="lowPrice" v-for="lowPriceItem in lowPriceItemList" :key="lowPriceItem.id">
        <p class="otherTitle">{{lowPriceItem.title}}</p>
        <p class="otherSubTitle itemSubTitle">{{lowPriceItem.subtitle}}</p>
        <img class="otherImage" src="@/images/special/otherImage.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItemList: [
        {
          id: 0,
          title: "新品尝鲜",
          subtitle: "不时不食, 又闻棱角香~"
        }
      ],
      hotItemList: [
        {
          id: 1,
          title: "九月爆款",
          subtitle: "世界之大不过一盘番茄炒蛋"
        }
      ],
      vipItemList: [
        {
          id: 2,
          title: "VIP 专享",
          subtitle: "阳光玫瑰 VIP只要12.9"
        }
      ],
      otherItemList: [
        {
          id: 3,
          title: "吃什么",
          subtitle: "童年落花生"
        }
      ],
      lowPriceItemList: [
        {
          id: 4,
          title: "平价菜场",
          subtitle: "豆芽0.99"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
#special_wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 0 2.5%;
  margin: 0 auto;
  background-color: #fff;
  .titleWrapper {
    padding: 10px 0;
    .title {
      padding-left: 10px;
      border-left: 5px solid #3cb963;
      font-size: 20px;
    }
  }
  .contentWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    box-sizing: border-box;
    font-size: 13px;
    .wrapperItem {
      width: 50%;
      padding: 7px;
      border: 1px solid #dddbc0;
      .newItem {
        .itemTitle {
          background-image: linear-gradient(135deg, red, orange);
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
    .hotItem {
      width: 50%;
      padding: 7px;
      border: 1px solid #dddbc0;
      border-left: 0;
      .hotItemTitle {
        background-image: linear-gradient(150deg, #b2233f, #f70d3c);
        -webkit-background-clip: text;
        color: transparent;
      }
    }
    .vipItem {
      width: 50%;
      padding: 7px;
      border: 1px solid #dddbc0;
      border-top: none;
      .vipItemTitle {
        color: #a1d69f;
      }
    }
    .otherItem {
      width: 25%;
      padding: 7px;
      border-right: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
      .otherImage {
        width: 50px;
        height: 50px;
      }
    }
    .lowPrice {
      width: 25%;
      padding: 7px;
      border-right: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
      .otherImage {
        width: 50px;
        height: 50px;
      }
    }
  }
}
.itemSubTitle {
  padding: 5px 0;
}
.itemImg {
  margin-left: 15px;
  width: 60px;
  height: 50px;
}
</style>
