<template>
  <div id="app">
    <router-view/>
    <back-top></back-top>
  </div>
</template>

<script>
  import backTop from './layouts/backTop'
  import '@/assets/app.css'
  export default {
    name: 'app',
    components: {backTop},
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
