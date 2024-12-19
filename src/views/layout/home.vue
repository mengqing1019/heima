<template>
  <div class="home" v-if="list.length!==0">
    <!-- 导航条 -->
    <van-nav-bar title="智慧商城" fixed />

    <!-- 搜索框 -->
    <van-search
      readonly
      shape="round"
      background="#f1f1f2"
      :placeholder="list[0].params.placeholder"
      @click="$router.push('/search')"
    />

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in list[1].data" :key="item.imgName">
        <img :src="item.imgUrl" alt="">
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar
  color="#fff" background="#707070" left-icon="info-o" scrollable
  :text="list[2].params.text"
/>

    <!-- 导航 -->
    <van-grid column-num="5" icon-size="40">
      <van-grid-item
        v-for="item in list[3].data" :key="item.imgUrl"
        :icon="item.imgUrl"
        :text="item.text"
        @click="$router.push('/category')"
      />
    </van-grid>

    <!-- 主会场 -->
    <div class="main">
      <img :src="list[4].data[0].imgUrl" alt="">
    </div>

    <!-- 猜你喜欢 -->
    <div class="guess" >
      <p v-html="list[5].params.content"></p>
      <div class="goods-list">
        <GoodsItem v-for="item in list[6].data" :item="item" :key="item.goods_id" :flag="flag"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { getHomeData } from '@/api/home'
export default {
  name: 'HomePage',
  data () {
    return {
      list: [],
      flag: true
    }
  },
  async created () {
    const res = await getHomeData()
    this.list = res.data.pageData.items
  },
  components: {
    GoodsItem
  }

}
</script>

<style lang="less" scoped>
// 主题 padding
.home {
  padding-top: 100px;
  padding-bottom: 50px;
}

// 导航条样式定制
.van-nav-bar {
  z-index: 999;
  background-color: #c21401;
  ::v-deep .van-nav-bar__title {
    color: #fff;
  }
}

// 搜索框样式定制
.van-search {
  position: fixed;
  width: 100%;
  top: 46px;
  z-index: 999;
}

// 分类导航部分
.my-swipe .van-swipe-item {
  height: 185px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 185px;
}

// 主会场
.main img {
  display: block;
  width: 100%;
}

// 猜你喜欢
.guess .guess-title {
  height: 40px;
  line-height: 40px;
  text-align: center;
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
