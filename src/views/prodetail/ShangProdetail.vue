<template>
  <div class="prodetail">
    <van-nav-bar
      fixed
      title="商品详情页"
      left-arrow
      @click-left="$router.go(-1)"
    />

    <van-swipe :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="item in list.goods_images" :key="item.file_id">
        <img :src="item.external_url" />
      </van-swipe-item>

      <template #indicator>
        <div class="custom-indicator">
          {{
            list.goods_images && list.goods_images.length
              ? current + 1 + " / " + list.goods_images.length
              : "0 / 0"
          }}
        </div>
      </template>
    </van-swipe>

    <!-- 商品说明 -->
    <div class="info">
      <div class="title">
        <div class="price">
          <span class="now">￥{{ list.goods_price_max }}</span>
          <span class="oldprice">￥{{ list.line_price_max }}</span>
        </div>
        <div class="sellcount">已售{{ list.goods_sales }}件</div>
      </div>
      <div class="msg text-ellipsis-2">
        {{ list.goods_name }}
      </div>

      <div class="service">
        <div class="left-words">
          <span><van-icon name="passed" />七天无理由退货</span>
          <span><van-icon name="passed" />48小时发货</span>
        </div>
        <div class="right-icon">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>

    <!-- 商品评价 -->
    <div class="comment">
      <div class="comment-title">
        <div class="left">商品评价 ({{ this.commentNum.total }}条)</div>
        <div class="right">查看更多 <van-icon name="arrow" /></div>
      </div>
      <div class="comment-list">
        <div
          class="comment-item"
          v-for="item in commentNum.list"
          :key="item.comment_id"
        >
          <div class="top">
            <img
              :src="
                item.user.avatar_url ||
                'https://smart-shop.itheima.net/static/default-avatar.png'
              "
              alt=""
            />
            <div class="name">{{ item.user.nick_name }}</div>
            <van-rate
              :size="16"
              :value="item.score / 2"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
          </div>
          <div class="content">{{ item.content }}</div>
          <div class="time">{{ item.create_time }}</div>
        </div>
      </div>
    </div>
    <!-- 商品描述 -->
    <div class="desc" v-html="list.content"></div>

    <!-- 底部 -->
    <div class="footer">
      <van-goods-action>
        <van-goods-action-icon
          icon="wap-home-o"
          text="首页"
          @click="$router.push('/home')"
        />
        <van-goods-action-icon icon="cart-o" text="购物车" :badge="cartNum>0?cartNum:''" @click="$router.push('/cart')" />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="addCart"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="addShop"
        />
      </van-goods-action>
    </div>
    <van-action-sheet
      v-model="show"
      :title="mode === 'cart' ? '加入购物车' : '立刻购买'"
    >
      <div class="product">
        <div class="product-title">
          <div class="left">
            <img :src="list.goods_image" alt="" />
          </div>
          <div class="right">
            <div class="price">
              <span>¥</span>
              <span class="nowprice">{{ list.goods_price_max }}</span>
            </div>
            <div class="count">
              <span>库存</span>
              <span>{{ list.stock_total }}</span>
            </div>
          </div>
        </div>
        <div class="num-box">
          <span>数量</span>
          <countBox v-model="count" />
        </div>
        <div class="showbtn" v-if="list.stock_total > 1">
          <div class="btn" v-if="mode === 'cart'" @click="addCartNow">加入购物车</div>
          <div class="btn now" v-else @click="shopNow">立刻购买</div>
        </div>
        <div class="btn-none" v-else>该商品已抢完</div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CountBox from '@/components/CountBox.vue'
import { getProdetail, getProductReviews } from '@/api/prodetail'
import { addCart } from '@/api/cart'
export default {
  components: { CountBox },
  name: 'ProDetail',
  data () {
    return {
      list: [],
      current: 0,
      commentNum: '',
      show: false,
      mode: 'cart',
      count: 1
    }
  },
  computed: {
    ...mapGetters('cart', ['cartNum'])
  },
  async created () {
    const particulars = await getProdetail(this.$route.query.id)
    const comment = await getProductReviews(this.$route.query.id)
    this.list = particulars.data.detail
    this.commentNum = comment.data
    if (this.$store.getters.token) {
      this.$store.dispatch('cart/getCartAction')
    }
  },
  methods: {
    onChange (index) {
      this.current = index
    },
    addCart () {
      this.mode = 'cart'
      this.show = true
    },
    addShop () {
      this.mode = 'buy'
      this.show = true
    },
    async addCartNow () {
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要登录才能继续操作哦',
          confirmButtonText: '去登录',
          cancelButtonText: '再逛逛'
        }).then(() => {
          this.$router.replace({
            path: '/login',
            query: {
              backUrl: this.$route.fullPath
            }
          })
        }).catch(() => {
          this.$router.push('/home')
        })
      } else {
        await addCart(this.list.goods_id, this.count, this.list.skuList[0].goods_sku_id)
        this.show = false
        await this.$store.dispatch('cart/getCartAction')
        this.$toast('加入购物车成功')
      }
    },
    shopNow () {
      this.$router.push(`/pay?goodsid=${this.list.goods_id}&count=${this.count}`)
    }
  }
}
</script>

<style lang="less" scoped>
.prodetail {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  img {
    display: block;
    width: 100%;
  }
  .custom-indicator {
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 5px 10px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }
  .desc {
    width: 100%;
    overflow: scroll;
    ::v-deep img {
      display: block;
      width: 100% !important;
    }
  }
  .info {
    padding: 10px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    .now {
      color: #fa2209;
      font-size: 20px;
    }
    .oldprice {
      color: #959595;
      font-size: 16px;
      text-decoration: line-through;
      margin-left: 5px;
    }
    .sellcount {
      color: #959595;
      font-size: 16px;
      position: relative;
      top: 4px;
    }
  }
  .msg {
    font-size: 16px;
    line-height: 24px;
    margin-top: 5px;
  }
  .service {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    margin-top: 10px;
    font-size: 16px;
    background-color: #fafafa;
    .left-words {
      span {
        margin-right: 10px;
      }
      .van-icon {
        margin-right: 4px;
        color: #fa2209;
      }
    }
  }

  .comment {
    padding: 10px;
  }
  .comment-title {
    display: flex;
    justify-content: space-between;
    .right {
      color: #959595;
    }
  }

  .comment-item {
    font-size: 16px;
    line-height: 30px;
    .top {
      height: 30px;
      display: flex;
      align-items: center;
      margin-top: 20px;
      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
      .name {
        margin: 0 10px;
      }
    }
    .time {
      color: #999;
    }
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 55px;
    background-color: #fff;
    border-top: 1px solid #ccc;
  }
}

.tips {
  padding: 10px;
}

.product {
  .product-title {
    display: flex;
    .left {
      img {
        width: 90px;
        height: 90px;
      }
      margin: 10px;
    }
    .right {
      flex: 1;
      padding: 10px;
      .price {
        font-size: 14px;
        color: #fe560a;
        .nowprice {
          font-size: 24px;
          margin: 0 5px;
        }
      }
    }
  }

  .num-box {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }

  .btn,
  .btn-none {
    height: 40px;
    line-height: 40px;
    margin: 20px;
    border-radius: 20px;
    text-align: center;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 148, 2);
  }
  .btn.now {
    background-color: #fe5630;
  }
  .btn-none {
    background-color: #cccccc;
  }
}
</style>
