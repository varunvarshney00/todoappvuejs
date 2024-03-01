import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

const app = createApp(App)
app.use(Vueform, vueformConfig)
app.mount('#app')
