const state = {
  deployments: [],
  totaldeployments: 0,
  inNamespace: 1
}

const mutations = {
  setDeployments: (state, deployments) => {
    state.deployments = deployments
  },
  setTotalDeployments: (state, totaldeployments) => {
    state.totaldeployments = totaldeployments
  }
}

const actions = {
  getDeployments ({ commit }) {
    commit('setTotalDeployments', 0)
    kaxios.get('apis/apps/v1/deployments')
      .then(response => {
        console.log('[Vuex/getDeployments] =>', response)
        commit('setDeployments', response.data.items)
        commit('setTotalDeployments', response.data.items.length)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const getters = {
  filteredDeploymentsNamespace: (state) => (namespace) => {
    return state.deployments.filter(obj => obj.metadata.namespace == namespace).length
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
