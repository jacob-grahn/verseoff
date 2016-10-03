// import firebase from 'firebase'

let user

export function isSignedIn () {
  if (user) {
    return true
  }
}

export function getName () {
  if (!user) {
    return ''
  }
  return user.displayName
}

/* function handleSignedIn (newUser) {
  user = newUser
}

function handleSignedOut () {
  user = null
} */

/* firebase.auth().onAuthStateChanged(function (newUser) {
  console.log('newUser', newUser)
  // The observer is also triggered when the user's token has expired and is
  // automatically refreshed. In that case, the user hasn't changed so we should
  // not update the UI.
  if (user && newUser && user.uid === newUser.uid) {
    return
  }
  newUser ? handleSignedIn(newUser) : handleSignedOut()
}) */
