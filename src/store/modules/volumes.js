const state = {
  volumes: {}
}

const mutations = {
  setVolumes: (state, volumes) => {
    state.volumes = volumes
  }
}

const actions = {
  getVolumes ({ commit }) {
    // eslint-disable-next-line no-undef
    axios.get('/volume/v3/' + this.state.authentication.idSelectedProject + '/volumes/detail')
      .then(response => {
        console.log(response)
        commit('setVolumes', response.data.volumes)
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
