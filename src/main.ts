import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './style/main.css'

import App from './App.vue'
import router from './router'
import VOtpInput from 'vue3-otp-input'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-otp-input', VOtpInput)

app.mount('#app')
