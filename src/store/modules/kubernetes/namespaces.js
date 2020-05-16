const state = {
  namespaces: [],
  totalnamespaces: 0,
  inNamespace: 0
}

const mutations = {
  setNamespaces: (state, namespaces) => {
    state.namespaces = namespaces
  },
  setTotalNamespaces: (state, totalnamespaces) => {
    state.totalnamespaces = totalnamespaces
  }
}

const actions = {
  getNamespaces ({ commit }) {
    commit('setTotalNamespaces', 0)
    kaxios.get('api/v1/namespaces')
      .then(response => {
        console.log('[Vuex/getNamespaces] =>', response)
        commit('setNamespaces', response.data.items)
        commit('setTotalNamespaces', response.data.items.length)
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
