import { createApp } from 'vue'
import BootstrapVue from 'bootstrap'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min.js'

createApp(App).use(BootstrapVue).use(router).mount('#app')
