import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vibration',
      name: 'vibration',
      component: () => import(/* webpackChunkName: "demo-vibration" */ './views/Vibration.vue')
    },
    {
      path: '/vibration-and-sound',
      name: 'vibration-and-sound',
      component: () => import(/* webpackChunkName: "demo-vibration-and-sound" */ './views/VibrationAndSound.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
