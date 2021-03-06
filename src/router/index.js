import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const { VUE_APP_ROUTE } = process.env

export default new Router({
  mode:'history',
  base: VUE_APP_ROUTE,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component:  () => import('@/page/index'),
    },
    {
      path: '/login',
      name: 'login',
      component:  () => import('@/page/login'),
    },
    {
      path: '/404',
      name: 'notFound',
      component:  () => import('@/page/404')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})