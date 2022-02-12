import { createApp } from 'vue'
import App from './App.vue'
//import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)//.use(store)
// app.use(VueAxios, axios)
// app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')
