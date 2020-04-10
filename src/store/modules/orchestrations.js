const state = {
  stacks: {},
  totalStacks: 0
}

const mutations = {
  setStacks: (state, stacks) => {
    state.stacks = stacks
  },
  setTotalStacks: (state, totalStacks) => {
    state.totalStacks = totalStacks
  }
}

const actions = {
  getStacks ({ commit }) {
    commit('setTotalStacks', 0)
    // eslint-disable-next-line no-undef
    axios.get('/heat-api/v1/' + this.state.authentication.idSelectedProject + '/stacks')
      .then(response => {
        console.log('[Vuex/getStacks] =>', response)
        commit('setStacks', response.data.stacks)
        commit('setTotalStacks', response.data.stacks.length)
      })
      .catch(error => {
        console.log('[Vuex/getStacks] =>', error)
      })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
