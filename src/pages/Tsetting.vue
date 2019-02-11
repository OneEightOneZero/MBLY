<template>
  <div id="seter">
    <Tsettop/>
    <Tsetmain1/>
    <Tsetmain2/>
  </div>
</template>

<script>
import Tsettop from "../components/Tsettop.vue";
import Tsetmain1 from "../components/Tsetmain1.vue";
import Tsetmain2 from "../components/Tsetmain2.vue";
export default {
  name: "seter",
  components: {
    Tsettop,
    Tsetmain1,
    Tsetmain2
  }
};
</script>
<style>
#seter {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 44px;
}
</style>