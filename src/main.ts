

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './pages/app/App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
