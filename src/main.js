import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

router.afterEach((to) => {
  document.title = to.meta.title || 'Cuide&Dele'
})

app.mount('#app')
