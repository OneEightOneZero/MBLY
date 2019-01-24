<template>
  <div id="myself">
    <Tmytop/>
    <Tbanner/>
  </div>
</template>

<script>
import Tmytop from "../components/Tmytop.vue";
import Tbanner from "../components/Tbanner.vue";
export default {
  name: "myself",
  components: {
    Tmytop,
    Tbanner
  }
};
</script>

<style>
#myself {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>