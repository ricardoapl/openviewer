const state = {
  roles: [],
  totalroles: 0
}

const mutations = {
  setRoles: (state, roles) => {
    state.roles = roles
  },
  setTotalRoles: (state, totalroles) => {
    state.totalroles = totalroles
  }
}

const actions = {
  getRoles ({ commit }) {
    commit('setTotalRoles', 0)
    // eslint-disable-next-line no-undef
    axios.get('/apis/rbac.authorization.k8s.io/v1/clusterroles')
      .then(response => {
        console.log('[Vuex/getRoles] =>', response)
        commit('setRoles', response.data.items)
        commit('setTotalRoles', response.data.items.length)
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
