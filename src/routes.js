import SplashPage from './pages/splash-page/SplashPage'
import LoginPage from './pages/login-page/LoginPage'

export default {
  '/': {component: SplashPage},
  '/splash': {component: SplashPage},
  '/login': {component: LoginPage}
}
