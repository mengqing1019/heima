import store from '@/store'
// 设置默认值
const KEY = 'usermessage'
// 获取用户信息
export const getInfo = () => {
  const defaultInfo = { token: '', userId: '' }
  const result = localStorage.getItem(KEY)
  return result ? JSON.parse(result) : defaultInfo
}
// 设置用户信息
export const setInfo = (info) => {
  localStorage.setItem(KEY, JSON.stringify(info))
}
// 删除用户信息
export const removeInfo = () => {
  localStorage.removeItem(KEY)
}
// 设置默认值
const search = 'search'
// 获取历史搜索
export const getHistorySearch = () => {
  const res = localStorage.getItem(search)
  return !res ? [] : (JSON.parse(res).userId === store.state.user.userInfo.userId ? JSON.parse(res).history : [])
}
// 设置历史搜索
export const setHistorySearch = (obj) => {
  localStorage.setItem(search, JSON.stringify(obj))
}
