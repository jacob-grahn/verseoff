import firebase from 'firebase'

let ui

export default function () {
  if (!ui) {
    ui = new firebaseui.auth.AuthUI(firebase.auth())
  }
  return ui
}
