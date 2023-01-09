import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DatabasePage from '../views/DatabasePage.vue';
import PlanningPage from '../views/PlanningPage.vue';

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
  },
  {
    path: '/planning',
    name: 'planning',
    component: PlanningPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
