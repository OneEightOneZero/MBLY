<!-- 这里是首页的头部和侧边菜单组件 -->
<template>
    <!-- 滑动容器 -->
    <div class="drawer-layout">
    <!-- 滑动过渡 -->
      <transition name="fade">
          <div :class="show?'drawerlayout':'drawerlayout-reverse'" v-show="show">
            <!--侧滑菜单部分-->
            <Xidxdrawerlayout/>
          </div>
      </transition>
      <!-- 遮罩层 用于滑动侧边菜单时出现 -->
      <div class="drawer-mask" v-show="show" @click="show=!show"></div>
      <!--主界面部分-->
      <div class="m-top-nav">
            <div class="x-inner-wrap">
              <!-- 头部导航 -->
              <header class="x-bar mui-bar-nav">
                <i class="iconfont icon-daohang x-pull-left" @click="show=!show"></i>
                <i class="iconfont icon-search x-pull-right" @click="toSearch"></i>
                <h1 class="x-title">breadtrip</h1>
              </header>
            </div>
      </div>
    </div>
</template>
<script type="text/javascript">
//引进阿里图标
import "../assets/font_enu7vawshzr/iconfont.css";
import Xidxdrawerlayout from "./Xidxdrawerlayout.vue";
export default {
  name: "Xidxheader",
  components: {
    Xidxdrawerlayout
  },
  data(){
    return {
        show:false,
    }
  },
  methods:{
    toSearch() {
        this.$router.push({name:"Xidxsearch"})
    }
  }
};
</script>
<style type="text/css">
.m-top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  color: #fff;
  background: #4abdcc;
  z-index: 999;
}
.x-title {
  text-align: center;
  line-height: 44px;
  font-size: 18px;
  font-style: italic;
}
.x-pull-left {
  display: block;
  float: left;
  width: 44px;
  height: 44px;
  font-size: 17px;
}
.icon-search:before {
  content: "\e611";
  position: relative;
  top: 7px;
  left: 17px;
}
.x-pull-right {
  display: block;
  float: right;
  width: 44px;
  height: 44px;
  font-size: 17px;
}
.icon-daohang:before {
  content: "\e62c";
  position: relative;
  top: 8px;
  left: 8px;
}
.drawerlayout{
    width:65%;
    height:100%;
    position:fixed;
    top:0px;
    left:0%;
    z-index: 1001;
    background-color: #4abdcc;
}
.drawerlayout-reverse{
    width:65%;
    height:100%;
    position:fixed;
    top:0px;
    left:-65%;
    z-index: 1001;
    background-color: #4abdcc;
}
.fade-enter-active{
    animation:fade-in 0.2s;
}
.fade-leave-active{
    animation:fade-in 0.2s reverse;
}
@keyframes fade-in {
  0% {
    left:-65%;
  }
  100% {
    left:0%;
  }
}
.drawer-mask{
    width:100%;
    height:100%;
    position:fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: #000;
    z-index: 1000;
    opacity:0.6;
}
</style>