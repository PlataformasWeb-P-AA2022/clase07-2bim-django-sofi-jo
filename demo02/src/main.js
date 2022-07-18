import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
// import axios
import axios from 'axios'

// set a prototype for http
// createApp.prototype.$http = axios;

// createApp(App).mount('#app')
createApp(App).use(VueAxios, axios).mount('#app')