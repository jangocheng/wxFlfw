import Vue from 'vue'
import Router from 'vue-router'
import HeadBar from 'components/common/head'
import buycar from 'components/common/buycar'
import fenlei from 'components/common/fenleiPage'
import login from 'components/home/login'
import signIn from 'components/home/signIn'
import serchBack from 'components/home/serchBack'
import goodsInfo from 'components/home/goodsInfo'
import dingdanXQ from 'components/common/dingdanXQ'
import payFor from 'components/common/payFor'
import dizhi from 'components/common/dizhi'
import addDz from 'components/common/addDz'
import ddGl from 'components/common/dingdanGL'
import renzheng from 'components/common/renzheng'
import renzhengIng from 'components/common/renzhengIng'
import guige from 'components/common/guige'
import xuqiu from 'components/common/xuqiuLX'
import home from 'components/home/home'
import zhanghu from 'components/common/zhanghu'
import yinhangka from 'components/common/yinhangka'
import shezhi from 'components/common/shezhi'
import userInfo from 'components/common/userInfo'
import user from 'components/common/user'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'login',
      meta:{index:0},
      component: login
    },
    {
      path: '/signIn',
      name: 'signIn',
      meta:{index:1},
      component: signIn
    },
    {
      path: '/user',
      name: 'user',
      meta:{index:1},
      component:user
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      meta:{index:1},
      component:userInfo
    },
    {
      path: '/shezhi',
      name: 'shezhi',
      meta:{index:1},
      component: shezhi
    },
    {
      path: '/zhanghu',
      name: 'zhanghu',
      meta:{index:1},
      component: zhanghu
    },{
      path: '/yinhangka',
      name: 'yinhangka',
      meta:{index:1},
      component:yinhangka
    },

    {
      path: '/xuqiu',
      name: 'xuqiu',
      meta:{index:1},
      component: xuqiu
    },
    {
      path: '/guige',
      name: 'guige',
      meta:{index:1},
      component: guige
    },
    {
      path: '/home',
      name: 'home',
      meta:{index:1},
      component: home
    },
    {
      path: '/renzheng',
      name: 'renzheng',
      meta:{index:1},
      component: renzheng
    },
    {
      path: '/renzhengIng',
      name: 'renzhengIng',
      meta:{index:1},
      component: renzhengIng
    },
    {
      path: '/ddGl',
      name: 'ddGl',
      meta:{index:1},
      component:ddGl
    },
    {
      path: '/addDz',
      name: 'addDz',
      meta:{index:1},
      component: addDz
    },
    {
      path: '/dizhi',
      name: 'dizhi',
      meta:{index:1},
      component: dizhi
    },
    {
      path: '/payFor',
      name: 'payFor',
      meta:{index:1},
      component:payFor
    },
    {
      path: '/dingdanXQ',
      name: 'dingdanXQ',
      meta:{index:1},
      component:dingdanXQ
    },
    {
      path: '/buycar',
      name: 'buycar',
      meta:{index:1},
      component: buycar
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      meta:{index:1},
      component: fenlei
    },
    {
      path: '/goodsInfo',
      name: 'goodsInfo',
      component: goodsInfo
    },
    {
      path: '/serchBack',
      name: 'serchBack',
      component: serchBack
    },
    {
      path: '/head',
      name: 'Head',
      component: HeadBar
    },
  ]
})
