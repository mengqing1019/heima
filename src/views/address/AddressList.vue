<template>
<div>
    <van-nav-bar title="收货地址" left-arrow @click-left="$router.push(`/pay?id=${chosenAddressId}`)" />
<van-address-list
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
  @add="$router.replace('/addressedit?flag=true')"
  @edit="edit"
/>

</div>
</template>

<script>
import { getClosedMoneyList, getDefaultAddressId } from '@/api/closedmoney'
export default {
  name: 'AddressList',
  data () {
    return {
      chosenAddressId: '',
      list: []
    }
  },
  async created () {
    const res = await getClosedMoneyList()
    const defaulId = await getDefaultAddressId()
    this.chosenAddressId = defaulId.data.defaultId
    this.list = res.data.list.map(item => {
      return {
        id: item.address_id,
        name: item.name,
        tel: item.phone,
        address: item.region.province + ' ' + item.region.city + ' ' + item.region.region + ' ' + item.detail,
        isDefault: item.address_id === this.chosenAddressId
      }
    })
  },
  methods: {
    edit (e) {
      this.$router.replace(`/addressedit?flag=false&id=${e.id}`)
    }
  }
}
</script>

<style lang='less' scoped>

</style>
