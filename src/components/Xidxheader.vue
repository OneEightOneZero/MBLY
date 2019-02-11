<!-- 这里是首页的头部 -->
<template>
    <div class="m-top-nav">
        <!--侧滑菜单部分-->
        <aside id="offCanvasSide" class="x-canvas-left">
            
        </aside>
        <!--主界面部分-->
        <div class="x-inner-wrap">
            <header class="x-bar mui-bar-nav">
                <i class="iconfont icon-daohang x-pull-left"></i>
                <i class="iconfont icon-search x-pull-right"></i>
                <h1 class="x-title">breadtrip</h1>
            </header>
        </div>
    </div>
</template>
<script type="text/javascript">
//引进阿里图标
import "../assets/font_enu7vawshzr/iconfont.css"
export default {
  name: 'Xidxheader'
}
</script>
<style type="text/css" scoped>

.m-top-nav{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:44px;
    color:#fff;
    background:#4abdcc;
    z-index:999;
}
.x-title{
    text-align: center;
    line-height: 44px;
    font-size:18px;
    font-style:italic;
}
.x-pull-left{
    display:block;
    float:left;
    width:44px;
    height:44px;
    font-size:17px;
}
.icon-search:before {
    content: "\e611";
    position: relative;
    top: 7px;
    left: 17px;
}
.x-pull-right{
    display:block;
    float:right;
    width:44px;
    height:44px;
    font-size:17px;
}
.icon-daohang:before {
    content: "\e62c";
    position: relative;
    top: 8px;
    left: 8px;
}
</style>