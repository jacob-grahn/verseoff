import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'
import firebaseConfig from './firebase-config'
import App from './App'
import router from './services/router'

window.firebase = firebase
firebase.initializeApp(firebaseConfig)
Vue.use(VueFire)

export const app = new Vue({
  router,
  ...App
}).$mount('#verseoff')
