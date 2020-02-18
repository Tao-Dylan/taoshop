import {
  ADD_GOODS,
  INIT_SHOP_CART,
  REDUCE_GOODS,
  SINGLE_SELECT_GOODS,
  ALL_SELECT_GOODS,
  DELETE_SELECT_GOODS,
  DELETE_SINGLE_GOODS
} from "./mutation-type";

import Vue from "vue";

// 引入本地存储
import { getLocalStore, setLocalStore } from "../common/global";

export default {
  // 1.添加商品
  [ADD_GOODS](state, { goodsID, goodsName, smallImage, goodsPrice }) {
    let shopCart = state.shopCart;
    // 1.1判断商品是否存在
    if (shopCart[goodsID]) {
      // 1.2 商品存在,商品数量  + 1
      shopCart[goodsID]["num"]++;
    } else {
      // 1.3 商品不存在，创建商品
      shopCart[goodsID] = {
        num: 1,
        id: goodsID,
        name: goodsName,
        price: goodsPrice,
        smallImage: smallImage,
        checked: true
      };
      // 1.4 给shopCart产生新对象
      state.shopCart = {
        ...shopCart
      };
      // 1.5 本地存储数据
      setLocalStore("shopCart", state.shopCart);
    }
  },
  // 2.页面初始化，获取本地存储数据
  [INIT_SHOP_CART](state) {
    let initShopCart = getLocalStore("shopCart");
    if (initShopCart) {
      //  判断本地是否有，如有则直接赋值给state
      state.shopCart = JSON.parse(initShopCart);
    }
  },
  // 3.减少商品数量
  [REDUCE_GOODS](state, { goodsID }) {
    let shopCart = state.shopCart;
    let goods = shopCart[goodsID];
    if (goods) {
      // 存在，且据需判断数量
      if (goods["num"] > 0) {
        goods["num"]--;
      }
      if (goods["num"] === 0) {
        // 删除商品
        delete shopCart[goodsID];
      }
      // 同步state中的数据
      state.shopCart = { ...shopCart };
      // 同步本地数据
      setLocalStore("shopCart", state.shopCart);
    }
  },
  //  4.单个商品选中
  [SINGLE_SELECT_GOODS](state, { goodsID }) {
    let shopCart = state.shopCart;
    let goods = shopCart[goodsID];
    if (goods) {
      if (goods["checked"]) {
        // 存在
        goods.checked = !goods.checked;
      } else {
        // 不存在，那么默认复制checked为true
        Vue.set(goods, "checked", true); // 必须用Vue的set
      }
    }
    // 将数据同步到state中
    state.shopCart = {
      ...shopCart
    };
    // 将数据更新到本地
    setLocalStore("shopCart", state.shopCart);
  },
  // 5.全选商品
  [ALL_SELECT_GOODS](state, { isSelected }) {
    let shopCart = state.shopCart;
    Object.values(shopCart).forEach((goods, index) => {
      if (goods.checked) {
        goods.checked = isSelected;
      } else {
        Vue.set(goods, "checked", !isSelected); // 必须用Vue的set
      }
    });
    // 将数据同步到state中
    state.shopCart = {
      ...shopCart
    };
    // 将数据更新到本地
    setLocalStore("shopCart", state.shopCart);
  },
  // 6.删除选中商品
  [DELETE_SELECT_GOODS](state) {
    let shopCart = state.shopCart;
    Object.values(shopCart).forEach((goods, index) => {
      if (goods.checked) {
        delete shopCart[goods.id];
      }
    });
    // 将数据同步到state中
    state.shopCart = {
      ...shopCart
    };
    // 将数据更新到本地
    setLocalStore("shopCart", state.shopCart);
  }
};
