import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import router from './services/router'
import { initFirebase } from './firebase'

initFirebase()
Vue.use(VueFire)

export const app = new Vue({
  el: '#verseoff',
  router,
  render: h => h(App)
})
