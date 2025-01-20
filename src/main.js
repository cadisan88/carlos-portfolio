import './assets/main.css'
import VueSmoothScroll from 'vue3-smooth-scroll'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(VueSmoothScroll, {
    duration: 1000,
    updateHistory: false,
    offset: -82
})
app.mount('#app')
