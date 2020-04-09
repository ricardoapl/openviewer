const state = {
  segments: []
}

const mutations = {
  setSegments: (state, segments) => {
    state.segments = segments
  }
}

const actions = {
  getSegments ({ commit, rootState }) {
    const projectId = rootState.authentication.idSelectedProject
    const url = '/instance-ha/v1/' + projectId + '/segments'
    axios.get(url)
      .then(response => {
        console.log(response)
        const mutation = 'setSegments'
        commit(mutation, response.data.segments)
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
