import request from "./request";

// 基础路径
const BASE_URL = "http://demo.itlike.com/web/xlmc";

// 暴露发送 category 页面数据的请求
// 左边内容数据
export const getCategoryLeftData = () =>
  request({
    url: BASE_URL + "/api/homeApi/categories"
  });
// 右边内容数据(根据左边点击传值)
export const getCategoryRightData = params =>
  request({
    url: BASE_URL + "/api/homeApi/categoriesdetail" + params
  });
