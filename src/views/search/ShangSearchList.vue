<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)" />

    <van-search
      readonly
      shape="round"
      background="#ffffff"
      :value='search'
      show-action
      @click="$router.push('/search')"
    >
      <template #action>
        <van-icon class="tool" :name="flag?'apps-o':'list-switch'" @click="flag =!flag" />
      </template>
    </van-search>

    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div class="sort-item">综合</div>
      <div class="sort-item">销量</div>
      <div class="sort-item">价格 </div>
    </div>

    <div v-bind:class="{'goods-list': flag,'goods-list-small':!flag}">
      <GoodsItem v-for="item in list" :key="item.goods_id" :item="item" :flag="flag"></GoodsItem>
    </div>
  </div>
</template>

<script>
import { searchList } from '@/api/search'
import GoodsItem from '@/components/GoodsItem.vue'
export default {
  name: 'SearchIndex',
  data () {
    return {
      page: 1,
      list: [],
      search: this.$route.query.search,
      flag: true
    }
  },
  components: {
    GoodsItem
  },
  async created () {
    if (!this.search) {
      const res = await searchList({
        categoryId: this.$route.query.categoryId,
        page: 1
      })
      this.list = res.data.list.data
    } else {
      const res = await searchList({
        goodsName: this.search,
        page: 1
      })
      this.list = res.data.list.data
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
.goods-list-small{
    display: flex;
}
</style>
