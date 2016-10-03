/* import firebase from 'firebase'
import router from '../../services/router'

export default {
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: '/tos',
  callbacks: {
    signInSuccess: function (user, credential, redirectUrl) {
      router.go('/splash')
      // Do not redirect.
      return false
    }
  },
  signInFlow: 'popup'
} */
