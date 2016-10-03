import VueRouter from 'vue-router'
import SplashPage from '../pages/splash-page/SplashPage'
import LoginPage from '../pages/login-page/LoginPage'

const routes = [
  {path: '/', component: SplashPage},
  {path: '/splash', component: SplashPage},
  {path: 'login', component: LoginPage}
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
