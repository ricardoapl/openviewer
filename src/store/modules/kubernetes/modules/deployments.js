const state = {
  deployments: [],
  totaldeployments: 0
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
    axios.get('http://127.0.0.1:8888/apis/apps/v1/deployments')
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

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
