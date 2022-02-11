<script setup>
import { ref, onMounted } from 'vue'

// Load props from parent class
const props = defineProps({
  msg: String,
  like: Number
})

onMounted(
  () => {
    console.log(props.like)
  }
)
const likes = ref(props.like) // ref allows us to use this variable in the template section

// Create methods like this, can be be referenced in the template section
const onClick = () => {
  likes.value++
}
</script>

<template>
  <section>
    <h1>{{ msg }}</h1>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentations
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button type="button" @click="onClick">count is: {{ likes }}</button>
    <p>
      Edit
      <code>dsadasdsadsa</code> to test hot module replacement.
    </p>
  </section>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
