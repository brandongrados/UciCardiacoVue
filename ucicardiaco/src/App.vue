<template>
  <v-app id="inspire">

    
    <v-app-bar
      color="light-blue"
      light-blue
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
    >
      <v-app-bar-title style="width: 1000px" class="ml-0 pl-4">
        <v-app-bar-side-icon @click.stop="drawer = !drawer"></v-app-bar-side-icon>
        <v-btn icon>
        <v-icon>reorder</v-icon>
        </v-btn>
        <span class="hidden-sm-and-down">Sistema UCI Cardíaco</span>
      </v-app-bar-title>

      <v-spacer></v-spacer>
       
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      fixed
      >

      <v-list dense>

        <template>          
          <v-list-item :to="{ name: 'home'}">
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
              Inicio
            </v-list-item-title>
          </v-list-item>          
        </template>

        <template>
            <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  Registro
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'enfermedades'}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Enfermedades
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-spacer></v-spacer>
            <v-list-item :to="{ name: ''}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Síntomas
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <template>
            <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  Hitoria
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: ''}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Usuario
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-spacer></v-spacer>
            <v-list-item :to="{ name: ''}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Paciente
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <template>
            <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  Diagnóstico
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: ''}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Diagnóstico
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-spacer></v-spacer>
            <v-list-item :to="{ name: ''}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Pacientes
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <template>
            <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  Accesos
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: ''}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Roles
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-spacer></v-spacer>
            <v-list-item :to="{ name: ''}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Usuarios
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <template>
            <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  Consultas
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: ''}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Consulta Pacientes
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-spacer></v-spacer>
            <v-list-item :to="{ name: ''}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                 Consulta Diagnóstico
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid fill-height>
        <v-slide-y-transition mode="out-in">
          <router-view/>
        </v-slide-y-transition>
      </v-container>
    </v-content>

    <v-footer  light height="auto" width="100%" 
    absolute >
      <v-layout justify-center>
        <v-flex text-xs-center>
          <v-card flat tile color="light-blue" class="white--text">
            <v-card-text class="white--text pt-0">
              IncanatoIT &copy;2020
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-footer>


  </v-app>
</template>


<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: true,
      clipped: false,
      fixed: false,
      items: [{
        icon: 'table_chart',
        icon: 'apps',
        icon: 'reorder',
        title: 'Inspire',
        title:'Sistema UCI Cardiaco', icon:'reorder'
      }],
      miniVariant: false,
      center: true,
      centerDrawer: false,
      title: 'Vuetify.js'
    }
    
  }
}
</script>

