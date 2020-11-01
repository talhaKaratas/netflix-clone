import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home')
    }
  ],
  mode: 'history'
})
