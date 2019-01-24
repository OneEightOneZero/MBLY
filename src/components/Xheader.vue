<template>
    <div class="m-top-nav">
        <!--侧滑菜单部分-->
        <aside id="offCanvasSide" class="x-canvas-left">
            
        </aside>
        <!--主界面部分-->
        <div class="x-inner-wrap">
            <header class="x-bar mui-bar-nav">
                <a href="#" class="x-pull-left"></a>
                <a href="#" class="x-pull-right"></a>
                <h1 class="x-title">breadtrip</h1>
            </header>
        </div>
    </div>
</template>
<script type="text/javascript">

export default {
  name: 'Xheader'
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

</style>