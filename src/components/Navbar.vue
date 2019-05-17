<template>
  <md-tabs class="md-primary" md-alignment="centered" md-sync-route>
    <md-tab id="tab-home" to="/" md-label="Home" exact></md-tab>
    <md-tab id="tab-todos" to="/todos" md-label="Todos"></md-tab>
  </md-tabs>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style>
</style>
