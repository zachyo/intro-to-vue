<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <RouterLink to="/">Home</RouterLink> ||
  <RouterLink to="/dogJokes">Dog Jokes</RouterLink>
  <RouterView></RouterView>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" name="ZaRkie"/>
  <AltschoolStudent/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import AltschoolStudent from './components/AltSchool.vue';

export default {
  name: 'App',
  // components: {
  //   HelloWorld,
  //   AltschoolStudent
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* color: #000; */
  margin-top: 160px;
  border: 1px dotted green;
}
</style>
