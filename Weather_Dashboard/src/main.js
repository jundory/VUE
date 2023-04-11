/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'
// Composables
import { createApp } from 'vue'
import router from './router/index'
// Plugins
import { registerPlugins } from '@/plugins'

const pinia = createPinia()
const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(pinia)

registerPlugins(app)

app.mount('#app')
