import firebase from 'firebase'
import router from '../../services/router'

export default {
  callbacks: {
    // Called when the user has been successfully signed in.
    signInSuccess: function (user, credential, redirectUrl) {
      // handleSignedInUser(user)
      router.replace('/splash')
      // Do not redirect.
      return false
    }
  },
  // Opens IDP Providers sign-in flow in a popup.
  signInFlow: 'popup',
  signInOptions: [
    // TODO(developer): Remove the providers you don't need for your app.
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: ['https://www.googleapis.com/auth/plus.login']
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ]
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '/tos'
}
