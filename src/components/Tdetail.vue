<template>
  <div id="#seter">
    <div class="m-top-nav">
      <div class="nav-inner">
        <span class="home"></span>
        <span class="fonesize">breadtrip</span>
        <div class="tools">
          <span class="btn-tab">打开APP</span>
        </div>
      </div>
    </div>
    <div class="trip">
      <section class="trip-top">
        <div class="map"></div>
        <a id="trip-user" class="trip-user">
          <img
            src="http://photos.breadtrip.com/avatar_83_ca_cf53f034059848ca75ef14242728e6faccbad783.jpg-avatar.l"
            alt="柠檬味复合果汁"
          >
        </a>
        <div class="trip-info">
          <p class="user-name">by 柠檬味复合果汁</p>
          <h1 class="trip-name">食在川渝</h1>
          <!---->
          <i class="line"></i>
          <p>
            <span>
              <br>
            </span>
          </p>
          <section class="count-info">
            <div>
              <p>2019.1.19</p>
              <p>9天</p>
            </div>
            <i class="vertical-line"></i>
            <div>
              <p>里程</p>
              <p>696km</p>
            </div>
            <i class="vertical-line"></i>
            <div>
              <p>喜欢</p>
              <p>16</p>
            </div>
            <i class="vertical-line"></i>
            <div>
              <p>打赏</p>
              <p>3</p>
            </div>
          </section>
          <section class="icon-list">
            <div>
              <span class="poi-info">
                <i class="airport"></i>
                <em>0</em>航班
              </span>
              <span class="poi-info">
                <i class="hotel"></i>
                <em>1</em>旅店
              </span>
            </div>
            <div>
              <span class="poi-info">
                <i class="sights"></i>
                <em>19</em>景点
              </span>
              <span class="poi-info">
                <i class="mall"></i>
                <em>1</em>购物
              </span>
            </div>
            <div class="city">
              <i
                class="city-icon"
                style="background-image: url(&quot;http://media.breadtrip.com/images/icons/passport/CN.png&quot;);"
              ></i>
              <span>重庆 ·</span>
              <span>成都 ·</span>
            </div>
            <i class="more-icon"></i>
            <div class="trip-check">查看线路日程</div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>
<script type="text/javascript">
import "../styles/Tdetail_user.css";
export default {};
</script>
<style type="text/css" scoped>
.m-top-nav .home {
  width: 44px;
  height: 44px;
  background: url("../assets/timer2.png") no-repeat 50%;
  background-size: 22px 19px;
}
.nav-inner .fonesize,
.tools .btn-tab {
  font-size: 18px;
}
.trip .trip-top .trip-user {
    display: inline-block;
    background-color: bisque;
    width: 64px;
    height: 64px;
    border-radius: 64px;
    border: 3px solid #fbf7ed;
    overflow: hidden;
    margin-top: 32px;
}
</style>