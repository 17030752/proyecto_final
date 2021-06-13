import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Estudiantes_Personal from '../views/Estudiantes_Personal.vue'
import Directivos from '../views/Directivos.vue'
import Monitoreo from '../views/Monitoreo.vue'
import Medicos from '../views/Medicos.vue'
import Administrador from '../views/Administrador.vue'
import Reportes from '../views/Reportes.vue'
import Login from '../views/Login.vue'
import Singup from '../views/Singup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:"/estudiantes_personal/",
    name:"Estudiantes",
    component:Estudiantes_Personal
  },{
    path:"/directivos/",
    name:"Directivos",
    component:Directivos
  },{
    path:"/monitoreo/",
    name:"Monitoreo",
    component:Monitoreo
  },{
    path:"/medicos/",
    name:"Medicos",
    component:Medicos
  },{
    path:"/administrador/",
    name:"Administrador",
    component:Administrador
  },{
    path:"/reportes/",
    name:"Reportes",
    component:Reportes
  },{
    path:"/login/",
    name:"Login",
    component:Login
  },{
    path:"/singup/",
    name:"Singup",
    component:Singup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
