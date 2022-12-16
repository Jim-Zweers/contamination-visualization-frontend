import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DatabasePage from '../views/DatabasePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/database',
    name: 'database',
    component: DatabasePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
