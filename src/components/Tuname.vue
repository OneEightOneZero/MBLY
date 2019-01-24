<template>
<div>
    <div id="All">
        <p>用户名</p>
        <input type="text" placeholder="未填写">
    </div>
    <div id="All">
        <p>手机号码</p>
        <input type="text" placeholder="未填写">
    </div>
    <div id="All">
        <p>电子邮箱</p>
        <input type="text" placeholder="未填写">
    </div>
</div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
#All{
padding: 15px;
}
#All p{
    text-align: left;
    color: gray;
}
#All input{
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 18px;
}
</style>

