const state = {
  hpas: [],
  totalhpas: 0,
  inNamespace: 1
}

const mutations = {
  setHpas: (state, hpas) => {
    state.hpas = hpas
  },
  setTotalHpas: (state, totalhpas) => {
    state.totalhpas = totalhpas
  }
}

const actions = {
  getHpas ({ commit }) {
    console.log("Getting HPAS")
    commit('setTotalHpas', 0)
    kaxios.get('/apis/autoscaling/v1/horizontalpodautoscalers')
      .then(response => {
        console.log('[Vuex/getHpas] =>', response)
        console.log("HPAS getter")
        commit('setHpas', response.data.items)
        commit('setTotalHpas', response.data.items.length)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const getters = {
  filteredHpasNamespace: (state) => (namespace) => {
    return state.hpas.filter(obj => obj.metadata.namespace == namespace).length
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
