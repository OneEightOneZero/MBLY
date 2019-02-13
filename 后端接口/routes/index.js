var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' }
  );
});
// 获取新闻的路由
router.get('/news', async (req, res, next) => {
  let getNews = () => {
    return new Promise((resolve, reject) => {
      // 面包旅行的后端接口
      request('http://m.breadtrip.com/api/v2/index/', (err, response, body) => {
        resolve(body)
      })
    })
  }
  let data = await getNews();
  res.send({
    status: 1,
    data:JSON.parse(data).data.elements
  });
});

module.exports = router;
