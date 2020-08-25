import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   userLists:'',
  },
  mutations: {
    setUserLists(state,data){
      state.userLists = data
    }
  },
  actions: {
  },
  modules: {
  }
})
