import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '../views/LoginView.vue'
import CartView from '../views/CartView.vue'
import ProductView from '../views/ProductView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/' , component: HomeView },
        {path: '/shop' , component: ShopView },
        {path: '/contact' , component: ContactView },
        {path: '/login' , component: LoginView },
        {path: '/cart' , component: CartView },
        {path: '/product/:id', name: 'producttype', component: ProductView},
    ]
  })
  export default router