<template>
  <div class="cart">
    <van-nav-bar title="购物车" fixed />
    <van-empty v-if="!this.$store.getters.token">
      <van-button
        round
        type="danger"
        class="bottom-button"
        @click="$router.push('/home')"
        >去逛逛</van-button
      >
    </van-empty>
    <!-- 购物车开头 -->
    <div class="cart-title" v-if="this.$store.getters.token">
      <span class="all"
        >共<i>{{  cartNum}}</i
        >件商品</span
      >
      <span class="edit" @click="compileflag=!compileflag">
        <van-icon name="edit" />
        编辑
      </span>
    </div>
    <!-- 购物车列表 -->
      <div class="cart-list">
        <div class="cart-item" v-for="item in cartList" :key="item.goods_id">
          <van-checkbox v-model="item.isChecked" :name="item.goods_id"></van-checkbox>
          <div class="show">
            <img :src="item.goods.goods_image" alt="" />
          </div>
          <div class="info">
            <span class="tit text-ellipsis-2">{{ item.goods.goods_name }}</span>
            <span class="bottom">
              <div class="price">
                ¥ <span>{{ item.goods.goods_price_max }}</span>
              </div>
              <CountBox :value="item.goods_num" @input="value => changeCount( value, item.goods_id, item.goods_sku_id)"></CountBox>
            </span>
          </div>
        </div>
      </div>
    <van-submit-bar
      :price="totalPrice*100"
      :button-text="selNum"
      :disabled="selCount === 0"
      v-if="this.$store.getters.token"
      @submit="compileflag?delCart():toPay()"
    >
    <!-- compileflag?delCart:toPay -->
      <van-checkbox v-if="this.$store.getters.token" name="全选" v-model="qxFlag" @change="selectAll"></van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import CountBox from '@/components/CountBox'
export default {
  name: 'CartPage',
  components: {
    CountBox
  },
  data () {
    return {
      qxFlag: false,
      flag: false,
      compileflag: false
    }
  },
  computed: {
    ...mapGetters('cart', ['cartNum', 'selCount', 'totalPrice', 'isCheckedNum']),
    ...mapState('cart', ['cartList']),
    selNum () {
      return this.compileflag ? (this.selCount > 0 ? `删除（${this.selCount}）` : '删除') : (this.selCount > 0 ? `结算（${this.selCount}）` : '结算')
    }
  },
  methods: {
    selectAll () {
      this.cartList.forEach(item => {
        item.isChecked = this.qxFlag
      })
    },
    changeCount (value, goodsId, skuId) {
      const obj = { value, goodsId, skuId }
      this.$store.dispatch('cart/changeCountAction', {
        obj
      })
    },
    delCart () {
      this.$store.dispatch('cart/delCartList')
    },
    toPay () {
      localStorage.setItem('isPay', JSON.stringify(this.isCheckedNum))
      this.$router.push('/pay')
    }
  }
}
</script>

<style lang="less" scoped>
// 主题 padding
.cart {
  padding-top: 46px;
  padding-bottom: 100px;
  background-color: #f5f5f5;
  min-height: 100vh;
  .cart-title {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-size: 14px;
    .all {
      i {
        font-style: normal;
        margin: 0 2px;
        color: #fa2209;
        font-size: 16px;
      }
    }
    .edit {
      .van-icon {
        font-size: 18px;
      }
    }
  }

  .cart-item {
    margin: 0 10px 10px 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 5px;

    .show img {
      width: 100px;
      height: 100px;
    }
    .info {
      width: 210px;
      padding: 10px 5px;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .bottom {
        display: flex;
        justify-content: space-between;
        .price {
          display: flex;
          align-items: flex-end;
          color: #fa2209;
          font-size: 12px;
          span {
            font-size: 16px;
          }
        }
      }
    }
  }
}
.van-submit-bar {
  bottom: 50px;
}
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>
