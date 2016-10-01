import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import firebase from 'firebase'
import firebaseConfig from './firebase-config'
import router from './services/router'
import routes from './routes'

firebase.initializeApp(firebaseConfig)
window.firebase = firebase

Vue.use(VueFire)

router.map(routes)
router.start(App, 'body')
