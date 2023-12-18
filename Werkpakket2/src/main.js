import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/scss/main.scss'

import HeaderComponent from '@/components/HeaderComponent.vue'
import PopularProductsComponent from '@/components/PopularProductsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProductCardComponent from '@/components/ProductCardComponent.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(router)

app.component('HeaderComponent', HeaderComponent)
app.component('PopularProductsComponent', PopularProductsComponent)
app.component('FooterComponent', FooterComponent)
app.component('ProductCardComponent', ProductCardComponent)

app.use(pinia)
app.mount('#app')
