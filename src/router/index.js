import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import BadgeTimeView from '../pages/BadgeTimeView.vue'
import BadgeTimeUpdateView from '../pages/BadgeTimeUpdateView.vue'
import SignupView from '../pages/SignupView.vue'
import LoginView from '../pages/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/badge-time/:id',
    name: 'badge-time',
    component: BadgeTimeView
  },
  {
    path: '/badge-time/:id/update',
    name: 'badge-time-update',
    component: BadgeTimeUpdateView,
   
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
