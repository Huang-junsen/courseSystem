import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children:[
      {path: '/course',component: () => import(/* webpackChunkName: "courseList" */ '../components/courseList.vue')},
      {path: '/courseEditor',component: () => import(/* webpackChunkName: "courseEditor" */ '../components/courseEditor.vue')},
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  // {
  //   path: '/admin',
  //   name: 'Admin',
  //   component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
  //   redirect: '/welcome',
  //   children:[
  //     {path: '/welcome',component: () => import(/* webpackChunkName: "admin" */ '../components/Welcome.vue'),},
  //     {path: '/users',component: () => import(/* webpackChunkName: "admin" */ '../components/Users.vue'),},
  //     {path: '/roles',component: () => import(/* webpackChunkName: "admin" */ '../components/Roles.vue'),},
  //     {path: '/rights',component: () => import(/* webpackChunkName: "admin" */ '../components/Rights.vue'),},
  //     {path: '/article',component: () => import(/* webpackChunkName: "admin" */ '../components/Article.vue'),},
  //     {path: '/newarticle',component: () => import(/* webpackChunkName: "admin" */ '../components/newArticle.vue'),},
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
