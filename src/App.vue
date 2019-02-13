<template>
  <div id="app">
    <Xidxheader/>
    <Xidxbanner/>
    <Xidxhottrip/>
    <!-- <Xidxhottrip1/> -->
  </div>
</template>

<script>
import Xidxheader from './components/Xidxheader.vue'
import Xidxbanner from './components/Xidxbanner.vue'
import Xidxhottrip from './components/Xidxhottrip.vue'
//请求数据的草稿，先别删
// import Xidxhottrip1 from './components/Xidxhottrip.1.vue'

export default {
  name: "app",
  components: {
    Xidxheader,
    Xidxbanner,
    Xidxhottrip,
    // Xidxhottrip1

  }
};
</script>

<style>

</style>
