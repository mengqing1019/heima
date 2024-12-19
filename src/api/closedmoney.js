import request from '../utils/request'
// 获取收货地址列表
export const getClosedMoneyList = () => {
  return request.get('/address/list')
}
// 获取默认地址id
export const getDefaultAddressId = () => {
  return request.get('/address/defaultId')
}
// 获取省市区-添加地址
export const getChinaAreaList = () => {
  return request.get('/region/tree')
}
// 添加收货地址
export const addClosedMoney = (data) => {
  return request.post('/address/add', data)
}
// 获取收获地址详情
export const getClosedMoneyDetail = (id) => {
  return request.get('/address/detail', {
    params: {
      addressId: id
    }
  })
}
// 删除收货地址
export const deleteClosedMoney = (id) => {
  return request.post('/address/remove', {
    addressId: id
  })
}
// 修改收货地址
export const updateClosedMoney = (data) => {
  return request.post('/address/edit', {
    addressId: data.addressId,
    form: data.form
  })
}
// 设置默认地址
export const setDefaultAddress = (id) => {
  return request.post('/address/setDefault', {
    addressId: id
  })
}
