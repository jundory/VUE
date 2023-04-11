// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Weather" */ '@/views/Home.vue')
      },
      {
        path: '/Search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "Weather" */ '@/views/Search.vue')
      },
      {
        path: '/Login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Weather" */ '@/views/Login.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
