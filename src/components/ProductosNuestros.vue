<template >

<div class="color cyan">
  <v-app-bar
      app
      color="cyan"
      dark
    >
      <div class="d-flex align-center">
        <v-btn 
   href="/Portada"
      
       
        text
      >
        <span class="mr-2"></span>
         <v-icon color black >mdi-arrow-left</v-icon>
      </v-btn>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://i.ibb.co/XbjNJWt/imagen-Kodia2.png"
          transition="scale-transition"
          width="65"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src=""
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">LOGIN</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container class=" color cyan" >
        <v-row wrap>
            <v-col  
            justify="center" align="center"  class="color cyan" cols="12"  >
                <h1  class="white--text">DIAGNÓSTICO DE ENFERMEDADES KODIA</h1>

            </v-col>
            
             
        </v-row>
          <v-row wrap>
            <v-col  
            justify="center" align="center"  class="color cyan" cols="3" >
<v-img src="https://i.ibb.co/48CbPk0/estadistica.png"
 aspect-ratio="1.1"></v-img>
<h2 class="white--text">ESTADÍSTICAS</h2>
 <div
   class="pa-10 text-center cyan lighten-2 rounded-3 white--text"
 v-text="`Nuestro sistema posee lo ultimo en tecnología para proveerte de los mejores resultados. `"
          ></div>
 
            </v-col>
             <v-col  
            justify="center" align="center" 
             class="color cyan" cols="3" >
<v-img src="https://i.ibb.co/qk1KjQv/pacientes.png"
 aspect-ratio="1.1"></v-img>
           <h2 class="white--text">PACIENTES</h2>
  <div
   class="pa-10 text-center cyan lighten-2 rounded-3 white--text"
 v-text="`Nos preocupamos por los pacientes brindandoles seguridad y comodidad en los resultados `"
          ></div>
            </v-col>
             <v-col  
            justify="center" align="center"  
            class="color cyan" cols="3" >
<v-img src="https://i.ibb.co/3hw0J1Z/medicos.png" 
aspect-ratio="1.1"></v-img>
            <h2 class="white--text">MÉDICOS</h2>
  <div
   class="pa-10 text-center cyan lighten-2 rounded-3 white--text"
 v-text="`Contamos con la mejor herramienta en el calculo de diagnostico para que tengas seguridad en todo momento`"
          ></div>
            </v-col>
             <v-col  
            justify="center" align="center"  class="color cyan" cols="3" >
<v-img src="https://i.ibb.co/SPgTCkB/secretaria.png"
 aspect-ratio="1.1"></v-img>
            <h2 class="white--text">SECRETARIAS</h2>
  <div
   class="pa-10 text-center cyan lighten-2 rounded-3 white--text"
 v-text="`Te ofrecemos una amplia organización de los datos y un manejo de calidad en las Historias de usuario.`"
          ></div>
            </v-col>
            
             
        </v-row>
    </v-container>
    </div>
</template>