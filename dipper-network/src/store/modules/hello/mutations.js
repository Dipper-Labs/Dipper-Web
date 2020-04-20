import * as types from '@/store/types'

const mutations = {
  [types.SET_HELLO_NAME](state, name) {
    state.name = name
  },
}

export default mutations
