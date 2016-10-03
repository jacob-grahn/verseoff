import firebase from 'firebase'

let ui

export default function () {
  if (!ui) {
    console.log('make firebaseui')
    ui = new window.firebaseui.auth.AuthUI(firebase.auth())
  }
  return ui
}
