<script>
  import { isSignedIn, getName } from '../../services/current-user'
  export default {
    computed: {
      isSignedIn,
      name: getName
    }
  }
</script>

<template>
  <div v-if="!isSignedIn">Not signed in</div>
  <div v-if="isSignedIn">Cur User: {{name}}</div>
</template>

<style scoped>
</style>
