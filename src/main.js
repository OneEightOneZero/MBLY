import Vue from 'vue'
import router from './configs/router.js'
// console.log(router);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// var express = require('express');
// var app = express();
// app.use((req, res, next)=>{
//   res.append("Access-Control-Allow-Origin","*")
//   next()
// });

// 微信样式
import 'weui'
// 引入ajax库
import axios from 'axios'
// 引入jQuery库
import $ from 'jquery'  

// 把库挂载到原型链
Vue.prototype.$axios = axios
Vue.prototype.$ = $

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h('router-view')
})
// .$mount('#app')
