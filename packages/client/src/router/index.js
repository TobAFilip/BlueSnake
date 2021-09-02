import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("../views/About.vue")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login")
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("../views/Register")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
