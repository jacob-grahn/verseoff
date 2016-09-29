<template>
  <div id="firebaseui"></div>
</template>

<script>
  import getUi from './firebaseui'
  import config from './firebaseui-config'

  export default {
    ready: function () {
      const ui = getUi()
      ui.start('#firebaseui', config)
    },
    destroyed: function () {
      const ui = getUi()
      ui.reset()
    }
  }
</script>

<style scoped>
</style>
