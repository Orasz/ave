import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Brand from './views/Brand.vue'
import Sign from './views/Sign.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/brand',
      name: 'brand',
      component: Brand
    },
    {
      path: '/sign',
      name: 'sign',
      component: Sign
    }
  ]
})
