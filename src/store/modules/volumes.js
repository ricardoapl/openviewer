const state = {
  volumes: {},
  types: {},
  volumeToEdit: {}
}

const mutations = {
  setVolumes: (state, volumes) => {
    state.volumes = volumes
  },
  setTypes: (state, types) => {
    state.types = types
  },
  setvolumeToEdit: (state, volumeToEdit) => {
    state.volumeToEdit = volumeToEdit
  }
}

const actions = {
  getVolumes ({ commit }) {
    // eslint-disable-next-line no-undef
    axios.get('/volume/v3/' + this.state.authentication.idSelectedProject + '/volumes/detail')
      .then(response => {
        console.log('[Vuex/getVolumes] =>', response)
        commit('setVolumes', response.data.volumes)
      })
      .catch(error => {
        console.log('[Vuex/getTypes] =>', error)
      })
  },
  getTypes ({ commit }) {
    // eslint-disable-next-line no-undef
    axios.get('volume/v3/' + this.state.authentication.idSelectedProject + '/types')
      .then(response => {
        console.log('[Vuex/getTypes] =>', response.data.volume_types)
        commit('setTypes', response.data.volume_types)
      })
      .catch(error => {
        console.log('[Vuex/getTypes] =>', error)
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
