<template>
  <div id="app">
    <Xidxheader/>
    <Xidxbanner/>
    <Xidxhottrip/>
  </div>
</template>

<script>
import Xidxheader from './components/Xidxheader.vue'
import Xidxbanner from './components/Xidxbanner.vue'
import Xidxhottrip from './components/Xidxhottrip.vue'

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

</style>
