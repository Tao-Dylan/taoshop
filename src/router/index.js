import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入一级路由
import Navigation from "@/views/bottomNav/Navigation";

// 懒加载引入二级路由
const Home = () => from("@/views/home/Home");
const Category = () => from("@/views/category/Category");
const Eat = () => from("@/views/eat/Eat");
const Cart = () => from("@/views/cart/Cart");
const Profile = () => from("@/views/profile/Profile");

const routes = [
  {
    path: "/",
    redirect: "/navigatin"
  },
  {
    path: "/navigatin",
    name: "navigation",
    component: Navigation,
    children: [
      {
        path: "/navigation",
        redirect: "/navigatin/home"
      },
      {
        path: "home",
        name: Home
      },
      {
        path: "category",
        name: Category
      },
      {
        path: "eat",
        name: Eat
      },
      {
        path: "cart",
        name: Cart
      },
      {
        path: "profile",
        name: Profile
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
