import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
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