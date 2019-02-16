import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)

// console.log(VueRouter);
import App from '../App.vue'
//
import Tsetting from '../pages/Tsetting.vue'

import Tuserset from '../pages/Tuserset.vue'

import Tmyself from '../pages/Tmyself.vue'

import Hlogin from '../components/Hlogin.vue'

import Hreg from '../components/Hreg.vue'

import Xidxheader from '../components/Xidxheader.vue'

import Xidxsearch from '../pages/Xidxsearch.vue'

import Tdetail from '../components/Tdetail.vue'

const routes = [{
        path: '/',
        // 路由命名，方便跳转
        name: 'App',
        component: App
    },
    {
        path: '/Tsetting',
        // 路由命名，方便跳转
        name: 'Tsetting',
        component: Tsetting
    },
    {
        path: '/Tuserset',
        // 路由命名，方便跳转
        name: 'Tuserset',
        component: Tuserset
    },
    {
        path: '/Tmyself',
        // 路由命名，方便跳转
        name: 'Tmyself',
        component: Tmyself
    },
    {
        path: '/Hlogin',
        // 路由命名，方便跳转
        name: 'Hlogin',
        component: Hlogin
    }, {
        path: '/Hreg',
        // 路由命名，方便跳转
        name: 'Hreg',
        component: Hreg
    },{
        path: '/Xidxsearch',
        // 路由命名，方便跳转
        name: 'Xidxsearch',
        component: Xidxsearch
    }
    ,{
        path: '/Xidxheader',
        // 路由命名，方便跳转
        name: 'Xidxheader',
        component: Xidxheader
    },{
        path: '/Tdetail',
        // 路由命名，方便跳转
        name: 'Tdetail',
        component: Tdetail
    }
   
]
// 实例该路由配置
const router = new VueRouter({
    // h5history路由模式
    // 有兼容性的问题
    // mode: 'history',
    // 建议用默认的哈希模式
    mode: 'hash',
    routes // (缩写) 相当于 routes: routes
})

export default router