import { createApp } from 'vue'
import App from './App.vue'
import router from './route.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css' // Theme (choose any PrimeVue theme)
import 'primevue/resources/primevue.min.css' // Core CSS
import 'primeicons/primeicons.css' // Icons
import 'primeflex/primeflex.css' // Optional PrimeFlex for utilities
//import 'primeflex/primeflex.css'; // Optional PrimeFlex for utilities

// Create Vue application instance
const app = createApp(App)

app.use(PrimeVue)

app.use(router)

// Mount Vue app to the DOM
app.mount('#app')
