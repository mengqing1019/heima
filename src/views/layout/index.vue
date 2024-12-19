<template>
  <div>
    <router-view></router-view>
    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="list-switching">分类页</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o" :badge="cartNum>0?cartNum:''">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('cart', ['cartNum'])
  },
  created () {
    if (this.$store.getters.token) {
      this.$store.dispatch('cart/getCartAction')
    }
  }
}
</script>
<style>
</style>
