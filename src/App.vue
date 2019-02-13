<template>
  <div id="app">
    <Xidxheader/>
    <Xidxbanner/>
    <Xidxhottrip/>
    <Xloading/>
  </div>
</template>

<script>
import Xidxheader from './components/Xidxheader.vue'
import Xidxbanner from './components/Xidxbanner.vue'
import Xidxhottrip from './components/Xidxhottrip.vue'
import Xloading from './components/Xloading.vue'

export default {
  name: "app",
  components: {
    Xidxheader,
    Xidxbanner,
    Xidxhottrip,
    Xloading
  }
};
</script>

<style>

</style>
