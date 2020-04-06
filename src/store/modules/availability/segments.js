const state = {
  segments: []
}

const mutations = {
  setSegments: (state, segments) => {
    state.segments = segments
  }
}

const actions = {
  getSegments ({ commit }) {
    const url = '/instance-ha/v1/67862ce1fffa4afa80ad612f1e889c26/segments'
    axios.get(url)
      .then(response => {
        console.log(response)
        commit('setSegments', response.data.segments)
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
