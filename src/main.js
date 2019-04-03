// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../theme/index.css'
import 'normalize.css'
import ElementUI from 'element-ui';
import $http from './api'
import store from './store'


Vue.use(ElementUI)
Vue.use($http)


Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  let user = window.localStorage.getItem('token') || null
  if (to.matched.length === 0) {
    from.name ? next({
      name: from.name
    }) : next('/errorinfo');
  } else if(!user && !['signin', 'signup'].includes(to.name)) {
    return next({path: `/signin${to.fullPath ? `?redirect=${to.fullPath}` : ''}`})
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
