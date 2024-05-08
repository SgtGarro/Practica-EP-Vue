import HomePage from '@/public/pages/home.component.vue'
import AnalyticsPage from '@/analytics/pages/analytics.component.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomePage
    },
    {
      path: '/analytics/health-checks',
      component: AnalyticsPage
    }
  ]
})

export default router
