<template>
  <el-container>
    <el-main>
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
                <p>33</p>粉丝
              </div>
              <span
                class="m-avatar"
                style="background-image: url(&quot;http://photos.breadtrip.com/avatar_b5_3d_c66eec71eeb35d5790f78a0596daa4890c4faba4.jpg-avatar.m&quot;);"
              ></span>
              <div class="follows">
                <p>66</p>关注
              </div>
            </div>
          </div>
          <div class="level">Lv.99</div>
        </div>
        <div class="middle">
          <h2 class="ellipsis">lemon</h2>
          <p class="ellipsis"></p>
        </div>
        <div class="btns">
          <span class="msg"></span>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import "../styles/Tbanner.css";
export default {};
</script>

<style scoped>
.el-main {
  padding: 0px;
}
.m-avatar {
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
}
.el-main .profile .follows p,
.el-main .profile .likes p {
  font-size: 1rem;
}
</style>
