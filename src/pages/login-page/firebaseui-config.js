import firebase from 'firebase'

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
      console.log(user)
      // Do not redirect.
      return false
    }
  },
  signInFlow: 'popup'
}
