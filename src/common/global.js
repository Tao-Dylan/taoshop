// 本地化存储
export const setLocalStore = (key, content) => {
  if (!key) return;
  if (typeof content !== "string") {
    // 转换为josn字符串
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(key, content);
};

// 本地化获取
export const getLocalStore = key => {
  if (!key) return;
  return window.localStorage.getItem(key);
};

// 本地化删除
export const removeLocalStare = key => {
  if (!key) return;
  return window.localStorage.removeItem(key);
};
