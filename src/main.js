import './assets/main.css'
// import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primeVue/config'
// import Aura from '@Primeuix/themes/aura'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import router from './components/router'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
// app.use(PrimeVue, { theme: { preset: Aura } }) // 如果主题无效可注释

app.component('DataTable', DataTable)
app.component('Column', Column)

app.mount('#app')
