import { createRouter, createWebHistory } from 'vue-router'
import DefaultHome from '../views/DefaultHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultHome
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('../components/MovieDetails.vue')
    }
  ]
})

export default router
