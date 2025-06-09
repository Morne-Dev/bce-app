import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './style.css'

import { MotionPlugin } from '@vueuse/motion'    // ← add this

createApp(App)
  .use(router)
  .use(MotionPlugin)                           // ← and this
  .mount('#app')
