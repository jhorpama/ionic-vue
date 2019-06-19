import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Imagen from '../components/Imagen.vue'
import Upload from '../components/Upload.vue'
import Profile from '../components/Profile.vue'
import Comments from '../components/Comments.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
       path: '/imagen',
       name: 'imagen',
       component: Imagen,
       meta: {
          requireAuth: true
       }
    },
    {
       path: '/upload',
       name: 'upload',
       component: Upload,
       meta: {
         requireAuth: true
       }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comments,
      props: true,
      meta: {
        requireAuth: true
      }
    }
  ]
})
