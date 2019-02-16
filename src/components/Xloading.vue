<template>
  <el-table
    v-loading="loading"
    style="width: 100%;height:30px" 
    element-loading-spinner="el-icon-loading"
    element-loading-background="#fbf7ed">
  </el-table>
</template>

<style>
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    name:"Xloading",
    data() {
      return {
        loading: true
      };
    }
  };
</script>