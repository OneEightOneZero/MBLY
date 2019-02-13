<template>
    <div class="Xidxbanner">
        <el-carousel height="175px" arrow="never" indicator-position="outside">
            <el-carousel-item v-for="(img,index) in imgList" :key="index" >
              <img :src="img.url" width="100%" height="100%" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script type="text/javascript">

export default{
    name:'Xidxbanner',
    data(){
        return {
            imgList:[]
        }
    },
    mounted(){
        this.onload();
    },
    methods:{
            onload(){
            this.imgList = [
                {url:"http://photos.breadtrip.com/covers_2018_11_13_1f387a5c10357f80663205471d3d5ce4.jpg?imageView/2/w/960/"},
                {url:"http://photos.breadtrip.com/covers_2018_12_25_57e767f101ccab4c8f7275aa43420180.jpg?imageView/2/w/960/"},
                {url:"http://photos.breadtrip.com/covers_2018_12_04_8f5e4b8a8c024322f0234b6138529ac2.jpg?imageView/2/w/960/"},
                {url:"http://photos.breadtrip.com/covers_2017_12_08_cec17b5aa3a7096550c649c1126f2e6e.jpg?imageView/2/w/960/"},
                {url:"http://photos.breadtrip.com/covers_2018_10_23_3739e0f0096efcbd0ec8eb5a40117f8f.jpg?imageView/2/w/960/"},
                {url:"http://photos.breadtrip.com/covers_2018_04_08_9e4a0f37b540229c8e9c98d9683a724b.jpg?imageView2/2/w/750/format/jpg/interlace/1/"},
                {url:"http://photos.breadtrip.com/covers_2018_11_13_1f387a5c10357f80663205471d3d5ce4.jpg?imageView/2/w/960/"}
            ]
        }
    }
}
</script>
<style type="text/css" scoped>
.Xidxbanner{
    padding:60px 15px 0px;
    height:175px !important;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

</style>