import request from "./request";

// 基础路径
const BASE_URL = "https://mock.cangdu.org/mock/5d940466d360e8289c6a8eb7/api/";

// 暴露发送 category 页面数据的请求
// 左边内容数据
export const getCategoryLeftData = () =>
  request({
    url: BASE_URL + "homeApi/categories"
  });
// 右边内容数据(根据左边点击传值)
export const getCategoryRightData = params =>
  request({
    url: BASE_URL + "homeApi/categoriesdetail" + params
  });
