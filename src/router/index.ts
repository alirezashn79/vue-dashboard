import SignIn from '@/components/auth/sign-in.vue'
import SignUp from '@/components/auth/sign-up.vue'
import VerifyOtp from '@/components/auth/verify-otp.vue'
import AuthLayout from '@/layouts/auth-layout.vue'
import RootLayout from '@/layouts/root-layout.vue'
import BusinessesView from '@/views/businesses-view.vue'
import HomeView from '@/views/home-view.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'signin',
          component: SignIn,
        },
        {
          path: 'signup',
          component: SignUp,
        },
        {
          path: 'verify-otp',
          component: VerifyOtp,
        },
      ],
    },
    {
      path: '/',
      component: RootLayout,
      children: [
        {
          path: '',
          component: HomeView,
        },
        {
          path: 'businesses',
          component: BusinessesView,
        },
      ],
    },
  ],
})

export default router
