<template>
    

<div >

<v-app 
 class="color blue">
<div >
 <v-app-bar  class="color blue">
   
   <v-btn 
   href="/Portada"

        text
      >
        <span class="mr-2"></span>
         <v-icon color black >mdi-arrow-left</v-icon>
      </v-btn>
  
<v-toolbar-title>KODIA</v-toolbar-title> 
<v-spacer></v-spacer>



<v-menu offset-y open-on-hover>
   <template v-slot:activator="{ on, attrs }">
     
        <v-btn 
         target="_blank" text  v-bind="attrs"
            v-on="on">
        <v-icon  >mdi-chevron-down</v-icon>
        <span class="mr-2">NUESTROS PRODUCTOS</span>
       
        </v-btn>
         </template>
       <v-list>
          <v-list-item
            v-for="(item, index) in itemsNProductos"
            :key="index"  router :to="item.route"
            
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
     
</v-menu>

<v-menu offset-y open-on-hover>
   <template v-slot:activator="{ on, attrs }">
     
        <v-btn 
         target="_blank" text  v-bind="attrs"
            v-on="on">
        <v-icon  >mdi-chevron-down</v-icon>
        <span class="mr-2">NOSOTROS</span>
       
        </v-btn>
         </template>
       <v-list>
          <v-list-item
            v-for="(item, index) in itemsNosotros"
            :key="index"
           
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
     
</v-menu>

<v-menu offset-y open-on-hover>
   <template v-slot:activator="{ on, attrs }">
     
        <v-btn 
         target="_blank" text  v-bind="attrs"
            v-on="on">
        <v-icon  >mdi-chevron-down</v-icon>
        <span class="mr-2">EQUIPO</span>
       
        </v-btn>
         </template>
       <v-list>
          <v-list-item
            v-for="(item, index) in itemsEquipo"
            :key="index"
           
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
     
</v-menu>

<v-menu offset-y open-on-hover>
   <template v-slot:activator="{ on, attrs }">
     
        <v-btn 
         target="_blank" text  v-bind="attrs"
            v-on="on">
        <v-icon  >mdi-chevron-down</v-icon>
        <span class="mr-2">NOTICIAS</span>
       
        </v-btn>
         </template>
       <v-list>
          <v-list-item
            v-for="(item, index) in itemsNoticias"
            :key="index"
           
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
     
</v-menu>

 </v-app-bar >
 </div  >
 
 <v-container fluid class=" color blue"  >
  
        <v-row wrap>
          
            <v-col  
            justify="center"
             align="center" 
              class="color blue"
               cols="6"  >
                  
 <h2    class="white--text">                                                                                                      
<br> <br><br> <br> <br> 

 </h2>
    <h1    class="white--text">DIAGNÓSTICO DE ENFERMEDADES CARDIACAS CON KODIA EL SISTEMA INTELIGENTE
KODIA </h1>
<br><br>

            </v-col>
          
              <v-col  
            justify="center" 
            align="center"  
            class="color blue"
             cols="6"  >
                
                 <h2    class="white--text">                                                                                                      
<br> <br><br> 

 </h2>
            <v-img src="https://i.ibb.co/6D6rPF8/fondoazul.png"
 aspect-ratio="1.1"
 max-width="300"
        max-height="300"></v-img>
        <h1  max-width="300"
        max-height="300"  class="white--text">
KODIA </h1>

            </v-col>
             
        </v-row>
     
    </v-container>
</v-app>

 </div>
 

</template>

<script>
  export default {
    data: () => ({
      itemsNProductos: [
        { title: 'Diagnostico',route:'/ProductosNuestros' },
        { title: 'Inteligencia Artificial' },
        { title: 'Premium' },
        { title: 'Seguridad' },
      ],
          itemsNosotros: [
        { title: 'Empresa' },
        { title: 'Motivación' },
        
      ],
       itemsEquipo: [
        { title: 'Personal' },
        { title: 'Proyectos' },
        
      ],
       itemsNoticias: [
        { title: 'Eventos' },
        { title: 'Premios' },
        { title: 'Nuevo' },
        
      ]
   
    }),
  }
</script>

