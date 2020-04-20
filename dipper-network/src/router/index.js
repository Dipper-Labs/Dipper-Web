import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* eslint-disable global-require */
// pc官网首页
const index = r => require.ensure([], () => r(require('../pages/home/index')), 'index')

//404
const Error404 = r => require.ensure([], () => r(require('../pages/base/Error404')), 'Error404')

export default new Router({
  // 开启hash模式
  mode: 'history',
  routes: [{
      name: '/',
      path: '/',
      component: index,
    },
    {
      name: 'index',
      path: '/index',
      component: index,
    },
    {
      name: 'Error404',
      path: '/Error404',
      component: Error404,
    },
    {
      path: '/*',
      redirect: '/Error404'
    }
  ],
})
