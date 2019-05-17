<template>
  <div id="app">
 <Navbar/>
<div class="app-content">
  <router-view/>
</div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  export default {
  name: 'App',
    components: {Navbar}
  }
</script>

<style>
.app-content{
  margin-left: 1em;
}
</style>
