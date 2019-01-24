<template>
  <div class="usex">
    <p>性别</p>
    <el-radio-group v-model="radio2">
      <el-radio :label="3">男</el-radio>
      <el-radio :label="6">女</el-radio>
      <el-radio :label="9">保密</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio2: 3
    };
  }
};
</script>
<style scoped>
.usex{
    padding: 15px;
}
.usex p{
    text-align: left;
    color: gray;
}
</style>
