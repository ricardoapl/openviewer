const state = {
  // XXX Duplicate from ../instances.js
  images: []
}

const mutations = {
  // XXX Duplicate from ../instances.js
  setImages: (state, images) => {
    state.images = images
  }
}

const actions = {
  // XXX Duplicate from ../instances.js
  getImages ({ commit }) {
    axios.get('/image/v2/images')
      .then(response => {
        console.log(response)
        commit('setImages', response.data.images)
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
