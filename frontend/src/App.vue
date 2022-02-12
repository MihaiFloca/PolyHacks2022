<template>
  <div id="app">
    <Container/>
  </div>
</template>

<script>
  import Container from './components/Container.vue'
  //import { inject } from 'vue'

  export default {
    name: 'App',
    // setup() {
    //   const axios = inject('axios')
    //   const getPistes = () => {
    //     axios.get('http://localhost:8000/pisteCyclables.json').then(response => {
    //       console.log(response.data)
    //     })
    //   }
    //   return { getPistes }
    // },
    components: {
      Container,
    },
  }
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 100%;
    display: grid;
  }

</style>
