<script>
  import { isSignedIn, getName } from '../../services/current-user'
  export default {
    computed: {
      isSignedIn,
      getName
    }
  }
</script>

<template>
  <div>
    <div v-if="!isSignedIn">Not signed in <router-link to="/login">Sign In</router-link></div>
    <div v-if="isSignedIn">Cur User: {{getName}}</div>
  </div>
</template>

<style scoped>
</style>
