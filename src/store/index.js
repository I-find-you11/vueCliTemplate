import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from './getters'
// import { phType } from '@/config/env'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalLoading: false
  },
  getters,
  actions,
  mutations
})
