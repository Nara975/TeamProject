import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Join from '@/views/Join.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 히스토리 모드 입력
  routes: [ // routes 배열 입력
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // 정적 임포트
      path: '/join', // 회원가입 URL 경로
      component: Join // 회원가입 컴포넌트
    },
    {
      // 동적 임포트
      path: '/login', // 로그인 URL 경로
      component: () => import('../views/Login.vue') // 로그인 컴포넌트
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
