import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Vue from 'vue'
import MyComponent from './components/MyComponent.vue'
import MyComponentOptionsAPI from './components/OptionsAPIex'
import SearchBar from './components/SearchBar'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
app.use(router)
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

app.component('MyComponent',MyComponent)
app.component('SearchBar',SearchBar)
app.component('MyComponentOptionsAPI1',MyComponentOptionsAPI)
app.mount('#app')

