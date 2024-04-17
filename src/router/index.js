import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/mitgliederaufnahme',
      children: [
        {
          path: '',
          name: 'enrollment',
          component: () => import('@/views/EnrollmentView.vue')
        },
        {
          path: '/mitgliederaufnahme/aktivierung',
          name: 'activation',
          component: () => import('@/views/ActivationView.vue')
        }
      ]
    }
  ]
});

export default router;
