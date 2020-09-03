<template>

    <v-layout align-start>
        <v-flex>
            <v-toolbar flat color="white">
                <v-toolbar-title>Diagnosticos</v-toolbar-title>
                    <v-divider
                    class="mx-2"
                    inset
                    vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-text-field v-if="verNuevo==0" class="text-xs-center" v-model="search" append-icon="search" label="Búsqueda" single-line hide-details></v-text-field>
                    <v-btn v-if="verNuevo==0" @click="listar()" color="primary" dark class="mb-2">Buscar</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn v-if="verNuevo==0" @click="mostrarNuevo" color="primary" dark class="mb-2">Nuevo</v-btn>
                    
                    <v-dialog v-model="verSintomas" max-whidth="1000px">
                        <v-card>
                            <v-card-title>
                                <span class = "headline">Seleccione un Síntoma</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12 sm12 lg12 xl12>
                                            <v-text-field append-icon="search" 
                                            class="text-xs-center" v-model="texto"
                                            label="Ingrese síntoma buscar" @keyup.enter="listarSintoma()">
                                            </v-text-field>
                                            <template>
                                                <v-data-table
                                                    :headers="cabeceraSintomas"
                                                    :items="sintomas"
                                                    class="elevation-1"
                                                >
                                                    <template slot="items" slot-scope="props">
                                                        <td class="justify-center layout px-0">
                                                            <v-icon
                                                            small
                                                            class="mr-2"
                                                            @click="agregarDetalle(props.item)"
                                                            >
                                                            add
                                                            </v-icon>
                                                        </td>
                                                        <td>{{ props.item.nombre }}</td>
                                                        <td>{{props.item.enfermedad}}</td>
                                                        <td>{{props.item.descripcion}}</td>
                                                        <td>{{props.item.valor}}</td>
              
                                                    </template>
                                                    <template slot="no-data">
                                                        <h3>No hay síntomas para mostrar</h3>
                                                    </template>
                                                </v-data-table>
                                            </template>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn @click="ocultarSintomas()" color= "blue darken" flat>
                                    Cancelar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="adModal" max-width="290">
                        <v-card>
                            <v-card-title class="headline" v-if="adAccion==1">¿Activar Item?</v-card-title>
                            <v-card-title class="headline" v-if="adAccion==2">¿Anular Diagnostico?</v-card-title>
                            <v-card-text>
                                Estas a  punto de 
                                <span v-if="adAccion==1">Activar </span>
                                <span v-if="adAccion==2">Anular </span>
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
                                    Anular
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                </v-toolbar>
            <v-data-table
                :headers="headers"
                :items="diagnosticos"
                :search="search"
                class="elevation-1"
                v-if="verNuevo==0"
            >
                <template slot="items" slot-scope="props">
                    <td class="justify-center layout px-0">
                        <v-icon
                        small
                        class="mr-2"
                        @click="verDetalles(props.item)"
                        >
                        tab
                        </v-icon>
                        <template v-if="props.item.estado=='Aceptado'">
                            <v-icon
                            small
                            @click="activarDesactivarMostrar(2,props.item)"
                            >
                            block
                            </v-icon>
                        </template>
                        
                    </td>
                    <td>{{ props.item.usuario }}</td>
                    <td>{{ props.item.paciente }}</td>
                    <td>{{ props.item.tipo_diagnostico }}</td>
                    <td>{{ props.item.serie_diagnostico }}</td>
                    <td>{{ props.item.num_diagnostico }}</td>
                    <td>{{ props.item.fecha_hora }}</td>
                    <td>{{ props.item.resultado}}</td>
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
            <v-container grid-list-sm class="pa-4 white" v-if="verNuevo">
                <v-layout row wrap>
                    <v-flex xs12 sm4 ms4 lg4 xl4>
                        <v-select v-model="tipo_diagnostico"
                        :items="diagnosticales" label="Tipo Diagnostico">
                        </v-select>
                    </v-flex>
                    <v-flex xs12 sm4 ms4 lg4 xl4>
                        <v-text-field v-model="serie_diagnostico" label="Serie Diagnostico">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm4 ms4 lg4 xl4>
                        <v-text-field v-model="num_diagnostico" label="Número Diagnostico">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm8 ms8 lg8 xl8>
                        <v-select v-model="idpaciente"
                        :items="pacientes" label="Paciente">
                        </v-select>
                    </v-flex>
                    
                    <v-flex xs12 sm8 ms8 lg8 xl8>
                        <v-text-field @keyup.enter="buscarCodigo" v-model="codigo" label="Código">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm2 ms2 lg2 xl2>
                        <v-btn @click="mostrarSintomas" small fab dark color="teal">
                            <v-icon dark>list</v-icon>
                        </v-btn>
                    </v-flex>

                    <v-flex xs12 sm2 ms2 lg2 xl2 v-if="errorSintoma">
                        <div class="red--text" v-text="errorSintoma">
                        </div>
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
                                    @click="eliminarDetalle(detalles,props.item)"
                                    >
                                    delete
                                    </v-icon>
                               </td>
                                <td>{{ props.item.sintoma }}</td>
                                
                                <td><v-text-field type="number" v-model="props.item.valor"></v-text-field> </td>
                                
                        
                            </template>
                            <template slot="no-data">
                                <h3>No hay síntomas agregados al detalle.</h3>
                            </template>
                        </v-data-table>
                        <v-flex  class="text-xs-right">
                            <strong> Resultado: </strong>%{{resultado=(calculoTotal).toFixed(2)}}
                        </v-flex>


                    </v-flex>
                    <v-flex xs12 sm12 ms12 lg12 xl12>
                        <div class="red--text" v-for="v in validaMensaje" :key="v" v-text="v">
                        </div>
                    </v-flex>
                    <v-flex xs12 sm12 ms12 lg12 xl12>
                        <v-btn @click="ocultarNuevo()" color="blue darken-1" flat>Cancelar</v-btn>
                        <v-btn v-if="verDet==0" @click="guardar()" color="success">Guardar</v-btn>

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
                diagnosticos: [],
                dialog: false,
                headers: [
                
                    { text: 'Opciones', value: 'opciones', sortable: false }, 
                    { text: 'Usuario', value: 'usuario' },
                    { text: 'Paciente', value: 'paciente' },
                    { text: 'Tipo Diagnostico', value: 'tipo_diagnostico'},
                    { text: 'Serie Diagnostico', value: 'serie_diagnostico', sortable: false },
                    { text: 'Número Diagnostico', value: 'num_diagnostico', sortable: false },
                    { text: 'Fecha', value: 'fecha_hora', sortable: false },
                    { text: 'Resultado', value: 'resultado', sortable: false },
                    { text: 'Estado', value: 'estado', sortable: false }
                
                ],
                cabeceraDetalles: [
                
                    { text: 'Borrar', value: 'borrar', sortable: false }, 
                    { text: 'Sintoma', value: 'sintoma', sortable: false }, 
                    { text: 'valor', value: 'valor', sortable: false }
                    
                
                ],
                detalles:[
                ],
                search: '',
                id:'',
                idpaciente:'',
                pacientes:[  
                ],
                tipo_diagnostico:'',
                diagnosticales: ['UCI','TRIAGE'],
                serie_diagnostico:'',
                num_diagnostico:'',
                codigo:'', 
                verNuevo:0,
                errorSintoma:null, 
                //ResultadoParcial:0,
                resultado:0,
                cabeceraSintomas:   [
                        {text:'Seleccionar', value: 'seleccionar', sortable: false},
                        {text:'Síntoma', value: 'sintoma', sortable: false},  
                        {text:'Enfermedad', value: 'enfermedad', sortable: false},
                        {text:'Descripción', value: 'descripcion', sortable: false},
                        {text:'Valor', value: 'valor', sortable: false}                                                                                             
                ],
                sintomas:[],  

                texto:'', 
                verSintomas:0,  
                verDet: 0,     
                valida: 0,
                validaMensaje:[],
                adModal:0,
                adAccion:0,
                adNombre:'',
                adId:''
              
            }
        },
        computed: {
            calcularThal:function()    {
                var total = 0.0;
                
                 
                for(var i=0;i<this.detalles.length;i++)   {
                   if( (this.detalles[i].sintoma=='thal')  && (this.detalles[i].valor<=3) )      {
                                    total=0.10;
                             
                    }else{
                        if((this.detalles[i].sintoma=='thal')  && (this.detalles[i].valor>3 )&& (this.detalles[i].valor<=6.7 ))    {
                                    total=0.20;
                        }
                    }
                }
                return total;

            },
            calcularCa:function()    {
               // if(this.calcularTotal())    {
                 //   return;
                //}
                var total = 0.0;
                for(var i=0;i<this.detalles.length;i++)   {
                    if(  (this.detalles[i].sintoma=='enf_ca')  && (this.detalles[i].valor<=0.2) )      {
                                    total=0.10;
                                           
                    }else{
                        if((this.detalles[i].sintoma=='enf_ca')  && (this.detalles[i].valor>0.2 )&& (this.detalles[i].valor<=1.3 ))    {
                                    total=0.20;
                        }
                    }
                }
                return total;

            },
            calcularCp:function()    {
                var total = 0.0;
                
                 
                for(var i=0;i<this.detalles.length;i++)   {
                   if( (this.detalles[i].sintoma=='enf_cp')  && (this.detalles[i].valor<3.5) )      {
                                    total=0.10;
                             
                    }else{
                        if((this.detalles[i].sintoma=='enf_cp')  && (this.detalles[i].valor>=3.5 ))    {
                                    total=0.20;
                        }
                    }
                    
                }
                return total;

            },
            calcularOldpeak:function()    {
               // if(this.calcularTotal())    {
                 //   return;
                //}
                var total = 0.0;
                for(var i=0;i<this.detalles.length;i++)   {
                    if(  (this.detalles[i].sintoma=='oldpeak')  && (this.detalles[i].valor<0.55) )      {
                                    total=0.10;
                                           
                    }else{
                        if((this.detalles[i].sintoma=='oldpeak')  && (this.detalles[i].valor>=0.55 ))    {
                                    total=0.20;
                        }
                    }
                }
                return total;

            },
            calcularChol:function()    {
               // if(this.calcularTotal())    {
                 //   return;
                //}
                var total = 0.0;
                for(var i=0;i<this.detalles.length;i++)   {
                    if(  (this.detalles[i].sintoma=='chol')  && (this.detalles[i].valor<233.5) )      {
                                    total=0.10;
                                           
                    }else{
                        if((this.detalles[i].sintoma=='chol')  && (this.detalles[i].valor>=233.5 ))    {
                                    total=0.20;
                        }
                    }
                }
                return total;

            },
            calculoTotal:function()    {
               // if(this.calcularTotal())    {
                 //   return;
                //}
                var total = 0.0;
             
                if(  this.calcularThal == 0.10 && this.calcularCa== 0.10 )      {
                                    total=0.10;
                                           
                }else   {
                    if( this.calcularThal==0.10 && this.calcularCa==0.20 && this.calcularCp==0.10 ){
                                    total=0.20;
                    }else   {
                        if(this.calcularThal==0.10 && this.calcularCa==0.20 && this.calcularCp==0.20 )    {
                                    total=0.90;
                        }else{
                            if(this.calcularThal==0.20 && this.calcularOldpeak==0.20)    {
                                    total=0.90;
                            }else{
                                if(this.calcularThal==0.20 && thiss.calcularOldpeak==0.10 && this.calcularChol==0.10)    {
                                    total=0.15;
                                }else{
                                    if(this.calcularThal==0.20 && thiss.calcularOldpeak==0.10 && this.calcularChol==0.20)    {
                                        total=0.61;
                                    }
                                }
                            }
                        }
                    }
                }
                
                return total;

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
            mostrarNuevo()  {
                this.verNuevo=1;
            },
            ocultarNuevo()  {
                this.verNuevo=0;
                this.limpiar();
            },
            buscarCodigo()   {
                let me=this;
                me.errorSintoma=null;
                let header= {"Authorization": "Bearer " + this.$store.state.token};
                let configuracion=  {headers : header};
                 axios.get('api/Sintomas/BuscarCodigoDiagnostico/'+this.codigo,configuracion)
                 .then(function(response)  {
                       //console.log(response);
                       me.agregarDetalle(response.data);
                 }).catch(function(error)   {
                       console.log(error);
                       me.errorSintoma='No existe el sintoma';
                 });
            },

            listarSintoma() {
                let me=this;
                let header= {"Authorization": "Bearer " + this.$store.state.token};
                let configuracion=  {headers : header};
                 axios.get('api/Sintomas/ListarDiagnostico/'+me.texto,configuracion).then(function(response)  {
                       //console.log(response);
                       me.sintomas=response.data;
                 }).catch(function(error)   {
                       console.log(error);
                 });
            },

            mostrarSintomas()   {
                this.verSintomas=1;
            },

            ocultarSintomas()   {
                this.verSintomas=0;
            },

            agregarDetalle(data = [])    {
                this.errorSintoma=null;
                if(this.encuentra(data['idsintoma']))    {
                    this.errorSintoma="El sintoma ya ha sido agregado."
                }
                else    {
                    this.detalles.push(
                    {idsintoma:data['idsintoma'],
                    sintoma:data['nombre'],
                    valor:data['valor']

                    }
                );
                }
                

            },
            
            encuentra(id) {
                var sw=0;
                for(var i=0;i<this.detalles.length;i++)   {
                    if(this.detalles[i].idsintoma==id)    {
                        sw=1;
                    }

                }
                return sw;
            },
            eliminarDetalle(arr,item)   {
                var i = arr.indexOf(item);
                if(i!==-1)  {
                    arr.splice(i,1);
                }
            },

            listar()   {
                let me=this;
                let header= {"Authorization": "Bearer " + this.$store.state.token};
                let configuracion=  {headers : header};
                let url='';
                if(!me.search)    {
                    url='api/Diagnosticos/Listar';
                }
                else{
                    url='api/Diagnosticos/ListarFiltro/'+me.search;
                }
                 axios.get(url,configuracion).then(function(response)  {
                       //console.log(response);
                       me.diagnosticos=response.data;
                 }).catch(function(error)   {
                       console.log(error);
                 });
            },

             listarDetalles(id)   {
                let me=this;
                let header= {"Authorization": "Bearer " + this.$store.state.token};
                let configuracion=  {headers : header};
                 axios.get('api/Diagnosticos/ListarDetalles/'+id,configuracion).then(function(response)  {
                       //console.log(response);
                       me.detalles=response.data;
                 }).catch(function(error)   {
                       console.log(error);
                 });
            },

            verDetalles(item)   {
                this.limpiar();
                this.tipo_diagnostico=item.tipo_diagnostico;
                this.serie_diagnostico=item.serie_diagnostico;
                this.num_diagnostico=item.num_diagnostico;
                this.idpaciente=item.idpaciente;
                this.listarDetalles(item.id_diagnostico);
                this.verNuevo=1;
                this.verDet=1;
            },




            select()   {
                let me=this;
                var pacientesArray=[];
                let header= {"Authorization": "Bearer " + this.$store.state.token};
                let configuracion=  {headers : header};
                
                 axios.get('api/Personas/SelectPacientes',configuracion).then(function(response)  {
                       pacientesArray=response.data;
                       pacientesArray.map(function(x)    {
                           me.pacientes.push({text:x.nombre,value:x.idpersona});
                       });
                 }).catch(function(error)   {
                       console.log(error);
                 });
            },
 
            limpiar()   {
                this.id="";
                this.idpaciente="";
                this.tipo_diagnostico="";
                this.serie_diagnostico="";
                this.num_diagnostico="";
                this.codigo="";
                this.detalles=[];
                this.resultado=0;
                this.verDet=0;
                
                
            },

            guardar () {
                if(this.validar())    {
                    return;
                }
                let header= {"Authorization": "Bearer " + this.$store.state.token};
                let configuracion=  {headers : header};              
                let me=this;
                axios.post('api/Diagnosticos/Crear',{
                    
                    'idpaciente':me.idpaciente,
                    'idusuario':me.$store.state.usuario.idusuario,
                    'tipo_diagnostico':me.tipo_diagnostico,
                    'serie_diagnostico':me.serie_diagnostico,
                    'num_diagnostico':me.num_diagnostico,
                    'resultado':me.resultado,
                    'detalles' : me.detalles

                },configuracion).then(function(response)  {
                    me.ocultarNuevo();
                    me.listar();
                    me.limpiar();
                }).catch(function(error)   {
                    console.log(error)
                });

            },

            validar()   {
                this.valida=0;
                this.validaMensaje=[];

              
                if(!this.idpaciente){
                    this.validaMensaje.push("Selecciona un paciente.");
                }
                if(!this.tipo_diagnostico){
                    this.validaMensaje.push("Selecciona una tipo de diagnostico.");
                }
                if(!this.num_diagnostico){
                    this.validaMensaje.push("Ingrese un numero de diagnostico.");
                }

                if(this.detalles.length<=0){
                    this.validaMensaje.push("Ingrese al menos un sintoma a detalle.");

                }

                if(this.validaMensaje.length)   {
                    this.valida=1;
                }
                return this.valida;
            },
            activarDesactivarMostrar(accion,item)  {
                this.adModal=1;
                this.adNombre=item.num_diagnostico;
                this.adId=item.id_diagnostico;

                if(accion==1)   {
                    this.adAccion=1;
                }
                else if(accion==2) {
                    this.adAccion=2;
                }
                else{
                    this.adModal=0;
                }
            },
            activarDesactivarCerrar()   {
                this.adModal=0;
            },

            /*
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
            */

            desactivar()    {
                let me=this;
                let header= {"Authorization": "Bearer " + this.$store.state.token};
                let configuracion=  {headers : header};
                axios.put('api/Diagnosticos/Anular/'+this.adId,{},configuracion).then(function(response)  {
                    me.adModal=0;
                    me.adAccion=0;
                    me.adNombre="";
                    me.adId="";
                    me.listar();
                }).catch(function(error)   {
                    console.log(error);
                });

            }
        }        
    }
</script>
