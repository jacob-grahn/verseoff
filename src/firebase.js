import firebase from 'firebase'

export function initFirebase () {
  firebase.initializeApp(config)
  window.firebase = firebase
}

const config = {
  apiKey: 'AIzaSyAQWbPhpFQEnWX_2Uxm2cFLTlLmRvm-vTU',
  authDomain: 'verseoff.firebaseapp.com',
  databaseURL: 'https://verseoff.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '517277016667'
}
