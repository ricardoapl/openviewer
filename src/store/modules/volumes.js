const state = {
  volumes: {},
  types: {}
}

const mutations = {
  setVolumes: (state, volumes) => {
    state.volumes = volumes
  },
  setTypes: (state, types) => {
    state.types = types
  }
}

const actions = {
  getVolumes ({ commit }) {
    // eslint-disable-next-line no-undef
    axios.get('/volume/v3/' + this.state.authentication.idSelectedProject + '/volumes/detail')
      .then(response => {
        console.log('[Vuex/getVolumes] =>')
        console.log(response)
        commit('setVolumes', response.data.volumes)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getTypes ({ commit }) {
    // eslint-disable-next-line no-undef
    axios.get('volume/v3/' + this.state.authentication.idSelectedProject + '/types')
      .then(response => {
        console.log('[Vuex/getTypes] =>')
        console.log(response.data.volume_types)
        commit('setTypes', response.data.volume_types)
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
