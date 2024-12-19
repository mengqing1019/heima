import { getCartList, updateCart, deleteCart } from '@/api/cart'
import { submitOrder } from '@/api/orderform'
export default {
  namespaced: true,
  state () {
    return {
      // 购物车列表
      cartList: []
    }
  },
  mutations: {
    // 设置购物车列表
    setCartList (state, cartList) {
      state.cartList = cartList
    },
    // 改变商品数量
    changeCount (state, obj) {
      const { goodsId, value } = obj
      const index = state.cartList.findIndex(item => item.goods_id === goodsId)
      state.cartList[index].goods_num = value
    }
  },
  actions: {
    // 获取购物车列表
    async getCartAction (context) {
      const { data } = await getCartList()
      data.list.forEach(item => {
        item.isChecked = false
      })
      context.commit('setCartList', data.list)
    },
    // 改变商品数量
    async changeCountAction (context, obj) {
      await context.commit('changeCount', { goodsId: obj.obj.goodsId, value: obj.obj.value })
      await updateCart(obj.obj.goodsId, obj.obj.value, obj.obj.skuId)
    },
    // 删除购物车商品
    async delCartList (context) {
      const cartIds = context.getters.isCheckedNum.map(item => item.id)
      await deleteCart(cartIds)
      context.state.cartList = context.getters.noisCheckedNum
    },
    // 提交订单
    async sumbitCart (context, params) {
      const cartIds = JSON.parse(localStorage.getItem('isPay')).map(item => item.id)
      params.cartIds = cartIds.toString()
      console.log(params)
      await submitOrder(params)
      context.state.cartList = context.getters.noisCheckedNum
    }
  },
  getters: {
    // 购物车商品总数
    cartNum (state) {
      return state.cartList.reduce((pre, cur) => pre + cur.goods_num, 0)
    },
    // 购物车选中的商品
    isCheckedNum (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    // 购物车未选中的商品
    noisCheckedNum (state) {
      return state.cartList.filter(item => item.isChecked === false)
    },
    // 购物车选中的商品总数
    selCount (state, getters) {
      return getters.isCheckedNum.reduce((sum, item, index) => sum + item.goods_num, 0)
    },
    // 购物车选中的商品的总价格
    totalPrice (state, getters) {
      return getters.isCheckedNum.reduce((sum, item, index) => sum + item.goods_num * item.goods.goods_price_max, 0)
    }
  }
}
