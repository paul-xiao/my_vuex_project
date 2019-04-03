import axios from 'axios'


const $http = axios.create({
  baseURL: '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
})



export default {
  install(Vue) {
    Vue.prototype.$axios = axios
    Vue.prototype.$http = $http
  }
}

export {
  axios,
  $http
}
