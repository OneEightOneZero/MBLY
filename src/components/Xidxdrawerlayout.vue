<template>
    <div class="drawerlayout-content">
        <!-- 用户头像 -->
        <div class="user-face"></div>
        <!-- 用户昵称 -->
        <p class="xie-p8"><a class="user-cure">用户昵称</a></p>
        <!-- 热门游记 -->
        <p class="xie-p20"><a class="hot-trip">热门游记</a></p>
        <!-- 草稿箱 -->
        <p class="xie-p20"><a class="draft">草稿箱</a></p>
        <!-- 设置 -->
        <p class="xie-p20"><a class="design" @click="toTsetting">设置</a></p>
        <div class="xie-fb10">breadtrip</div>
    </div>
</template>
<script type="text/javascript">
    export default{
        name:'Xidxdrawerlayout',
        methods: {
            toTsetting() {
              // this.$router.push('/app/contact')
              // 根据命名路由来进行跳转
              this.$router.push({ name: "Tsetting" });
            }
          }
    }
</script>
<style type="text/css" scoped>
    .drawerlayout-content{
        width:100%;
        margin-top: 50px;
    }
    .xie-p8{
        padding:8px;
        text-align:center;
    }
    .xie-p20{
        padding:20px;
        text-align:center;
    }
    .user-face{
        width:60px;
        height:60px;
        margin:auto;
        border:2px solid skyblue;
        border-radius:50%;
        background-color: yellow;
    }
    .user-cure{
        font-size:12px;
        color:#fff;
    }
    .hot-trip{
        font-size:15px;
        color:#fff;
    }
    .draft,.design{
        font-size:13px;
        color:#fff;
        opacity:0.8;
    }
    .xie-fb10{
        width:100%;
        font-size:20px;
        font-weight: 600;
        color:#fff;
        text-align:center;
        position:absolute;
        bottom:10px;
    }
</style>