import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/home',
    component: HelloWorld,
    props: { activeSection: 'home' }
  },
  {
    path: '/about',
    component: HelloWorld,
    props: { activeSection: 'about' }
  },
  {
    path: '/skills',
    component: HelloWorld,
    props: { activeSection: 'skills' }
  },
  {
    path: '/education',
    component: HelloWorld,
    props: { activeSection: 'education' }
  },
  {
    path: '/testimonials',
    component: HelloWorld,
    props: { activeSection: 'testimonials' }
  },
  {
    path: '/contact',
    component: HelloWorld,
    props: { activeSection: 'contact' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
