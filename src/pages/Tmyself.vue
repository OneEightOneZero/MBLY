<template>
  <div id="myself">
    <Tmytop/>
    <Tbanner/>
    <Tmysfoot/>
  </div>
</template>

<script>
import Tmytop from "../components/Tmytop.vue";
import Tbanner from "../components/Tbanner.vue";
import Tmysfoot from "../components/Tmysfoot.vue";
export default {
  name: "myself",
  components: {
    Tmytop,
    Tbanner,
    Tmysfoot
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
  margin-top: 42px;
}
</style>