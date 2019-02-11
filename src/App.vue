<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Xidxheader/>
    <Xidxbanner/>
    <Xidxhottrip/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Xheader from './components/Xheader.vue'
import Xidxheader from "./components/Xidxheader.vue";
import Xidxbanner from "./components/Xidxbanner.vue";
import Xidxhottrip from "./components/Xidxhottrip.vue";

export default {
  name: "app",
  components: {
    Xidxheader,
    Xidxbanner,
    Xidxhottrip
  }
};
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
