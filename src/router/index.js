
import HomeView from '@/views/sistema/NoAuth/HomeView.vue'
import LoginView from '@/views/sistema/NoAuth/LoginView.vue'
import RegistrarView from '@/views/sistema/NoAuth/RegistrarView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Cuide&Dele',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Cuide&Dele - Login',
      },
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: RegistrarView,
      meta: {
        title: 'Cuide&Dele - Registrar',
      },
    },
  ],
})

export default router
