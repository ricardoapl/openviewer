<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Dashboard</h1>
        <div class="row mt-5">
          <div v-for="(item,index) in dashboardSelection" :key="item.label" class="col-sm" :class="index==selected?'mt-2':'opacity'">
              <div>
                <button @click="selected=index" :class="index==selected?'active':''" type="button" class="btn btn-dark btn-outline-light">{{item.label}}</button>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container"> 
      <div class="row mt-5  text-center mb-4">
        <div v-if="dashboardSelection[selected].label != 'Cluster Overview'" class="col-sm-3">
        <select @change="getTotals(true)" v-model="selectedNamespace" class="custom-select mt-4">
          <option value="*"> All Namespaces</option>
          <option :value="namespace" v-for="namespace in namespacesNames" :key="namespace"> {{namespace}} Namespace</option>
        </select>
        </div>
        <div class="col-sm" v-for="(info) in dashboardSelection[selected].options" :key="info.dataId">
          <div style="border-radius: 50px;" class="card text-center mb-2">
            <div class="card-body">
             <div class="mt-2">
                {{counters[info.dataId]||'0'}}
              </div>
              <div>
              </div>
            </div>
          </div>
          <p>
            <a class="btn btn-outline-info btn-block" :class="info.status?'':'disabled'" data-toggle="collapse" :data-target="'#'+info.dataId" role="button" aria-expanded="true" :aria-controls="info.dataId">{{info.name}}</a>
          </p>
        </div>
      </div>
      
      <div v-for="(info) in dashboardSelection[selected].options" :key="info.dataId" v-if="info.status" class="">
          <div class="card panel-collapse show mb-3" :id="info.dataId">
            <h3 class="card-header"> {{info.name}} </h3>
            <component :namespace="selectedNamespace" class="mt-3" :key="info.component" :is="info.component"></component>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

// COMPONENT 
import namespacesList from './namespaces/namespacesList.vue'
import nodesList from './nodes/nodesList.vue'
import servicesList from './services/servicesList.vue'
import podsList from './pods/podsList.vue'
import rolesList from './roles/rolesList.vue'
import deploymentsList from './deployments/deploymentsList.vue'


export default {
  name: 'HomeView',
  components: {
    'namespaces-list': namespacesList,
    'nodes-list': nodesList,
    'services-list': servicesList,
    'pods-list': podsList,
    'roles-list': rolesList,
    'deployments-list': deploymentsList,
  },
  data () {
    return {
      selected: 0,
      selectedNamespace: '*',
      counters:{
        namespaces:null,
        nodes:null,
        roles:null,
        pvolumes:null,
        sclasses:null,
        cjobs:null,
        deployments:null,
        jobs:null,
        pods:null,
        rsets:null,
        rcontrollers:null,
        ssets:null,
        ingress:null,
        lbservices:null,
        get:null,
        types:null,
        services:null,
        cmaps:null,
        pvolumeclaims:null,
        secrets:null,
      },
      dashboardSelection:[
        {
          label:"Cluster Overview",
          options:[
            {
              name:"Namespaces",
              status:true,
              dataId:"namespaces",
              component:"namespaces-list"
            },
            {
              name:"Nodes",
              status:true,
              dataId:"nodes",
              component:"nodes-list"
            },
            // {
            //   name:"Persistent Volumes",
            //   status:false,
            //   dataId:"pvolumes",
            //   component:""
            // },
            {
              name:"Roles",
              status:true,
              dataId:"roles",
              component:"roles-list"
            },
            // {
            //   name:"Storage Classes",
            //   status:false,
            //   dataId:"sclasses",
            //   component:""
            // },
          ]
        },
        {
          label:"Workloads",
          options:[
            // {
            //   name:"Cron Jobs",
            //   status:false,
            //   dataId:"cjobs",
            //   component:""
            // },
            {
              name:"Deployments",
              status:true,
              dataId:"deployments",
              component:"deployments-list"
            },
            // {
            //   name:"Jobs",
            //   status:false,
            //   dataId:"jobs",
            //   component:""
            // },
            {
              name:"Pods",
              status:true,
              dataId:"pods",
              component:"pods-list"
            },
            // {
            //   name:"Replica Sets",
            //   status:false,
            //   dataId:"rsets",
            //   component:""
            // },
            // {
            //   name:"Replication Controllers",
            //   status:false,
            //   dataId:"rcontrollers",
            //   component:""
            // },
            // {
            //   name:"Stateful Sets",
            //   status:false,
            //   dataId:"ssets",
            //   component:""
            // },
          ]
        },
        {
          "label":"Services",
          options:[
            {
              name:"Get",
              status:false,
              dataId:"get",
              component:""
            },
            {
              name:"Tipos de",
              status:false,
              dataId:"types",
              component:""
            },
            {
              name:"Serviço",
              status:false,
              dataId:"services",
              component:""
            },
          ]
        },
        {
          label:"Discovery & LB",
          options:[
            {
              name:"Ingresses",
              status:false,
              dataId:"ingress",
              component:""
            },
            {
              name:"Services",
              status:false,
              dataId:"lbservices",
              component:""
            },
          ]
        },
        {
          label:"Config & Storage",
          options:[
            {
              name:"Config Maps",
              status:false,
              dataId:"cmaps",
              component:""
            },
            {
              name:"Persistent Volume Claims",
              status:false,
              dataId:"pvolumeclaims",
              component:""
            },
            {
              name:"Secrets",
              status:false,
              dataId:"secrets",
              component:""
            },
          ]
        },
      ]
    }
  },
  mounted () {
    this.getStatesAction();
  },
  computed: {
    namespacesNames() {
      return this.$store.state.namespaces.namespaces.map(value => value.metadata.name);
    },
    changed () {
      var aux;
      for (const [key, value] of Object.entries(this.counters)) {
        if(this.$store.state[key]){
          aux = aux + this.$store.state[key][key];
        }
      }
      return aux;
    }
  },
  methods: {
    getStatesAction(){
      for (const [key, value] of Object.entries(this.counters)) {
        if(this.$store.state[key]){
          this.$store.dispatch(key+'/get'+key.charAt(0).toUpperCase() + key.slice(1))
        }
      }
    },
    getTotals(){
      for (const [key, value] of Object.entries(this.counters)) {
        if(this.$store.state[key]){
          if(this.selectedNamespace!='*' && this.$store.state[key].inNamespace){
            var getter = key+'/filtered'+key.charAt(0).toUpperCase() + key.slice(1)+'Namespace';
            this.counters[key] = this.$store.getters[getter](this.selectedNamespace);
            if(!this.counters[key]){
              this.counters[key] = 0
            }
          } else{
            this.counters[key] = this.$store.state[key]['total'+key]
          }
          if(!this.counters[key]){
            this.counters[key] = 0
          }
        } else{
          this.counters[key] = "NA"
        }
      }
    }
  },
  watch: {
    changed(value) {
       this.getTotals();
    }
  }
}
</script>

<style scoped>

.opacity{
  opacity: 0.8;
}


</style>
