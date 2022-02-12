<template>
  <div>
    <textarea v-model="geojsonEdit"></textarea>
    <button v-on:click="getPistes" style="width: 200px; height: 100px"/>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'SearchBar',
    props: {
      geojson: Object
    },
    computed: {
      geojsonEdit: {
        set(value) {
          this.$emit('change', JSON.parse(value))
        },
        get() {
          return JSON.stringify(this.geojson, null, ' ')
        }
      }
    },
    methods: {
      getPistes() {
        axios.get('http://localhost:8000/pisteCyclables.json').then(response => {
          console.log(response.data)
        })
    },
    }
  }
</script>

<style>
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
  }
</style>
