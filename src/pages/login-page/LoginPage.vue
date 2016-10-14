<template>
  <div id="firebaseui-container"></div>
</template>

<script>
  import firebase from 'firebase'
  import config from './firebaseui-config'
  let ui

  export default {
    mounted () {
      ui = ui || new window.firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-container', config)
    },
    destroyed () {
      ui.reset()
    }
  }
</script>
