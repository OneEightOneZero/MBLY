<template>
  <div id="#seter">
    <div class="m-top-nav">
      <div class="nav-inner">
        <span @click="toTsetting" class="home"></span>
        <span>个人中心</span>
        <div @click="selected" class="tools">
          <!-- <ul class="my-tab">
            <li>我的首页</li>
            <li>退出登录</li>
          </ul>-->
          <span class="btn-tab"></span>
          
        </div>
        <ul class="select" style="display:none">
          <li>评论</li>
          <li>喜欢</li>
          <li>下载</li>
        </ul>
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
    toTsetting() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Tsetting" });
    }
  }
};
</script>

<style scoped>
.m-top-nav .home {
  width: 44px;
  height: 44px;
  background: url("../assets/timer2.png") no-repeat 50%;
  background-size: 22px 19px;
}
.tools .btn-tab{
    background: url("../assets/timer3.png") no-repeat 85%;
    background-size: 5px 19px;
    width: 30px;
    height: 44px;
}
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
  right: 25px;
  top: 35px;
  border-radius: 5px;
}
.select li {
  padding: 5px 0;
  color: black;
}
.nav-inner .navset {
  font-size: 21px;
}
.tools .btn-tab {
  font-size: 18px;
}
</style>