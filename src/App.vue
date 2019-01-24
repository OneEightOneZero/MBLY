<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Xheader/>
   <Tsettop/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Xheader from './components/Xheader.vue'

import Tsettop from "./components/Tsettop.vue";

export default {
  name: "app",
  components: {

    // HelloWorld
    Xheader,

    Tsettop

  }
};
</script>

<style>

/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
=======
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
>>>>>>> a0c58f9614b25372a5e149a4425424932da17614
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
