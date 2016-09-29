<script>
  import firebase from 'firebase'
  export default {
    computed: {
      username: function () {
        return firebase.User.displayName || firebase.User.uid
      }
    }
  }
</script>

<template>
  <div>Cur User: {{username}}</div>
</template>

<style scoped>
</style>
