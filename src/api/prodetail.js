import request from '../utils/request'

// 商品详情
export const getProdetail = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}

// 商品评价总数
export const noComments = (goodsId) => {
  return request.get('/comment/total', {
    params: {
      goodsId
    }
  })
}

// 获取商品评论
export const getProductReviews = (goodsId) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit: 2
    }
  })
}
