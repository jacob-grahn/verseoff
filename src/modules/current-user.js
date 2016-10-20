export default {
  state: {
    displayName: null,
    photoUrl: null,
    uid: null
  },
  mutations: {
    SET_CURRENT_USER: function (state, user) {
      state.displayName = user.displayName
      state.photoUrl = user.photoUrl
      state.uid = user.uid
    }
  }
}
