<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <Xidxheader/>
    <Xidxbanner/>
    <Xidxhottrip/>

    <!-- <Xheader/> -->


  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Xidxheader from './components/Xidxheader.vue'
import Xidxbanner from './components/Xidxbanner.vue'
import Xidxhottrip from './components/Xidxhottrip.vue'



// import Xheader from './components/Xheader.vue'



export default {
  name: "app",
  components: {


    // HelloWorld
    Xidxheader,
    Xidxbanner,
    Xidxhottrip,

    // Xheader

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
