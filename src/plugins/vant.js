import Vue from "vue";
// 1.引入Tabbar
import {
  Dialog,
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
  Divider,
  Collapse,
  CollapseItem,
  Toast,
  SubmitBar,
  Checkbox
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
Vue.use(Lazyload); //图片懒加载
Vue.use(Divider); // 底部分割线
Vue.use(Search); //搜索框
Vue.use(Sidebar); //侧边大菜单
Vue.use(SidebarItem);
Vue.use(Collapse); // 折叠面板
Vue.use(CollapseItem);
Vue.use(Toast); // 轻提示
Vue.use(SubmitBar); // 购物车提交
Vue.use(Checkbox);
