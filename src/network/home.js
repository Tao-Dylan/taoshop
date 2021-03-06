import request from "./request";

// 基础路径
const BASE_URL = "https://mock.cangdu.org/mock/5d940466d360e8289c6a8eb7/api/";

// 暴露发送 home 页面数据的请求
export const getHomeData = () =>
  request({
    url: BASE_URL + "homeApi"
  });
