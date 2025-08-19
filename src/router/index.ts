import SignIn from '@/components/auth/sign-in.vue'
import SignUp from '@/components/auth/sign-up.vue'
import VerifyOtp from '@/components/auth/verify-otp.vue'
import AuthLayout from '@/layouts/auth-layout.vue'
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
  ],
})

export default router
