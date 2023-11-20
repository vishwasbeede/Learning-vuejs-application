import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogonView from '../views/LoginPage.vue'
import RegisterView from '../views/RegisterPage.vue'
import userCartView from '../views/userCart.vue'
import userPageView from '../views/userPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
  {
    path: '/login',
    name: 'LogonView',
    component: LogonView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/cart',
    name: 'userCartView',
    component: userCartView
  },
  {
    path: '/profiles',
    name: 'userPageView',
    component: userPageView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
