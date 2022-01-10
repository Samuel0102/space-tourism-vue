import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination',
    name: 'Destination',
    component: Destination
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
