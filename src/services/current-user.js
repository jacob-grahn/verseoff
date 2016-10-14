import firebase from 'firebase'

let user

export function isSignedIn () {
  if (!firebase.User || !firebase.User.uid) {
    return false
  }
  return true
}

export function getName () {
  if (!firebase.User) {
    return ''
  }
  return user.User.displayName
}

export function setUser (newUser) {
  user = newUser
}

/* function handleSignedIn (newUser) {
  user = newUser
}

function handleSignedOut () {
  user = null
} */

/* firebase.auth().onAuthStateChanged(function (newUser) {
  console.log('onAuthStateChanged', newUser)
  // The observer is also triggered when the user's token has expired and is
  // automatically refreshed. In that case, the user hasn't changed so we should
  // not update the UI.
  if (user && newUser && user.uid === newUser.uid) {
    return
  }
  newUser ? handleSignedIn(newUser) : handleSignedOut()
}) */
