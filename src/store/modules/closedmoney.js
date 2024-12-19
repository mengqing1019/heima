import { getClosedMoneyList } from '@/api/closedmoney'
export default {
  namespaced: true,
  state: {
    ClosedMoneyList: []
  },
  mutations: {
    // 设置收货地址列表
    setCartList (state, ClosedMoneyList) {
      state.ClosedMoneyList = ClosedMoneyList
    }
  },
  actions: {
    // 获取购物车列表
    async getClosedMoneyList (context) {
      const { data } = await getClosedMoneyList()
      context.commit('setCartList', data.list)
    }
  }
}
