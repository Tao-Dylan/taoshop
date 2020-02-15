import axios from "axios";
import vue from "vue";

export default function request({ url = "", params = {}, type = "GET" }) {
  // 创建 axios 实例
  const instanse = axios.create(url, params, type);

  // 判断请求类型
  if (type === "GET") {
    // 把对象转化为字符串
    let paramsStr = "";
    // 遍历
    Object.keys(params).forEach(key => {
      paramsStr += key + "=" + params[key] + "&";
    });
    if (paramsStr) {
      // 去除最后的 & 符号
      paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf("&"));
    }
    // 在拼接路径
    url += "?" + paramsStr;
    // 再发送ajax请求
    return instanse(url, params, type)
  } else if (type === "POST") {
    // 发送 post 请求
    return instanse(url, params, type)
  }
}
