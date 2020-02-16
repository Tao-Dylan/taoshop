import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入一级路由
import Navigation from "@/views/bottomNav/Navigation";

// 懒加载引入二级路由
const Home = () => import("@/views/home/Home.vue");
const Category = () => import("@/views/category/Category");
const Eat = () => import("@/views/eat/Eat");
const Cart = () => import("@/views/cart/Cart");
const Profile = () => import("@/views/profile/Profile");

const routes = [
  {
    path: "/",
    redirect: "/navigation"
  },
  {
    path: "/navigation",
    name: "navigation",
    component: Navigation,
    children: [
      {
        path: "/navigation",
        redirect: "/navigation/home"
      },
      {
        path: "home",
        name: "home",
        component: Home,
        meta: { //是否数据缓存
          keepAlive: true
        }
      },
      {
        path: "category",
        name: "category",
        component: Category
      },
      {
        path: "eat",
        name: "eat",
        component: Eat
      },
      {
        path: "cart",
        name: "cart",
        component: Cart
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
