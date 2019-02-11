<template>
  <div class="account-view">
    <div class="login-view">
      <div class="login-header">
        <p @click="toHreg">无账号先注册</p>
      </div>
      <div class="phone-login-view">
        <div class="m-account-country-phone">
          <div data="中国" class="country-wrapper input-wrapper">
            <input type="text" placeholder="国家和地区" readonly="readonly">
          </div>
          <div class="phone-wrapper input-wrapper">
            <label code="+86"></label>
            <input type="text" autocapitalize="off" placeholder="请填写手机号码">
          </div>
        </div>
        <div class="m-account-input">
          <input type="password" autocapitalize="off" placeholder="输入登录密码，至少6位">
        </div>
        <div class="m-account-captcha">
          <input type="text" autocapitalize="off" placeholder="验证码">
          <img
            src="http://web.breadtrip.com/captcha.jpg?1549884654821"
            height="60%"
            alt="loading"
            class="captcha"
          >
        </div>
        <div class="btn-wrapper">
          <div class="m-account-btn transparent">
            <span>立即登录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toHreg() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Hreg" });
    }
  }
};
</script>
<style scoped>
.account-view {
    position: relative;
    height: 100vh;
    background-color: #4abdcc;
    color: #fff;
    font-weight: 300;
}
.login-view .login-header {
    position: relative;
    width: 85.5%;
    height: 54px;
    margin: 0 auto 8%;
    padding-top: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.login-view .login-header p {
    position: absolute;
    right: 0;
    margin: 8px auto;
    font-size: 1.0rem;
    line-height: 1.42;
    opacity: .8;
}
.phone-login-view {
    margin-top: -5%;
}
.m-account-country-phone .input-wrapper {
    position: relative;
    width: 79.7%;
    margin: 0 auto;
    padding: 0 10px;
    border-bottom: 1px solid #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.m-account-country-phone .country-wrapper:before {
    content: attr(data);
    position: absolute;
    right: 25px;
    top: 43%;
}
.m-account-country-phone input {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: none;
    color: #fff;
    line-height: 1.5;
    font-size: 1.4rem;
    font-weight: 300;
    padding: 8.2% 0 4.2%;
    margin: 0 auto;
    background: transparent;
    outline: none;
    vertical-align: top;
}
.m-account-country-phone .country-wrapper:after {
    content: "";
    position: absolute;
    right: 0;
    top: 48%;
    width: 5px;
    height: 5px;
    margin-right: 10px;
    border: 2px solid transparent;
    border-color: #fff #fff transparent transparent;
    border-radius: 2px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
.m-account-country-phone .phone-wrapper label:before {
    content: attr(code);
    position: absolute;
    top: 16%;
    left: 10px;
}
.m-account-country-phone .phone-wrapper input {
    padding: 8.2% 0 4.2% 28%;
    margin: 0 auto;
}
.m-account-country-phone input {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: none;
    color: #fff;
    line-height: 1.5;
    font-size: 1rem;
    font-weight: 300;
    padding: 8.2% 0 4.2%;
    margin: 0 auto;
    background: transparent;
    outline: none;
    vertical-align: top;
}
.m-account-country-phone .input-wrapper {
    position: relative;
    width: 79.7%;
    margin: 0 auto;
    padding: 0 10px;
    border-bottom: 1px solid #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.m-account-country-phone .phone-wrapper label {
    position: absolute;
    width: 22%;
    height: 67.6%;
    left: 0;
    bottom: 0;
    z-index: 1;
    border-right: 1px solid #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.m-account-input, .m-account-input input {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.m-account-input {
    width: 79.7%;
    margin: 0 auto;
    padding: 0 10px;
    border-bottom: 1px solid #fff;
}
.m-account-input input {
    width: 100%;
    border: none;
    color: #fff;
    line-height: 1.5;
    font-size: 1.0rem;
    font-weight: 300;
    padding: 8.2% 0 4.2%;
    background: transparent;
    outline: none;
    vertical-align: top;
}
.m-account-captcha, .m-account-captcha input {
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.m-account-captcha {
    position: relative;
    width: 79.7%;
    padding: 0 10px;
    border-bottom: 1px solid #fff;
}
.m-account-captcha:before {
    content: "";
    display: block;
    position: absolute;
    width: 60%;
    height: 100%;
    right: 0;
    top: 2px;
    background: #4abdcc;
}
.m-account-captcha input {
    width: 100%;
    border: none;
    color: #fff;
    line-height: 1.5;
    font-size: 1.0rem;
    font-weight: 300;
    padding: 8.2% 0 4.2%;
    background: transparent;
    outline: none;
    vertical-align: top;
}
.m-account-captcha .captcha {
    position: absolute;
    right: 0;
    top: 56%;
    min-height: 30px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.phone-login-view .btn-wrapper {
    position: relative;
    width: 43.43%;
    height: 0;
    margin: 15.5% auto 0;
    padding-bottom: 13%;
}
.phone-login-view .btn-wrapper .m-account-btn {
    font-size: 1.7rem;
}
.m-account-btn.transparent {
    border-color: #fff;
}
.m-account-btn {
    top: 0;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 50px;
    cursor: pointer;
    text-align: center;
    font-weight: 300;
}
.m-account-btn.transparent span {
    color: #fff;
}
.m-account-btn span {
    top: 50%;
    line-height: 1;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.m-account-btn, .m-account-btn span {
    position: absolute;
    left: 0;
    width: 100%;
}
</style>

