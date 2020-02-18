import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/vant";
import "normalize.css";
import "./assets/css/base.css";
import "@/common/filter";

// 处理移动端延迟300毫秒的问题
import FastClick from "fastclick";
FastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
