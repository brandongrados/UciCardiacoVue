import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Enfermedad from './components/Enfermedad.vue'
import Sintoma from './components/Sintoma.vue'


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
      path: '/enfermedades',
      name: 'enfermedades',
      component: Enfermedad
    },

    {
      path: '/sintomas',
      name: 'sintomas',
      component: Sintoma
    }
  ]
})
