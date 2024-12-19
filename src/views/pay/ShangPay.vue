<template>
  <div v-if="showFlag">
    <van-nav-bar title="订单结算台" left-arrow @click-left="$router.push('/cart')" />
    <van-contact-card  type="edit" :name="address.name" :tel="address.phone" v-if="addressFlag" @click="$router.push(`/addresslist?${goodsIdFlag?'goodsid='+goodsId+'&count='+count:''}`)"/>
    <van-contact-card  type="add" v-if="!addressFlag" @click="$router.push(`/addresslist?${goodsIdFlag?'goodsid='+goodsId+'&count='+count:''}`)" />
    <div v-if="!goodsIdFlag">
      <van-card
      :price="item.goods.goods_price_max"
      :title="item.goods.goods_name"
      :thumb="item.goods.goods_image"
      v-for="item in isArr"
      :key="item.id"
    >
    <template #footer>
        <CountBox style="margin-left: 60vw" :value="item.goods_num" @input="value => changeCount( value, item.goods_id, item.goods_sku_id)"></CountBox>
      </template>
    </van-card>
      </div>
      <div v-if="goodsIdFlag">
        <van-card
      :price="isArr.goods_price_max"
      :title="isArr.goods_name"
      :thumb="isArr.goods_image"
    >
    <template #footer>
        <CountBox style="margin-left: 60vw" v-model="count"></CountBox>
      </template>
    </van-card>
      </div>
    <div class="flow-num-box">
      <span>共 {{goodsIdFlag?count:selCount}} 件商品，合计：</span>
      <span class="money">￥{{!goodsIdFlag?totalPrice:count*isArr.goods_price_max}}</span>
    </div>
    <div class="pay-detail">
      <div class="pay-cell">
        <span>订单总金额：</span>
        <span class="red">￥{{!goodsIdFlag?totalPrice:count*isArr.goods_price_max}}</span>
      </div>
      <div class="pay-cell">
        <van-coupon-cell
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @click="showList = true"
        />
        <!-- 优惠券列表 -->
        <van-popup
          v-model="showList"
          round
          position="bottom"
          style="height: 90%; padding-top: 4px"
        >
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
        </van-popup>
      </div>

      <div class="pay-cell">
        <span>配送费用：</span>
        <span v-if="false">请先选择配送地址</span>
        <span v-else class="red">+￥0.00</span>
      </div>
    </div>
    <div class="pay-way">
        <span class="tit">支付方式</span>
        <div class="pay-cell">
          <span ><van-icon name="balance-o"  color="#fa2209" />余额支付（可用 ¥ 999919.00 元）</span>
          <!-- <span>请先选择配送地址</span> -->
          <span class="red"><van-icon name="success" /></span>
        </div>
      </div>

      <!-- 买家留言 -->
      <div class="buytips">
        <textarea placeholder="选填：买家留言（50字内）" name="" id="" cols="30" rows="10" v-model="remark"></textarea>
      </div>
      <van-submit-bar :price="!goodsIdFlag?totalPrice*100:count*isArr.goods_price_max*100" button-text="提交订单" @submit="submitOrder" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getDefaultAddressId } from '@/api/closedmoney'
import { getProdetail } from '@/api/prodetail'
import { submitOrder } from '@/api/orderform'
// import { submitOrder } from '@/api/orderform'
import CountBox from '@/components/CountBox'
const coupon = []
export default {
  components: {
    CountBox
  },
  data () {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: coupon || [],
      disabledCoupons: coupon || [],
      address: {},
      addressFlag: false,
      isArr: [],
      showFlag: false,
      goodsIdFlag: !!this.$route.query.goodsid,
      count: +this.$route.query.count || 1,
      goodsId: this.$route.query.goodsid || '',
      remark: ''
    }
  },
  async created () {
    await this.$store.dispatch('closedmoney/getClosedMoneyList')
    if (!this.$route.query.id) {
      if (this.$store.state.closedmoney.ClosedMoneyList.length > 0) {
        this.addressFlag = true
        const res = await getDefaultAddressId()
        this.$store.state.closedmoney.ClosedMoneyList.forEach(item => {
          if (item.address_id === res.data.defaultId) {
            this.address = item
          }
        })
      }
    } else {
      this.addressFlag = true
      this.$store.state.closedmoney.ClosedMoneyList.forEach(item => {
        if (item.address_id === +this.$route.query.id) {
          this.address = item
        }
      })
    }
    this.showFlag = true
    if (!this.goodsIdFlag) {
      const arr = JSON.parse(localStorage.getItem('isPay'))
      await this.getCartAction()
      for (let i = 0; i < this.cartList.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (this.cartList[i].goods_id === arr[j].goods_id && this.cartList[i].goods_sku_id === arr[j].goods_sku_id) {
            this.isArr.push(this.cartList[i])
          }
        }
      }
    } else {
      const res = await getProdetail(this.$route.query.goodsid)
      this.showFlag = true
      this.isArr = res.data.detail
      console.log(this.isArr)
    }
  },
  computed: {
    ...mapState('cart', ['cartList']),
    selCount () {
      let count = 0
      for (let i = 0; i < this.isArr.length; i++) {
        count += this.isArr[i].goods_num
      }
      return count
    },
    totalPrice () {
      let price = 0
      for (let i = 0; i < this.isArr.length; i++) {
        price += this.isArr[i].goods_num * this.isArr[i].goods.goods_price_max
      }
      return price.toFixed(2)
    }
  },
  methods: {
    ...mapActions('cart', ['getCartAction', 'sumbitCart']),
    changeCount (value, goodsId, skuId) {
      const obj = { value, goodsId, skuId }
      this.$store.dispatch('cart/changeCountAction', {
        obj
      })
    },
    onChange (index) {
      this.showList = false
      this.chosenCoupon = index
    },
    onExchange (code) {
      this.coupons.push(coupon)
    },
    async submitOrder () {
      const params = { remark: this.remark }
      if (this.goodsIdFlag) {
        params.goodsId = this.isArr.goods_id
        params.goodsNum = this.count
        params.goodsSkuId = this.isArr.skuList[0].goods_sku_id
        params.mode = 'buyNow'
        await submitOrder(params)
      } else {
        params.mode = 'cart'
        this.sumbitCart(params)
      }
      this.$toast('提交成功')
      this.$router.push('/myorder')
    }
  }
}
</script>

<style lang="less" scoped>
.flow-num-box {
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px;
  font-size: 14px;
  border-bottom: 1px solid #efefef;
  .money {
    color: #fa2209;
  }
}
.pay-cell {
  font-size: 14px;
  padding: 10px 12px;
  color: #333;
  display: flex;
  justify-content: space-between;
  .red {
    color: #fa2209;
  }
}
.pay-detail {
  border-bottom: 1px solid #efefef;
}

.pay-way {
  font-size: 14px;
  padding: 10px 12px;
  border-bottom: 1px solid #efefef;
  color: #333;
  .tit {
    line-height: 30px;
  }
  .pay-cell {
    padding: 10px 0;
  }
  .van-icon {
    font-size: 20px;
    margin-right: 5px;
  }
}
.van-cell{
    padding:2.66667vw 0;
}
.buytips {
  display: block;
  textarea {
    display: block;
    width: 100%;
    border: none;
    font-size: 14px;
    padding: 12px;
    height: 100px;
  }
}
</style>
