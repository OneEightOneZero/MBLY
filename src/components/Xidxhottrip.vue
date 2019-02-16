<template>
  <div class="hot-trips-box">
    <ul class="hot-trips">
      <li class="m-trip-spot" 
       v-for="(n,index) in news" :key="index">
        <div class="cover">
          <p
            class="photo"
            lazy="loaded"
            :style="'background-image:url(\''+n.data[0].cover_image+'\')'"
          ></p>
          <!-- vue里面背景图的特殊用法 :style="'background-image:url(\''+图片路径+'\')'"-->
        </div>
        <div  class="info">
          <!---->
          <h2 class="m-trip-title" v-text="n.data[0].name"></h2>
          <h3 class="m-trip-detail">
            <span class="day">
              {{n.data[0].first_day}}&nbsp;&nbsp;
              {{n.data[0].day_count}}天&nbsp;&nbsp; {{n.data[0].view_count}}浏览&nbsp;&nbsp;
              <!---->
            </span>
            <br>
            <span class="local" v-text="n.data[0].popular_place_str"></span>
          </h3>
          <p class="m-trip-bottom">
            <!---->
            <span class="wrapper">
              <b
                class="avatar"
                :style="'background-image:url(\''+n.data[0].user.avatar_l+'\')'"
              ></b>
              <span class="name">
                <i>by</i>
                {{n.data[0].user.name}}
              </span>
            </span>
          </p>
        </div>
      </li>
    </ul>
    <Xloading/>
  </div>
</template>
<script type="text/javascript">
import Xloading from "./Xloading.vue"
export default {
  name: "Xidxhottrip",
  components:{
    Xloading
  },
  //新增数据接口=====
  // M
  data() {
    return {
      // 存放新闻数据
      news: []
    };
  },
  methods: {
    // 获取数据的方法
    async getNews() {
      let data = await this.$axios.get("http://localhost:3000/news");
      for (var i=7;i<data.data.data.length;i++) {
        // console.log(data.data.data[i]);
        this.news = this.news.concat(data.data.data[i]);
      }
    }
  },
  created() {
    // 触发getNews方法
    this.getNews();
  }
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
  /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjYAAAE9CAYAAAAYmShrAAAACXBIW…AQbAAAAMEGAACAYAMAAECwAQAAINgAAAAQbAAAwMb4/wEAyFqzJxbMsuQAAAAASUVORK5CYII=); */
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