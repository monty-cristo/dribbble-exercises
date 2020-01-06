import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pay',
    name: 'pay',
    // route level code-splitting
    // this generates a separate chunk (pay.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "pay" */ '../views/Pay.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
