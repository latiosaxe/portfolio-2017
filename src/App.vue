<template>
  <div id="app">
    <router-view></router-view>
    <p>Test</p>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
  }
</style>
