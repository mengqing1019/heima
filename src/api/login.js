import request from '../utils/request'
// 获取图形验证码
export const GraphicVerificationCode = () => {
  return request.get('/captcha/image')
}
// 获取短信验证码
export const GetVerificationCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}
// 登录
export const Login = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false,
      mobile,
      partyData: {},
      smsCode
    }
  })
}
