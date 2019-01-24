<template>
  <div id="userset">
    <Tusertop/>
    <Tuserpic/>
    <Tuname/>
    <Tusersex/>
    <Tplace/>
    <Tbirth/>
  </div>
</template>

<script>
import Tusertop from "../components/Tusertop.vue";
import Tuserpic from "../components/Tuserpic.vue";
import Tuname from "../components/Tuname.vue";
import Tusersex from "../components/Tusersex.vue";
import Tplace from "../components/Tplace.vue";
import Tbirth from "../components/Tbirth.vue";
export default {
  name: "userset",
  components: {
    Tusertop,
    Tuserpic,
    Tuname,
    Tusersex,
    Tplace,
    Tbirth
  }
};
</script>

<style>
#userset {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>