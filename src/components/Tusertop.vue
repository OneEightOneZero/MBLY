<template>
  <div id="#seter">
    <div class="m-top-nav">
      <div class="nav-inner">
        <span @click="toTsetting" class="home"></span>
        <span>账户设置</span>
        <div class="tools">
          <!-- <ul class="my-tab">
            <li>我的首页</li>
            <li>退出登录</li>
          </ul>-->
          <span class="btn-tab" style="font-size: 16px">确定修改</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../styles/Tsettop.css";
export default {
  methods: {
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

</style>