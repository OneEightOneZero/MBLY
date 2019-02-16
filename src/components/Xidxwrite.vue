<!-- 用户编写菜单组件 -->
<template>
    <div id="Xidxwrite">
      <div class="write-box" @click="show = !show">
          <!-- 动画按键 -->
          <div :class="show?'xie-add xuanzhuan':'xie-add'" >
              <i class="iconfont icon-add jia"></i>
          </div>
          <!-- 滑动菜单 -->
          <transition name="slide-fade">
              <ul v-show="show" class="slide-next">
                <li class="over-hide">
                    <span class="p3-5">生活故事</span>
                    <i class="iconfont icon-xiangji w40"></i>
                </li>
                <li class="over-hide">
                    <span class="p3-5">长篇游记</span>
                    <i class="iconfont icon-compile w40"></i>
                </li>
              </ul>
          </transition>
      </div>
      <!-- 背景遮罩 -->
      <div class="write-mask" @click="show= !show" v-show="show"></div>
    </div>
</template>
<script type="text/javascript">
    //引进阿里图标
    import "../assets/font_enu7vawshzr/iconfont.css";
    export default{
        name:"Xidxwrite",
        data(){
            return {
                show:false
            }
        }
    }
</script>
<style type="text/css" scoped>
    #Xidxwrite{
        width:100%;
        height:100%;
        position: fixed;
        top:0px;
        z-index: 998;
    }
    .write-mask{
        width:100%;
        height:100%;
        background-color: #000;
        opacity:0.8;
        position:absolute;
        z-index: 996;
    }
    .write-box{
        width:32px;
        height:32px;
        position:fixed;
        right:25px;
        bottom:45px;
        z-index: 997;
    }
    .xie-add{
        width:50px;
        height:50px;
        border-radius: 50%;
        background-color:#4abdcc;
        color:#fff;
        line-height:50px;
        text-align: center;
        position:absolute;
        z-index: 997;
        transform:rotate(0);
        transition:all 0.5s ease;
    }
    .xie-add .jia{
        display:block;
        font-size:80px;
        position:absolute;
        left:-15px;
        z-index: 997;
    }
    .xuanzhuan{
        transition:all 0.5s ease;
        transform:rotate(135deg);
    }
    .slide-next{
        list-style: none;
        position:absolute;
        z-index: 997;
        top: -94px;
        left: -74px;
    }
    .over-hide{
        overflow: hidden;
        margin-bottom: 6px;
        width:128px;
    }
    .p3-5{
        display:inline-block;
        float:left;
        width:50px;
        margin:5px 13px;
        padding:3px 5px;
        font-size:12px;
        background-color: white;
        border:1px solid gray;
        color:gray;
        border-radius: 3px;
    }
    .w40{
        display:inline-block;
        width:40px;
        height:40px;
        float:right;
        border-radius: 50%;
        color:#fff;
        background-color: #4abdcc;
        line-height: 40px;
        text-align: center;
    }
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateY(100px);
      opacity: 0;
    }
</style>