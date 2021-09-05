import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register")
  },
  {
    path: "/user-section",
    component: () => import("../views/UserSection"),
    children: [
      { path: "/feed", name: "feed", component: () => import("../views/user-section/Feed") },
      { path: "/create-post", name: "create-post", component: () => import("../views/user-section/CreatePost") }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
