<template>
  <div>
    <van-nav-bar
      :title="this.$route.query.flag === 'false' ? '编辑地址' : '新增地址'"
      left-arrow
      @click-left="$router.push('/addresslist')"
    />
    <van-address-edit
      :area-list="areaList"
      show-delete
      area-placeholder="请选择地区"
      show-area-code
      @save="onSave"
      @delete="onDelete"
      :address-info="form"
      :show-set-default="flag"
      @change-default='onSetDefault'
    />
    <!--  @delete="onDelete"
  @change-detail="onChangeDetail" -->
  </div>
</template>

<script>
import { areaList } from '@vant/area-data'
import { getChinaAreaList, getClosedMoneyList, setDefaultAddress, addClosedMoney, getClosedMoneyDetail, deleteClosedMoney, updateClosedMoney, getDefaultAddressId } from '@/api/closedmoney.js'
export default {
  name: 'AddressEdit',
  data () {
    return {
      areaList,
      list: {},
      form: {
        name: '',
        tel: '',
        areaCode: '',
        addressDetail: '',
        isDefault: ''
      },
      flag: !!this.$route.query.id
    }
  },
  async created () {
    if (this.flag) {
      const res = await getClosedMoneyDetail(this.$route.query.id)
      this.form.name = res.data.detail.name
      this.form.tel = res.data.detail.phone
      this.form.addressDetail = res.data.detail.detail
      if (res.data.detail.region.province === '北京' || res.data.detail.region.province === '上海' || res.data.detail.region.province === '天津' || res.data.detail.region.province === '重庆') {
        res.data.detail.region.province = res.data.detail.region.province + '市'
      }
      for (const key in this.areaList.county_list) {
        if (this.areaList.county_list[key] === res.data.detail.region.region) {
          this.form.areaCode = key
        }
      }
      const result = await getDefaultAddressId()
      if (result.data.defaultId === +this.$route.query.id) {
        this.form.isDefault = true
      } else this.form.isDefault = false
    }
    const res = await getChinaAreaList()
    const provincelist = {}
    const citylist = {}
    const countylist = {}
    for (const provinceKeys in res.data.list) {
      provincelist[provinceKeys] = res.data.list[provinceKeys].name
      for (const cityKeys in res.data.list[provinceKeys].city) {
        citylist[cityKeys] = res.data.list[provinceKeys].city[cityKeys].name
        for (const countyKeys in res.data.list[provinceKeys].city[cityKeys].region) {
          countylist[countyKeys] = res.data.list[provinceKeys].city[cityKeys].region[countyKeys].name
        }
      }
    }
    for (const key in this.areaList.city_list) {
      let i = 0
      for (const keys in citylist) {
        if (this.areaList.city_list[key] === citylist[keys]) {
          i = 1
        }
      }
      if (i === 0) {
        console.log(key)
      }
    }
    console.log(citylist)
    console.log(this.areaList.city_list)
    provincelist[1] = '北京市'
    provincelist[19] = '天津市'
    provincelist[782] = '上海市'
    provincelist[2223] = '重庆市'
    this.list = { provincelist, citylist, countylist }
  },
  methods: {
    async onSave (value) {
      let provinceId = ''
      let cityId = ''
      let countyId = ''
      for (const key in this.list.provincelist) {
        if (value.province === this.list.provincelist[key]) {
          provinceId = key
        }
      }
      for (const key in this.list.citylist) {
        if (value.city === this.list.citylist[key]) {
          cityId = key
        }
      }
      for (const key in this.list.countylist) {
        if (value.county === this.list.countylist[key]) {
          countyId = key
        }
      }
      if (this.flag) {
        const addressId = this.$route.query.id
        await updateClosedMoney({
          addressId,
          form: {
            name: value.name,
            phone: value.tel,
            region: [
              {
                value: provinceId,
                label: value.province
              },
              {
                value: cityId,
                label: value.city
              },
              {
                value: countyId,
                label: value.county
              }
            ],
            detail: value.addressDetail
          }
        })
        this.$toast('修改成功')
        this.$router.go(-1)
      } else {
        await addClosedMoney({
          form: {
            name: value.name,
            phone: value.tel,
            region: [
              {
                value: provinceId,
                label: value.province
              },
              {
                value: cityId,
                label: value.city
              },
              {
                value: countyId,
                label: value.county
              }
            ],
            detail: value.addressDetail
          }
        })
        this.$toast('保存成功')
        this.$router.go(-1)
      }
    },
    async onDelete () {
      await deleteClosedMoney(this.$route.query.id)
    },
    async onSetDefault (e) {
      if (e) {
        await setDefaultAddress(this.$route.query.id)
        this.$toast('设置成功')
      } else {
        const res = await getClosedMoneyList('')
        for (let i = 0; i < res.data.list.length; i++) {
          if (res.data.list[i].address_id !== +this.$route.query.id) {
            await setDefaultAddress(res.data.list[i].address_id)
            this.$toast('设置成功')
            break
          }
        }
      }
    }
  }
}
</script>
