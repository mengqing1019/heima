import request from '@/utils/request'
// 搜索商品
export const searchList = ({ categoryId, goodsName, page }) => {
  return request.get('/goods/list', {
    params: {
      categoryId, goodsName, page
    }
  })
}
