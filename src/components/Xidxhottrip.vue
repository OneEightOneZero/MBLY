<template>
  <div class="hot-trips-box">
    <ul class="hot-trips">
      <li class="m-trip-spot">
        <div class="cover">
          <p
            class="photo"
            lazy="loaded"
            style="background-image: url(&quot;http://photos.breadtrip.com/photo_2019_01_09_aaa5bae463af95c3285c01cd9ce970ed.jpg?imageView/2/w/1384/h/1384/q/85&quot;);"
          ></p>
        </div>
        <div  class="info">
          <!---->
          <h2 class="m-trip-title">柬埔寨🇰🇭，不止于吴哥</h2>
          <h3 class="m-trip-detail">
            <span class="day">
              2018.9.27&nbsp;&nbsp;
              8天&nbsp;&nbsp; 2.0万浏览&nbsp;&nbsp;
              <!---->
            </span>
            <br>
            <span class="local">柬埔寨,暹粒市</span>
          </h3>
          <p class="m-trip-bottom">
            <!---->
            <span class="wrapper">
              <b
                class="avatar"
                style="background-image: url(&quot;http://photos.breadtrip.com/avatar_5e_8a_dc74679c972c6305dbfb4c303cef27c839e9f238.jpg-avatar.m&quot;);"
              ></b>
              <span class="name">
                <i>by</i>
                Vivian_W
              </span>
            </span>
          </p>
        </div>
      </li>
      <li class="m-trip-spot">
        <div class="cover">
          <p
            class="photo"
            lazy="loaded"
            style="background-image: url(&quot;http://photos.breadtrip.com/photo_2019_01_26_5e5f4e16eeb6af22dbed3b44ea73b958.jpg?imageView/1/w/640/h/480/q/85&quot;);"
          ></p>
        </div>
        <div class="info">
          <!---->
          <h2 class="m-trip-title">冬日·北海道</h2>
          <h3 class="m-trip-detail">
            <span class="day">
              2019.1.22&nbsp;&nbsp;
              8天&nbsp;&nbsp; 2.4万浏览&nbsp;&nbsp;
              <!---->
            </span>
            <br>
            <span class="local">日本,洞爷湖町</span>
          </h3>
          <p class="m-trip-bottom">
            <!---->
            <span class="wrapper">
              <b
                class="avatar"
                style="background-image: url(&quot;http://photos.breadtrip.com/avatar_a3_e5_f37c843a47d9eb465659992fcb384937a8828f17.jpg-avatar.m&quot;);"
              ></b>
              <span class="name">
                <i>by</i>
                艾的这一页
              </span>
            </span>
          </p>
        </div>
      </li>
      <li class="m-trip-spot">
        <div class="cover">
          <p
            class="photo"
            lazy="loaded"
            style="background-image: url(&quot;http://photos.breadtrip.com/covers_2018_05_09_c787f8585e2b0da9c6aae527a45d7a94.jpg?imageView/2/w/960/&quot;);"
          ></p>
        </div>
        <div class="info">
          <!---->
          <h2 class="m-trip-title">以色列自驾游🇮🇱</h2>
          <h3 class="m-trip-detail">
            <span class="day">
              2018.2.10&nbsp;&nbsp;
              13天&nbsp;&nbsp; 6.3万浏览&nbsp;&nbsp;
              <!---->
            </span>
            <br>
            <span class="local">以色列,耶路撒冷</span>
          </h3>
          <p class="m-trip-bottom">
            <!---->
            <span class="wrapper">
              <b
                class="avatar"
                style="background-image: url(&quot;http://photos.breadtrip.com/avatar_fe_6a_55396e739f2ab8ad59adc8f5dcfc139e.jpg-avatar.m&quot;);"
              ></b>
              <span class="name">
                <i>by</i>
                键盘与面包
              </span>
            </span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "Xidxhottrip",
  methods: {
    toHxiangqing() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Hxiangqing" });
    },
  },
};
</script>
<style type="text/css" scoped>
.hot-trips-box {
  padding-top: 13px;
}
.hot-trips {
  padding: 15px;
}
.hot-trips li {
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 11px;
  overflow: hidden;
  border-radius: 4px;
}
.m-trip-spot:before {
  content: "";
  display: block;
  z-index: 5;
  width: 280px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, rgba(0, 0, 0, 0.6)),
    to(transparent)
  );
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0, transparent);
}
.m-trip-spot:before {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.m-trip-spot .cover {
  height: 0;
  padding-bottom: 50.8%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjYAAAE9CAYAAAAYmShrAAAACXBIW…AQbAAAAMEGAACAYAMAAECwAQAAINgAAAAQbAAAwMb4/wEAyFqzJxbMsuQAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-color: #e7ddc6;
  background-size: cover;
  background-position: 50%;
}
.m-trip-spot .cover p {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.m-trip-spot .cover p {
  width: 100%;
  background-size: cover;
  background-position: 50%;
  z-index: 1;
}
.m-trip-spot .info {
  color: #fff;
  padding: 0 15px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.m-trip-spot .info .m-trip-title {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.23;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-top: 15px;
}
.m-trip-spot .info .m-trip-detail {
  position: relative;
  margin-top: 6px;
  padding-left: 8px;
  line-height: 1;
}
.m-trip-spot .info .m-trip-detail .day {
  position: relative;
  top: -1px;
  font-size: 0.9rem;
  -webkit-transform: scale(0.75);
  transform: scale(0.75);
}
.m-trip-spot .info .m-trip-detail .local {
  font-size: 0.8rem;
  transform: scale(0.667);
}
.m-trip-spot .info .m-trip-bottom {
  position: absolute;
  bottom: 11px;
  left: 0;
  width: 100%;
  font-size: 1rem;
}
.m-trip-spot .info .m-trip-bottom .wrapper {
  /*display: -webkit-box;
        display: -ms-flexbox;*/
  display: flex;
  -webkit-box-pack: start;
  /*-ms-flex-pack: start;*/
  justify-content: flex-start;
  -webkit-box-align: center;
  /*-ms-flex-align: center;*/
  align-items: center;
  position: relative;
  width: 100%;
  /*-webkit-box-sizing: border-box;*/
  box-sizing: border-box;
  padding: 2px 15px;
}
.m-trip-spot .info .m-trip-bottom .avatar {
  width: 30px;
  height: 30px;
  margin-bottom: 0;
  background-size: 30px 30px;
  border-radius: 30px;
}
.m-trip-spot .info .m-trip-bottom .name {
  /*-webkit-text-size-adjust: none;*/
  font-size: 8px;
  margin-left: 8px;
}
.m-trip-spot .info .m-trip-bottom .wrapper i {
  display: inline-block;
  height: 100%;
  margin: 0 5px;
  font-style: normal;
}
</style>