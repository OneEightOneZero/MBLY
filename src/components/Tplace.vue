<template>
  <div id="app">
    <p class="place">地区</p>
    <el-cascader size="large" :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
  </div>
</template>
<script>
import { regionDataPlus } from "element-china-area-data";
export default {
  data() {
    return {
      options: regionDataPlus,
      selectedOptions: []
    };
  },

  methods: {
    handleChange(value){}
  }
};
</script>
<style scoped>
#app {
  margin: 0;
  padding: 0 15px;
}
#app .place {
  color: gray;
  text-align: left;
}
#app .el-cascader {
  width: 100%;
}
</style>
