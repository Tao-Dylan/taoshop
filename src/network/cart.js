import request from "./request";

// 基础路径
const BASE_URL = "https://mock.cangdu.org/mock/5d940466d360e8289c6a8eb7/api/";

// 暴露发送 cart 页面数据的请求

// 猜你喜欢内容数据
export const getGuessYouLike = () =>
  request({
    url: BASE_URL + "cart/youlike"
  });
