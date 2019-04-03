import {$http} from '@/api'
const userInfo = JSON.parse(window.localStorage.getItem('user_info') || '{}')
  //namespaced: true,
  const state = {
    userInfo:userInfo
  }

  const mutations= {
    update_user_info(state, data) {
      state.userInfo = {...state.userInfo, ...data}
    },
    getToken(state, data) {
      window.localStorage.setItem('token',data.token)
    },
    LOGOUT(state) {
      window.localStorage.removeItem('user_info')
      window.localStorage.removeItem('token')
      state.userInfo = userInfo
    }
    


  }

  const actions= {
    GET_USER_INFO({ commit, state }) {
      const authToken = window.localStorage.getItem('token')
      $http.get('userinfo',{ headers: { Authorization: authToken}}).then(({status, data}) => {
        window.localStorage.setItem('user_info',JSON.stringify(data))
        commit('update_user_info',data)
      })
    }
  }

  const getters= {
    userInfo:state => state.userInfo
  }



export default {
  state,
  mutations,
  actions,
  getters
}