<template>
  <span>
    <span class="row mt-3 ml-3">
        <div class="col mb-3 mr-5" >
          <div class="card text-center">
              <div class="card-body">
              <span class="badge badge-secondary">specify new custom metric</span>
              <p class="card-text mt-3 text-left">
                Name
                <input v-model="newCustomMetric.name" class="form-control" type="text" placeholder="Custom Metric Name" >
              </p>
              <div class="row mt-3 mb-3">
                <div class="col">
                  <div class="">
                    Select Custom Metric Type
                    <select
                      v-model="newCustomMetric.type"
                      class="custom-select"
                    >
                      <option
                        v-for="type in customMetricTypes"
                        :key="type.type"
                        :value="type"
                      >
                        {{ type.type }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="">
                    Select Target Type
                    <select
                      v-model="newCustomMetric.targetType"
                      class="custom-select"
                      v-if="newCustomMetric.type"
                    >
                      <option
                        v-for="targetType in newCustomMetric.type.targetTypes"
                        :key="targetType"
                        :value="targetType"
                      >
                        {{ targetType }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <span v-if="newCustomMetric.type&&newCustomMetric.type.describedObject" class="text-center">
                <div class="row">
                  <label class="form-check-label col mt-3 mb-3 text-right">
                    <b>Object</b> API Version
                  </label>
                  <input v-model="newCustomMetric.objectApiVersion" type="text" class="form-control mb-3 mt-3 col ml-5 mr-3" placeholder="networking.k8s.io/v1beta1">
                </div>
                <div class="row">
                  <label class="form-check-label col mt-3 mb-3 text-right">
                    <b>Object</b> Kind
                  </label>
                  <input v-model="newCustomMetric.objectKind" type="text" class="form-control mb-3 mt-3 col ml-5 mr-3" placeholder="Ingress">
                </div>
                <div class="row">
                  <label class="form-check-label col mt-3 mb-3 text-right">
                    <b>Object</b> Name
                  </label>
                  <input v-model="newCustomMetric.objectName" type="text" class="form-control col mb-3 mt-3 ml-5 mr-3" placeholder="main-route">
                </div>
              </span>
              
                  
              <button
                  class="btn btn-info"
                  @click="create()"
              >
                  Create Custom Metric
              </button>
              </div>
          </div>
        </div>
        </span>
        <span class="row mt-3 ml-3">
          <div v-for="currentSelectedableCustomPod in selectableCustomPodsMetrics" :key="currentSelectedableCustomPod.name" :class="{ opacity: selectedCustomPodMetrics.length>0 && selectedCustomPodMetrics.map(function(x) {return x.name; }).indexOf(currentSelectedableCustomPod.name)==-1}" >
          <div class="col mb-3" style="350px">
            <div class="card text-center">
              <div class="card-body">
              <div class="mt-2">
                  <span class="badge badge-warning">custom pod metrics</span>
                  <p class="mt-2 lead">
                  {{currentSelectedableCustomPod.name}}
                  </p>
              </div>
              <p class="card-text">
                  {{currentSelectedableCustomPod.target.type}}
              </p>
              <button
                  class="btn btn-info"
                  @click="addCustomPodMetric(currentSelectedableCustomPod)"
              >
                  Select
              </button>
              </div>
            </div>
          </div>
        </div>
      </span>
      <span class="row mt-3 ml-3">
        <div v-for="(currentSelectedableCustomObject) in selectableCustomObjectsMetrics" :key="currentSelectedableCustomObject.name" :class="{ opacity: selectedCustomObjectMetrics.length>0 && selectedCustomObjectMetrics.map(function(x) {return x.name; }).indexOf(currentSelectedableCustomObject.name)==-1}" >
        <div class="col mb-3" style="width:350px">
          
          <div class="card text-center">
              <div class="card-body">
              <div class="mt-2">
                  <span class="badge badge-danger">custom object metrics</span>
                  <p class="mt-2 lead">
                  {{currentSelectedableCustomObject.name}}
                  </p>
              </div>
              <div class="card-text mb-2">
                <label>Target Type</label>
                <div> {{currentSelectedableCustomObject.target.type}}</div>
                Object:
                <div>Name: {{currentSelectedableCustomObject.object.name}}</div>
                <div>Kind: {{currentSelectedableCustomObject.object.kind}}</div>
                <div>API: {{currentSelectedableCustomObject.object.apiVersion}}</div>
              </div>
              <button
                  class="btn btn-info"
                  @click="addCustomObjectMetric(currentSelectedableCustomObject)"
              >
                  Select
              </button>
              </div>
          </div>
        </div>
        </div>
      </span>
  </span>
</template>

<script>

export default {
  name: 'CustomMetricsListHpa',
  components: {
  },
  props: [
    'selectedCustomPodMetrics',
    'selectedCustomObjectMetrics'
  ],
  data () {
    return {
      newCustomMetric:{},
      selectableCustomPodsMetrics:[
      ],
      selectableCustomObjectsMetrics:[
      ],
      customMetricTypes:[
        {
          type:"Pods",
          targetTypes:[
            'AverageValue'
          ],
          describedObject:false,
        },
        {
          type:"Object",
          targetTypes:[
            'AverageValue',
            'Value'
          ],
          describedObject:true,
        }
      ]
    }
  },
  computed: {
    
  },
  mounted () {
    console.log('MetricsListHpa created and mounted')
  },
  methods: {
    addCustomPodMetric(customMetric){
        this.$emit('addCustomPodMetric',customMetric)
    },
    addCustomObjectMetric(customMetric){
        this.$emit('addCustomObjectMetric',customMetric)
    },
    create(){
      if(this.newCustomMetric.type.describedObject){
        this.selectableCustomObjectsMetrics.push({
          name: this.newCustomMetric.name,
          type: this.newCustomMetric.type.type,
          target: {
            type: this.newCustomMetric.targetType,
          },
          object:{
            name:this.newCustomMetric.objectName,
            kind:this.newCustomMetric.objectKind,
            apiVersion:this.newCustomMetric.objectApiVersion,
          }
        })
        this.newCustomMetric = {};
        return;
      }
      this.selectableCustomPodsMetrics.push({
        name: this.newCustomMetric.name,
        type: this.newCustomMetric.type.type,
        target: {
          type: this.newCustomMetric.targetType,
        }
      })
      this.newCustomMetric = {};
    }
  }
}
</script>

<style scoped>
.opacity {
  opacity: 0.5;
}
</style>
