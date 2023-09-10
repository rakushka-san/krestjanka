import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import './assets/scss/styles.scss'

createApp(App).provide('$store', store).use(store).mount('#app')
