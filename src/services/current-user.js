import firebase from 'firebase'
import store from '../store'

export function init () {
  firebase.auth().onAuthStateChanged(function (newUser) {
    console.log('onAuthStateChanged', newUser)
    if (newUser) {
      store.commit('SET_CURRENT_USER', newUser)
    }
    store.commit('SET_CURRENT_USER', {})
  })
}
