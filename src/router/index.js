import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/ShangLogin.vue'

import Myorder from '../views/myorder/ShangMyorder.vue'
import Pay from '../views/pay/ShangPay.vue'
import Prodetail from '../views/prodetail/ShangProdetail.vue'
import Search from '../views/search/ShangSearch.vue'
import SearchList from '../views/search/ShangSearchList.vue'
import AddressList from '../views/address/AddressList.vue'
import AddressEdit from '../views/address/AddressEdit.vue'

import store from '@/store'

const Layout = () => import('../views/layout/index.vue')
const Cart = () => import('../views/layout/cart.vue')
const Category = () => import('../views/layout/category.vue')
const Home = () => import('../views/layout/home.vue')
const User = () => import('../views/layout/user.vue')

Vue.use(VueRouter)
// 路由配置
const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },
    { path: '/myorder', component: Myorder },
    { path: '/pay', component: Pay },
    { path: '/prodetail', component: Prodetail },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList },
    { path: '/addresslist', component: AddressList },
    { path: '/addressedit', component: AddressEdit }
  ]
})
// 请求守卫
const jurisdiction = ['/pay', '/myorder', '/addresslist', '/addressedit']
router.beforeEach((to, from, next) => {
  if (!jurisdiction.includes(to.path)) {
    next()
    return
  }
  if (store.getters.token) {
    next()
  } else {
    next('/login')
  }
})

export default router
