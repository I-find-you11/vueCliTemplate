import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const { VUE_APP_ROUTE } = process.env

const router =  new Router({
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

router.beforeEach((to, from, next)=>{
  // 判断本地token自动跳转登录页面 需要就用
  // const token = localStorage.getItem("token") || 'token'
  // if(!token && to.path != '/login') {
  //   const { query, name } = to
  //   next({ name: 'login'})
  // }else {
  //   next()
  // }
  next()
})


export default router