var express = require('express');
var router = express.Router();
// var multer = require("multer");
var {
  connect,
  insert,
  find,
  ObjectId
} = require("../libs/mongodb.js");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/findUser', async (req, res, next) => {
  
    let {
      key1,
      key2
      // id,
     
    } = req.body;
    // console.log(req.body)
    // console.log(key1)
    let data = await find(`mblx`, {
       name:key1
    })
    // console.log(data[0].password)
    // console.log(data)
    if (data[0]&&data[0].password===key2) {
      res.send({
        status: "success"
    });
   }else {
  res.send({
    status: "fail"
  });
}
});
router.post('/insert', async (req, res, next) => {
  let {
    key1,
    key2
  } = req.body;
  let data = await find(`mblx`, {
     name:key1
  })
  //查找用户名
  if (data[0]) {
    res.send({
      status: "用户名已存在"
  });
 }else {
   data = await insert(`mblx`, [{name:key1 ,
    password:key2} ]
   
  )
  // console.log(data)
  res.send({
    status: "注册成功"})
}
});

module.exports = router;