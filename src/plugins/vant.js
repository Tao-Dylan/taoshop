import Vue from "vue";
// 1.引入Tabbar
import {
  Tabbar,
  TabbarItem,
  Icon,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  CountDown,
  Loading,
  Tab,
  Tabs,
  Lazyload 
} from "vant";

Vue.use(Tabbar).use(TabbarItem); // 一级路由导航栏
Vue.use(Icon); // 自带图标
Vue.use(Swipe); // 轮播图
Vue.use(SwipeItem);
Vue.use(Grid); // 九宫格
Vue.use(GridItem);
Vue.use(CountDown); // 倒计时
Vue.use(Loading); // 加载中
Vue.use(Tab); // tab标签栏
Vue.use(Tabs);
Vue.use(Lazyload);//图片懒加载 
