export default {
  namespaced: true,
  state: {
    userInfo: {
      id: 12,
      userName: 'jay',
      sex: 'man',
      country: 'china',
      city: 'shanghai',
      favorite: ['book', 'game', 'sing']
    }
  },
  getters: {
    userInfo: state => {
      return state.userInfo || {}
    }
  },
  mutations: {

  },
  actions: {

  }
}
