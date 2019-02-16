<template>
  <div id="app">
    <Xidxheader/>
    <Xidxbanner/>
    <Xidxhottrip/>
    <Xidxwrite/>
  </div>
</template>

<script>
import Xidxheader from './components/Xidxheader.vue'
import Xidxbanner from './components/Xidxbanner.vue'
import Xidxhottrip from './components/Xidxhottrip.vue'
import Xidxwrite from './components/Xidxwrite.vue'

export default {
  name: "app",
  components: {
    Xidxheader,
    Xidxbanner,
    Xidxhottrip,
    Xidxwrite
  }
};
</script>

<style>

</style>
