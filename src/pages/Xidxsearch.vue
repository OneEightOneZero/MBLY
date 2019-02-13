<template>
    <div id="Xidxsearch">
        <div class="search-header">
            <div class="input-search-box">
                <el-input class="input-search"
                  placeholder="搜索目的地、游记、故事集、用户"
                  v-model="input10"
                  clearable>
                </el-input>
            </div>
            <div class="esc-idx-box"><a class="esc-idx" @click="toIdx">取消</a></div>
        </div>
        <div class="in-search-hot">
            <p class="xie-tc">国外热门目的地</p>
            <div class="hot-area">
                <a>奈良市</a><a>小樽市</a><a>槟城</a><a>墨尔本</a>
                <a>广岛县</a><a>泰国</a><a>芬兰</a><a>美国</a>
                <a>马来西亚</a><a>意大利</a><a>新加坡</a><a>挪威</a>
            </div>
        </div>
        <div class="out-search-hot">
            <p class="xie-tc">国外热门城市</p>
            <div class="hot-area">
                <a>台湾</a><a>香港</a><a>厦门</a><a>北京</a><a>丽江市</a>
                <a>成都</a><a>上海</a><a>拉萨</a><a>大理</a><a>三亚</a>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        name:"Xidxsearch",
        data() {
          return {
            input10: ''
          }
        },
        methods:{
            toIdx(){
                this.$router.push({name:"App"})
            }
        }
    }
</script>
<style type="text/css" scoped>
    #Xidxsearch{
        width:100%;
        height:100%;
        background-color: #fbf7ed;
    }
    .search-header{
        width:100%;
        height:30px;
        padding:10px 0px;
        color:#fff;
        background-color: #4abdcc;
        overflow: hidden;
    }
    .input-search-box{
        width:90%;
        height:100%;
        float:left;
    }
    .esc-idx-box{
        width:10%;
        height:30px;
        float:left;
        text-align:center;
        line-height:30px;
    }
    .in-search-hot{
        padding:50px 0px;
    }
    .xie-tc{
        margin-bottom:20px;
        text-align: center;
        font-size:16px;
    }
    .hot-area{
        display: flex;
        flex-wrap: wrap;
         justify-content:center;
    }
    .hot-area a{
        font-size: 12px;
        height:13px;
        line-height: 13px;
        color:gray;
        display:inline-block;
        padding:5px 8px;
        border:1px solid skyblue;
        border-radius: 10px;
        margin-right: 8px;
        margin-left: 8px;
        margin-bottom: 5px;
    }
</style>