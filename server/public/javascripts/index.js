// 导航栏
new Vue({
    el: ".top_menu_bar",
    // Model
    data: {
        channels: [{
            channel: '__all__',
            title: '推荐'
        }, {
            channel: 'video',
            title: '视频'
        }, {
            channel: 'news_hot',
            title: '热点'
        }, {
            channel: 'news_society',
            title: '社会'
        }, {
            channel: 'news_entertainment',
            title: '娱乐'
        }, {
            channel: '__all__',
            title: '推荐'
        }, {
            channel: 'video',
            title: '视频'
        }, {
            channel: 'news_hot',
            title: '热点'
        }, {
            channel: 'news_society',
            title: '社会'
        }, {
            channel: 'news_entertainment',
            title: '娱乐'
        }],
        cur: 0
    },
    methods: {
        changeChannel(index) {
            console.log(index)
            this.cur = index;
        }
    }
})
// 列表页
// POST请求
// https://github.com/Wscats/vue-tutorial/issues/16
new Vue({
    el: "#pageletListContent",
    data: {
        news: []
    },
    methods: {
        async loadMore() {
            let data = await axios.get('http://localhost:3000/news', {
                params: {
                    ID: 12345
                }
            })
            console.log(data)
            this.news = this.news.concat(data.data.data)
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
        }
    },
    created() {
        this.loadMore()
    }
})