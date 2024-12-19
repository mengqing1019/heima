import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      // 用户信息
      userInfo: getInfo()
    }
  },
  mutations: {
    // 设置用户信息
    setUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: {

  },
  getters: {
  }
}
