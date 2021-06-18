import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: '',
    token: null,
    userInfo: null
  },
  mutations: {
    setSid (state, payload) {
      state.sid = payload
    },
    saveToken (state, payload) {
      state.token = payload
    },
    saveUserInfo (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
