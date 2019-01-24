<template>
  <div>
    <header>
      <div
        id="bg"
        class="header-bg"
        style="background-image: url(&quot;http://photos.breadtrip.com/default_user_cover_10.jpg-usercover.display&quot;);"
      ></div>
      <div class="profile">
        <div class="top">
          <div class="avatar-wrapper">
            <div class="avatar">
              <div class="likes">
                <p>0</p>粉丝
              </div>
              <span
                class="m-avatar"
                style="background-image: url(&quot;http://photos.breadtrip.com/avatar_b5_3d_c66eec71eeb35d5790f78a0596daa4890c4faba4.jpg-avatar.m&quot;);"
              ></span>
              <div class="follows">
                <p>1</p>关注
              </div>
            </div>
          </div>
          <div class="level">Lv.1</div>
        </div>
        <div class="middle">
          <h2 class="ellipsis">城春草木深</h2>
          <p class="ellipsis">
            <!---->
            <!---->
          </p>
        </div>
        <div class="btns">
          <span class="msg"></span>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  methods: {
    toTsetting() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Tsetting" });
    }
  }
};
</script>

<style scoped>
</style>