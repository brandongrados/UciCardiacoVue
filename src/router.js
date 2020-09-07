import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Enfermedad from './components/Enfermedad.vue'
import Sintoma from './components/Sintoma.vue'
import Rol from './components/Rol.vue'
import Usuario from './components/Usuario.vue'
import Paciente from './components/Paciente.vue'
import Enfermera from './components/Enfermera.vue'
import Login from './components/Login.vue'
import Historia from './components/Historia.vue'
import Diagnostico from './components/Diagnostico.vue'
import Portada from './components/Portada.vue'
import ProductosNuestros from './components/ProductosNuestros.vue'
import ReporteIndividual from './components/ReporteIndividual.vue'
import ReporteGeneral from './components/ReporteGeneral.vue'
import ConsultaDiagnostico from './components/ConsultaDiagnostico.vue'
import ConsultaHistoria from './components/ConsultaHistoria.vue'
import store from './store'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        administrador:true,
        medico:true,
        secretaria:true
      }
    },

    {
      path: '/ProductosNuestros',
      name: 'ProductosNuestros',
      
      component: ProductosNuestros,
      meta: {
        libre:true
        
      }
    }
    ,
    {
      path: '/Portada',
      name: 'Portada',
    
      component:Portada,
      meta: {
        libre:true
      }
    },


    {
      path: '/enfermedades',
      name: 'enfermedades',
      component: Enfermedad,
      meta: {
        administrador:true,
        medico:true,
        
      }
    },

    {
      path: '/sintomas',
      name: 'sintomas',
      component: Sintoma,
      meta: {
        administrador:true,
        medico:true,
       
      }
    },

   {
      path: '/historias',
      name: 'historias',
      component: Historia,
      meta: {
        administrador:true,
        medico:true,
        secretaria:true,
       
      }
    },

    {
      path: '/consultahistorias',
      name: 'consultahistorias',
      component: ConsultaHistoria,
      meta: {
        administrador:true,
        medico:true,
        secretaria:true
        
      }
    },

    {
      path: '/roles',
      name: 'roles',
      component: Rol,
      meta: {
        administrador:true
      }
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuario,
      meta: {
        administrador:true
   
      }
    },

    {
      path: '/pacientes',
      name: 'pacientes',
      component: Paciente,
      meta: {
        administrador:true,
        medico:true,
        secretaria:true
        
      }
    },

    {
      path: '/diagnosticos',
      name: 'diagnosticos',
      component: Diagnostico,
      meta: {
        administrador:true,
        medico:true,
        secretaria:true
        
      }
    },

    {
      path: '/consultadiagnosticos',
      name: 'consultadiagnosticos',
      component: ConsultaDiagnostico,
      meta: {
        administrador:true,
        medico:true,
        secretaria:true
        
      }
    },

    {
      path: '/enfermeras',
      name: 'enfermeras',
      component: Enfermera,
      meta: {
        administrador:true,
        medico:true,
        secretaria:true
      }
    },
    {
      path: '/reporteindividual',
      name: 'reporteindividual',
      component: ReporteIndividual,
      meta: {
        administrador:true
        
      }
    },
      {
        path: '/reportegeneral',
        name: 'reportegeneral',
        component: ReporteGeneral,
        meta: {
        administrador:true
        }
      },

    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        libre:true
      }


    },
  ]
})


router.beforeEach((to,from,next)=>  {
  if(to.matched.some(record => record.meta.libre))  {
    next()
  
  }
  
  else if(store.state.usuario && store.state.usuario.rol == 'Administrador')  {
    if(to.matched.some(record=>record.meta.administrador))  {
      next()
    }
  }
  else if(store.state.usuario && store.state.usuario.rol == 'Medico')  {
    if(to.matched.some(record=>record.meta.medico))  {
      next()
    }
  }
  else if(store.state.usuario && store.state.usuario.rol == 'Secretaria')  {
    if(to.matched.some(record=>record.meta.secretaria))  {
      next()
    }

    
  } else {
    next( {
      name:'login'
     
    })
  }
  
   
  


})
export default router