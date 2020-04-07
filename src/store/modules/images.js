const state = {
  images: [],
  totalImages: 0
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  },
  setTotalImages: (state, totalImages) => {
    // XXX This reset is for watched variables change records, used in animation dashboard...
    state.totalImages = 0
    state.totalImages = totalImages
  }
}

const actions = {
  getImages ({ commit }) {
    // eslint-disable-next-line no-undef
    axios.get('/image/v2/images')
      .then(response => {
        console.log('[Vuex/getImages] =>', response)
        commit('setImages', response.data.images)
        commit('setTotalImages', response.data.images.length)
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
