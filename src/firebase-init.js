import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'
import * as currentUser from './services/current-user'

Vue.use(VueFire)
window.firebase = firebase // firebaseui breaks without this...

const config = {
  apiKey: 'AIzaSyAQWbPhpFQEnWX_2Uxm2cFLTlLmRvm-vTU',
  authDomain: 'verseoff.firebaseapp.com',
  databaseURL: 'https://verseoff.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '517277016667'
}

export default () => {
  firebase.initializeApp(config)
  currentUser.init()
}
