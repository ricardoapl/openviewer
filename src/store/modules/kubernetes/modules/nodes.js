const state = {
  nodes: [],
  totalnodes: 0,
  inNamespace:0
}

const mutations = {
  setNodes: (state, nodes) => {
    state.nodes = nodes
  },
  setTotalNodes: (state, totalnodes) => {
    state.totalnodes = totalnodes
  }
}

const actions = {
  getNodes ({ commit }) {
    commit('setTotalNodes', 0)
    axios.get('api/v1/nodes')
      .then(response => {
        console.log('[Vuex/getNodes] =>', response)
        commit('setNodes', response.data.items)
        commit('setTotalNodes', response.data.items.length)
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
