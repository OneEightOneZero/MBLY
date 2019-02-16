<template>
  <div class="account-view">
    <div class="signup-view">
      <div class="m-account-country-phone">
        <div data="中国" class="country-wrapper input-wrapper">
          <input type="text" placeholder="国家和地区" readonly="readonly">
        </div>
        <div class="phone-wrapper input-wrapper">
          <label code="+86"></label>
          <input type="tel" autocapitalize="off" placeholder="请填写手机号码" v-model="name">
        </div>
      </div>
      <div class="m-account-captcha">
        <input type="text" autocapitalize="off" placeholder="验证码">
        <img
          src="http://web.breadtrip.com/captcha.jpg?1549886823423"
          height="60%"
          alt="loading"
          class="captcha"
        >
      </div>
      <div class="m-account-msg-code">
        <input type="text" autocapitalize="off" placeholder="短信验证码">
        <span txt="获取验证码" class="code-btn"></span>
      </div>
      <div class="m-account-input">
        <input type="text" autocapitalize="off" placeholder="输入登录密码，至少6位" v-model="password">
      </div>
      <div class="btn-wrapper">
        <div class="m-account-btn transparent">
          <span @click="register">同意协议并注册</span>
        </div>
      </div>
      <p class="signup-agreement">
        <span>面包旅行用户隐私协议</span>
      </p>
      <div class="signup-footer">
        <span>
          <i @click="toWlogin">已有账号登录</i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "登录注册",
      name: "",
      password: "",
      nameId: "",
      showID: false,
      array: [],
      showAll: false
    };
  },
  methods: {
    toWlogin() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Hlogin" });
    },
    register() {
      let name = this.name;
      let password = this.password;
      if (name === "" || password === "") {
        alert("账号或密码不能为空！");
      }

      if (name && password) {
        let postData = this.$qs.stringify({
          key1: this.name,
          key2: this.password
          // key3:value3,
        });
        console.log(postData);
        this.$axios({
          method: "post",
          url: "http://localhost:3000/users/insert",
          data: postData
        }).then(res => {
          console.log(res.data.status);
          if (res.data.status === "用户名已存在") {
            alert("用户名已存在")
           
          } else {      
            alert("注册成功！")
            this.$router.push({ name: "Hlogin" });
          }
        });

         alert("注册成功！")
         this.$router.push({ name: "Hlogin" });
      }
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
.signup-view {
  position: relative;
  height: 100vh;
  min-height: 568px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-top: 60px;
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
  font-size: 1rem;
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
.m-account-captcha,
.m-account-captcha input {
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
  font-size: 1rem;
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
.m-account-msg-code {
  position: relative;
  width: 79.7%;
  padding: 0 10px;
  border-bottom: 1px solid #fff;
}
.m-account-msg-code input {
  width: 100%;
  border: none;
  color: #fff;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 300;
  padding: 8.2% 0 4.2%;
  background: transparent;
  outline: none;
  vertical-align: top;
}
.m-account-msg-code .code-btn {
  position: absolute;
  right: 0;
  bottom: 17%;
  width: auto;
  background: #fff;
  color: #4abdcc;
  text-align: center;
  border-radius: 30px;
  padding: 0.8% 5%;
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
  font-size: 1rem;
  font-weight: 300;
  padding: 8.2% 0 4.2%;
  background: transparent;
  outline: none;
  vertical-align: top;
}
.m-account-msg-code .code-btn:before {
  display: block;
  content: attr(txt);
  font-size: 0.7rem;
  line-height: 18px;
  -webkit-transform: scale(0.75);
  transform: scale(0.75);
}
.signup-view .btn-wrapper {
  position: relative;
  width: 60.3%;
  height: 0;
  margin: 20% auto 0;
  padding-bottom: 13%;
}
.signup-view .btn-wrapper .m-account-btn {
  font-size: 1.4rem;
}
.m-account-btn.transparent {
  border-color: #fff;
}
.m-account-btn,
.m-account-btn span {
  position: absolute;
  left: 0;
  width: 100%;
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
.signup-view .signup-agreement {
  margin-top: 7%;
  font-size: 0.7rem;
  text-align: center;
  opacity: 0.5;
}
.signup-view .signup-agreement span {
  border-bottom: 1px solid #fff;
}
.signup-view .signup-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 9.4%;
  max-height: 54px;
  border-top: 1px solid hsla(0, 0%, 100%, 0.5);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
}
.signup-view .signup-footer span {
  display: inline-block;
  width: 50%;
  height: 72.22%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
}
.signup-view .signup-footer span i {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  color: #fff;
}
.m-account-msg-code,
.m-account-msg-code input {
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>

