const state = {
  images: [],
  totalImages: 0
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  },
  setTotalImages: (state, totalImages) => {
    state.totalImages = totalImages
  }
}

const actions = {
  getImages ({ commit }) {
    commit('setTotalImages', 0)
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
