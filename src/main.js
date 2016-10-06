import Vue from 'vue'
import App from './App'
import router from './services/router'
import VueFire from 'vuefire'
import { initFirebase } from './firebase'

initFirebase()
Vue.use(VueFire)

export const app = new Vue({
  router,
  ...App
}).$mount('#verseoff')
