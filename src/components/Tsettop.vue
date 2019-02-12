<template>
  <div id="#seter">
    <div class="m-top-nav">
      <div class="nav-inner">
        <span @click="selected" class="home"></span>
        <ul class="select" style="display:none">
          <li @click="toApp">首页</li>
          <li @click="toTmyself">个人中心</li>
        </ul>
        <span class="navset">设置</span>
        <div class="tools">
          <!-- <ul class="my-tab">
            <li>我的首页</li>
            <li>退出登录</li>
          </ul>-->
          <span class="btn-tab" @click="toHlogin">登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import "../styles/Tsettop.css";
let isok = 1;
export default {
  methods: {
    selected() {
      if (isok) {
        // console.log(isok);
        $(".select").css({ display: "block" });
      } else {
        $(".select").css({ display: "none" });
      }
      isok = !isok;
    },
    toTmyself() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Tmyself" });
    },
    toApp() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "App" });
    },
    toHlogin() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Hlogin" });
    }
  }
};
</script>

<style scoped>
.nav-inner {
  position: relative;
}
.select,
.select li {
  list-style: none;
}
.select {
  position: absolute;
  padding: 10px 20px;
  background: white;
  border: 1px solid gray;
  top: 42px;
  border-radius: 5px;
}
.select li {
  padding: 5px 0;
  color: black;
  border-bottom: 2px solid grey;
}
.nav-inner .navset {
  font-size: 21px;
}
.tools .btn-tab {
  font-size: 18px;
}
</style>
