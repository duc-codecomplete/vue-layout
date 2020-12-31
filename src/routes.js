
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import NonFooter from './views/NonFooter'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      layout: 'default'
    }
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    meta: {
      layout: 'default'
    }
  },
  {
    name: 'NonFooter',
    path: '/nonfooter',
    component: NonFooter,
    meta: {
      layout: 'nonfooter'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active"
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
