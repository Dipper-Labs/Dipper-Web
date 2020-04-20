import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

import hello from './modules/hello'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'prod'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    hello,
  },
  strict: debug,
})
