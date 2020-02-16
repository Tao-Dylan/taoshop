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
  Lazyload,
  Search,
  Sidebar,
  SidebarItem,
  Divider
} from "vant";

// home页面用到的
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
Vue.use(Lazyload); //图片懒加载
Vue.use(Divider); // 底部分割线

// category用到的
Vue.use(Search); //搜索框
Vue.use(Sidebar); //侧边大菜单
Vue.use(SidebarItem);

// 共用的
