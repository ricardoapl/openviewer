const state = {
  pods: [],
  totalpods: 0
}

const mutations = {
  setPods: (state, pods) => {
    state.pods = pods
  },
  setTotalPods: (state, totalpods) => {
    state.totalpods = totalpods
  }
}

const actions = {
  getPods ({ commit }) {
    commit('setTotalPods', 0)
    axios.get('/api/v1/pods')
      .then(response => {
        console.log('[Vuex/getPods] =>', response)
        commit('setPods', response.data.items)
        commit('setTotalPods', response.data.items.length)
      })
      .catch(error => {
        console.log(error)
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
