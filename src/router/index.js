import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入一级路由组件
import Navigation from "@/views/bottomNav/Navigation";

// 懒加载引入二级路由组件
const Home = () => import("@/views/home/Home.vue");
const Category = () => import("@/views/category/Category");
const Eat = () => import("@/views/eat/Eat");
const Cart = () => import("@/views/cart/Cart");
const Profile = () => import("@/views/profile/Profile");

// 加载订单相关组件
const Order = () => import("@/views/order/Order");
const MyAddress = () => import("@/views/order/childComps/address/MyAddress");
const AddAddress = () => import("@/views/order/childComps/address/AddAddress");
const EditAddress = () =>
  import("@/views/order/childComps/address/EditAddress");

// 登录组件
const Login = () => import("@/views/login/Login");

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
        meta: {
          //是否数据缓存
          keepAlive: true
        }
      },
      {
        path: "category",
        name: "category",
        component: Category,
        meta: {
          //是否数据缓存
          keepAlive: true
        }
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
  },
  {
    path: "/order",
    name: "order",
    component: Order,
    children: [
      {
        path: "myAddress",
        name: "myAddress",
        component: MyAddress,
        children: [
          {
            path: "addAddress",
            name: "addAddress",
            component: AddAddress
          },
          {
            path: "editAddress",
            name: "editAddress",
            component: EditAddress
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
