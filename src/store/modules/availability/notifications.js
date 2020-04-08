const state = {
  // XXX Rename details to notification
  details: null
}

const mutations = {
  // XXX Rename details to notification
  setDetails: (state, details) => {
    state.details = details
  },
  // XXX Rename details to notification
  unsetDetails: (state) => {
    state.details = null
  }
}

const actions = {

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
