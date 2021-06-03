const state = () => ({
    showDrafPreviewBanner: false,
  })
  
const mutations = {
    showBanner(state) {
      state.showDrafPreviewBanner = true
    },
  }

const actions = {
    async nuxtServerInit({dispatch}) {
        await dispatch('sanity/fetchProducts')
        await dispatch('sanity/fetchSiteSettings')
    },
};

export default {
    actions,
    state,
    mutations
}