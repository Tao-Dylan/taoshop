import request from "./request";

// 基础路径
const BASE_URL = "https://mock.cangdu.org/mock/5d940466d360e8289c6a8eb7/api/";

// Eat 页面 今日菜单的所有菜单分类
export const getTodayMenuCategoryList = () =>
  request({ url: BASE_URL + "recipe/allScene" });

// Eat 页面 菜单菜品
export const getTodayMenuDetail = params =>
  request({
    url: BASE_URL + "recipe/menulist" + params
  });
