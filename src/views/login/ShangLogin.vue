<template>
  <div class="login">
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.back()" />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input v-model="phone" class="inp" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
        <div class="form-item">
          <input v-model="picCode" class="inp" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img v-if="picUrl" :src="picUrl" alt="" @click="GraphicVerificationCode">
        </div>
        <div class="form-item">
          <input v-model="message" class="inp" placeholder="请输入短信验证码" type="text">
          <button @click='GetVerificationCode'>
            {{second===totalSecond?'获取验证码':second+'s后重新获取'}}</button>
        </div>
      </div>

      <div class="login-btn" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
import { GraphicVerificationCode, GetVerificationCode, Login } from '@/api/login'
export default {
  name: 'LoginPage',
  data () {
    return {
      phone: '15623759132', // 用户输入的手机号
      picCode: '', // 用户输入的图形验证码
      picUrl: '', // 图形验证码的url
      picKey: '', // 图形验证码的key
      second: 5, // 倒计时秒数
      totalSecond: 5, // 总倒计时秒数
      timer: null, // 倒计时定时器
      message: '246810'
    }
  },
  async created () {
    this.GraphicVerificationCode()
  },
  methods: {
    async GraphicVerificationCode () {
      const res = await GraphicVerificationCode()
      this.picUrl = res.data.base64
      this.picKey = res.data.key
    },
    async GetVerificationCode () {
      this.$toast('验证码已发送，请注意查收')
      if (!this.logic()) return
      const res = await GetVerificationCode(this.picCode, this.picKey, this.phone)
      if (res.status === 200) {
        if (!this.timer && this.second === this.totalSecond) {
          this.timer = setInterval(() => {
            this.second--
            if (this.second === 0) {
              clearInterval(this.timer)
              this.timer = null// 重置定时器
              this.second = this.totalSecond// 重置倒计时秒数
            }
          }, 1000)
        }
      } else {
        this.$toast(res.message)
      }
    },
    async login () {
      if (!this.logic()) {
        return
      }
      if (!/^\d{6}$/.test(this.message)) {
        this.$toast('请输入正确的手机验证码')
        return
      }
      const res = await Login(this.phone, this.message)
      this.$store.commit('user/setUserInfo', res.data)
      this.$toast('登录成功')
      this.$store.dispatch('cart/getCartAction')
      const url = this.$route.query.backUrl || '/'
      this.$router.replace(url)
    },
    logic () {
      if (!/^1[3-9]\d{9}$/.test(this.phone)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    }
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
