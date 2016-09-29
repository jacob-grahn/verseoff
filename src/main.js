import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import firebaseConfig from './firebase-config'
import routes from './routes'

firebase.initializeApp(firebaseConfig)
window.firebase = firebase

Vue.use(VueFire)
Vue.use(VueRouter)

var router = new VueRouter({history: true})
router.map(routes)
router.start(App, 'body')
