import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const include = function(path) {
  return () => import(`@/views/${path}`)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/signin'
    },{
      path: '/signin',
      name: 'signin',
      component: include('user/signin')
    },
    {
      path: '/signup',
      name: 'signup',
      component: include('user/signup')
    },
    {
      path: '*',
      name: '404',
      component: include('error/404')
    },
    {
      path: '/user',
      name: 'user',
      component: include('layout'),
      redirect:'/user/info',
      children: [
        {
          path: 'info',
          name:'info',
          component: include('user/info')
        },
        {
          path: '/about',
          name: 'about',
          component: include('user/about')
        },
      ]
    }
  ]
})
