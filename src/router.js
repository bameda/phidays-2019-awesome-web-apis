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
      path: '/geolocaton',
      name: 'geolocation',
      component: () => import(/* webpackChunkName: "demo-geolocation" */ './views/Geolocation.vue')
    },
    {
      path: '/battery',
      name: 'battery',
      component: () => import(/* webpackChunkName: "demo-battery" */ './views/Battery.vue')
    },
    {
      path: '/vibration',
      name: 'vibration',
      component: () => import(/* webpackChunkName: "demo-vibration" */ './views/Vibration.vue')
    },
    {
      path: '/media-capture-and-stream',
      name: 'media-capture-and-stream',
      component: () => import(/* webpackChunkName: "demo-media-capture-and-stream" */ './views/MediaCaptureAndStream.vue')
    },
    {
      path: '/audio',
      name: 'audio',
      component: () => import(/* webpackChunkName: "demo-audio" */ './views/Audio.vue')
    },
    {
      path: '/page-visibility',
      name: 'page-visibility',
      component: () => import(/* webpackChunkName: "demo-" */ './views/PageVisibility.vue')
    },
    {
      path: '/shared',
      name: 'shared',
      component: () => import(/* webpackChunkName: "demo-audio" */ './views/Shared.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
