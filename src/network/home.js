import request from "./request";

// 基础路径
const BASE_URL = "http://demo.itlike.com/web/xlmc";

// 暴露发送 home 页面数据的请求
export const getHomeData = () => request({
  url: BASE_URL + "/api/homeApi"
});
