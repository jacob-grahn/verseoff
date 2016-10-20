import Vue from 'vue'
import VueFire from 'vuefire'
import Vuex from 'vuex'
import firebase from 'firebase'
import firebaseConfig from './firebase-config'
import App from './App'
import router from './services/router'
import * as currentUser from './services/current-user'

window.firebase = firebase
firebase.initializeApp(firebaseConfig)
currentUser.init()

Vue.use(VueFire)
Vue.use(Vuex)

export const app = new Vue({
  router,
  ...App
}).$mount('#verseoff')
