<template>
    <v-layout align-start>
        <v-flex>
            <v-toolbar flat color="white">
                <v-toolbar-title>Historias</v-toolbar-title>
                    <v-divider
                    class="mx-2"
                    inset
                    vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-text-field class="text-xs-center" v-model="search" append-icon="search" label="Búsqueda" single-line hide-details></v-text-field>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <v-btn slot="activator" color="primary" dark class="mb-2">Nuevo</v-btn>
                            <v-card>
                                <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                                </v-card-title>
                    
                                <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field v-model="nombre" label="Nombre">
                                        </v-text-field>
                                    </v-flex>   
                                    <v-flex xs12 sm6 md6>
                                        <v-select v-model="idrol"
                                        :items="roles" label="Rol">
                                        </v-select>    
                                    </v-flex>   
                                    <v-flex xs12 sm6 md6>
                                         <v-select v-model="tipo_documento"
                                        :items="documentos" label="Tipo Documento">
                                        </v-select> 
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field v-model="num_documento" label="Número Documento"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field v-model="direccion" label="Direccion"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field v-model="telefono" label="Telefono"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field v-model="email" label="Email"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field type="password" v-model="password" label="Password"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm12 md12 v-show="valida">
                                        <div class="red--text" v-for="v in validaMensaje" :key="v" v-text="v">
                                        </div>
                                    </v-flex>
                                
                                    </v-layout>
                                </v-container>
                                </v-card-text>
                    
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" flat @click.native="close">Cancelar</v-btn>
                                    <v-btn color="blue darken-1" flat @click.native="guardar">Guardar</v-btn>
                                </v-card-actions>
                            </v-card>
                    </v-dialog>
                    <v-dialog v-model="adModal" max-width="290">
                        <v-card>
                            <v-card-title class="headline" v-if="adAccion==1">¿Activar Item?</v-card-title>
                            <v-card-title class="headline" v-if="adAccion==2">¿Desactivar Item?</v-card-title>
                            <v-card-text>
                                Estas a  punto de 
                                <span v-if="adAccion==1">Activar</span>
                                <span v-if="adAccion==2">Desactivar</span>
                                el ítem  {{adNombre}}
                            </v-card-text>
                        
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="green darken-1" flat="flat" @click="activarDesactivarCerrar">
                                    Cancelar
                                </v-btn>
                                <v-btn v-if="adAccion==1" color="orange darken-4" flat="flat" @click="activar">
                                    Activar
                                </v-btn>
                                <v-btn v-if="adAccion==2" color="orange darken-4" flat="flat" @click="desactivar">
                                    Desactivar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            <v-data-table
                :headers="headers"
                :items="historias"
                :search="search"
                class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td class="justify-center layout px-0">
                        <v-icon
                        small
                        class="mr-2"
                        @click="editItem(props.item)"
                        >
                        edit
                        </v-icon>
                        <template v-if="props.item.estado=='Aceptado'">
                            <v-icon
                            small
                            @click="activarDesactivarMostrar(2,props.item)"
                            >
                            block
                            </v-icon>
                        </template>
                        <template v-else>
                            <v-icon
                            small
                            @click="activarDesactivarMostrar(1,props.item)"
                            >
                            check
                            </v-icon>
                        </template>
                    </td>
                    <td>{{ props.item.usuario }}</td>
                    <td>{{ props.item.enfermera }}</td>
                    <td>{{ props.item.tipo_historia }}</td>
                    <td>{{ props.item.serie_historia }}</td>
                    <td>{{ props.item.num_historia }}</td>
                    <td>{{ props.item.fecha_hora }}</td>
                    <td>{{ props.item.resultado }}</td>
                    <td>
                        <div v-if="props.item.estado=='Aceptado'">
                            <span class="blue--text">Aceptado</span>
                        </div>
                        <div v-else>
                            <span class="red--text">{{props.item.estado}}</span>
                        </div>
                    </td>
               
                </template>
                <template slot="no-data">
                <v-btn color="primary" @click="listar">Resetear</v-btn>
                </template>
            </v-data-table>
            <v-container grid-list-sm class="pa-4 white">
                <v-layout row wrap>
                    <v-flex xs12 sm4 ms4 lg4 xl4>
                        <v-select v-model="tipo_historia"
                        :items="historiales" label="Tipo Historia">
                        </v-select>
                    </v-flex>
                    <v-flex xs12 sm4 ms4 lg4 xl4>
                        <v-text-field v-model="serie_historia" label="Serie Historia">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm4 ms4 lg4 xl4>
                        <v-text-field v-model="num_historia" label="Número Historia">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm8 ms8 lg8 xl8>
                        <v-select v-model="idenfermera"
                        :items="enfermeras" label="Enfermera">
                        </v-select>
                    </v-flex>
                    
                    <v-flex xs12 sm8 ms8 lg8 xl8>
                        <v-text-field v-model="codigo" label="Código">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm2 ms2 lg2 xl2>
                        <v-btn small fab dark color="teal">
                            <v-icon dark>list</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex xs12 sm12 ms12 lg12 xl12>
                        <v-data-table
                            :headers="cabeceraDetalles"
                            :items="detalles"
                            hide-actions
                            class="elevation-1"
                        >
                            <template slot="items" slot-scope="props">
                                <td class="justify-center layout px-0">
                                    <v-icon
                                    small
                                    class="mr-2"
                                    
                                    >
                                    delete
                                    </v-icon>
                                   
                                   
                                </td>
                                <td>{{ props.item.sintoma }}</td>
                                <td>{{ props.item.nombre }}</td>
                                <td>{{ props.item.valor }}</td>
                                
                                
                                
                        
                            </template>
                            <template slot="no-data">
                                <h3>No hay síntomas agregados al detalle.</h3>
                            </template>
                        </v-data-table>
                    </v-flex>
                    
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                historias: [],
                dialog: false,
                headers: [
                
                    { text: 'Opciones', value: 'opciones', sortable: false }, 
                    { text: 'Usuario', value: 'usuario' },
                    { text: 'Enfermera', value: 'enfermera' },
                    { text: 'Tipo Historia', value: 'tipo_historia'},
                    { text: 'Serie Historia', value: 'serie_historia', sortable: false },
                    { text: 'Número Historia', value: 'num_historia', sortable: false },
                    { text: 'Fecha', value: 'fecha_hora', sortable: false },
                    { text: 'Resultado', value: 'resultado', sortable: false },
                    { text: 'Estado', value: 'estado', sortable: false },
                
                ],
                cabeceraDetalles: [
                
                    { text: 'Borrar', value: 'Borrar', sortable: false }, 
                    { text: 'Sintoma', value: 'sintoma', sortable: false },
                    { text: 'nombre', value: 'nombre', sortable: false },
                    { text: 'valor', value: 'valor', sortable: false },
                    
                
                ],
                detalles:[
                    {idsintoma: '1000',sintoma:'Articulo 1', nombre:'fiebre',valor:'10'},
                    {idsintoma: '2000',sintoma:'Articulo 2', nombre:'rew',valor:'20'}

                ],
                search: '',
                editedIndex: -1,
                id:'',
                idenfermera:'',
                enfermeras:[  
                ],
                tipo_historia:'',
                historiales: ['UCI','TRIAGE','EMERGENCIA','OPERACIONES'],
                serie_historia:'',
                num_historia:'',
                codigo:'',               
                valida: 0,
                validaMensaje:[],
                adModal:0,
                adAccion:0,
                adNombre:'',
                adId:''
              
            }
        },
        computed: {
            formTitle () {
            return this.editedIndex === -1 ? 'Nuevo Usuario' : 'Actualizar usuario'
            }
        },

        watch: {
            dialog (val) {
            val || this.close()
            }
        },

        created () {
            this.listar();
            this.select();
            
        },
        methods:{

            listar()   {
                let me=this;
                let header= {"Authorization": "Bearer " + this.$store.state.token};
                let configuracion=  {headers : header};
                 axios.get('api/Historias/Listar',configuracion).then(function(response)  {
                       //console.log(response);
                       me.historias=response.data;
                 }).catch(function(error)   {
                       console.log(error);
                 });
            },
            select()   {
                let me=this;
                let header= {"Authorization": "Bearer " + this.$store.state.token};
                let configuracion=  {headers : header};
                var enfermerasArray=[];
                 axios.get('api/Personas/SelectEnfermeras',configuracion).then(function(response)  {
                       enfermerasArray=response.data;
                       enfermerasArray.map(function(x)    {
                           me.enfermeras.push({text:x.nombre,value:x.idpersona});
                       });
                 }).catch(function(error)   {
                       console.log(error);
                 });
            },

            editItem (item) {
                this.id=item.idusuario;
                this.idrol=item.idrol;
                this.nombre=item.nombre;
                this.tipo_documento=item.tipo_documento;
                this.num_documento=item.num_documento;
                this.direccion=item.direccion;
                this.telefono=item.telefono;
                this.email=item.email;
                this.password=item.password_hash;
                this.passwordAnt=item.password_hash;
                this.editedIndex=1;
                this.dialog = true
            },

         
            close () {
                this.dialog = false;
                this.limpiar();
            },

            limpiar()   {
                this.id="";
                this.idrol="";
                this.nombre="";
                this.tipo_documento="";
                this.num_documento="";
                this.direccion="";
                this.telefono="";
                this.email="";
                this.password="";
                this.passwordAnt="";
                this.actPassword=false;
                this.editedIndex=-1;
            },

            guardar () {
                if(this.validar())    {
                    return;
                }
                let header= {"Authorization": "Bearer " + this.$store.state.token};
                let configuracion=  {headers : header};
                if (this.editedIndex > -1) {
                    //Código para editar
                    let me=this;
                    if(me.password!=me.passwordAnt)
                    {
                        me.actPassword=true;    
                    }
                        


                    axios.put('api/Usuarios/Actualizar',{
                        'idusuario':me.id,
                        'idrol':me.idrol,
                        'nombre':me.nombre,
                        'tipo_documento':me.tipo_documento,
                        'num_documento':me.num_documento,
                        'direccion':me.direccion,
                        'telefono':me.telefono,
                        'email' : me.email,
                        'password' : me.password,
                        'act_password':me.actPassword,

                    },configuracion).then(function(response)  {
                        me.close();
                        me.listar();
                        me.limpiar();
                    }).catch(function(error)   {
                        console.log(error)
                    });

                } else {
                    //Código para guardar
                    let me=this;
                    axios.post('api/Usuarios/Crear',{
                        
                        'idrol':me.idrol,
                        'nombre':me.nombre,
                        'tipo_documento':me.tipo_documento,
                        'num_documento':me.num_documento,
                        'direccion':me.direccion,
                        'telefono':me.telefono,
                        'email' : me.email,
                        'password' : me.password,

                    },configuracion).then(function(response)  {
                        me.close();
                        me.listar();
                        me.limpiar();
                    }).catch(function(error)   {
                        console.log(error)
                    });

                }
                
            },

            validar()   {
                this.valida=0;
                this.validaMensaje=[];

                if(this.nombre.length<3 || this.nombre.length>100)    {
                    this.validaMensaje.push("El nombre debe tener más de 3 caracteres y menos de 100 caracteres.");

                }
               
                if(!this.idrol){
                    this.validaMensaje.push("Selecciona un rol.");
                }
                if(!this.tipo_documento){
                    this.validaMensaje.push("Selecciona una tipo de documento.");
                }
                if(!this.email){
                    this.validaMensaje.push("Ingrese un email del usuario.");
                }
                if(!this.password){
                    this.validaMensaje.push("Ingrese el password del usuario.");
                }

                if(this.validaMensaje.length)   {
                    this.valida=1;
                }
                return this.valida;
            },
            activarDesactivarMostrar(accion,item)  {
                this.adModal=1;
                this.adNombre=item.nombre;
                this.adId=item.idusuario;

                if(accion==1)   {
                    this.adAccion=1;
                }else if(accion==2) {
                    this.adAccion=2;
                }
                else{
                    this.adAccion=0;
                }
            },
            activarDesactivarCerrar()   {
                this.adModal=0;
            },
            activar()   {
                let me=this;
                let header= {"Authorization": "Bearer " + this.$store.state.token};
                let configuracion=  {headers : header};
                axios.put('api/Usuarios/Activar/'+this.adId,{},configuracion).then(function(response)  {
                    me.adModal=0;
                    me.adAccion=0;
                    me.adNombre='';
                    me.adId='';
                    me.listar();
                }).catch(function(error)   {
                    console.log(error)
                });

            },
            desactivar()    {
                let me=this;
                let header= {"Authorization": "Bearer " + this.$store.state.token};
                let configuracion=  {headers : header};
                axios.put('api/Usuarios/Desactivar/'+this.adId,{},configuracion).then(function(response)  {
                    me.adModal=0;
                    me.adAccion=0;
                    me.adNombre='';
                    me.adId='';
                    me.listar();
                }).catch(function(error)   {
                    console.log(error)
                });

            }
        }        
    }
</script>
