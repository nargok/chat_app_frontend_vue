import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

// import
Vue.use(Vuex)

// component間をまたがって使用するデータを定義する
const state = {
  messages: [],
  channels: []
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})