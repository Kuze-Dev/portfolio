import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
  
      component: () => import('../views/aboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contactView.vue'),
    },
    {
      path: '/project',
      name: 'project',
     
      component: () => import('../views/projectView.vue'),
    },
  ],
})

export default router
