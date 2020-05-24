<template>
  <!-- XXX (ricardoapl) Add form feedback (i.e. validation) -->
  <div class="container mb-4">
    <div class="card border-info">
      <div class="card-header bg-info text-light text-center">
        <p class="h5">
          <strong>Create new Horizontal Pod Autoscaler</strong>
        </p>
      </div>
      <b-form-checkbox
        v-model="jsonYMLCreate"
        class="ml-3 mt-3"
        switch
        size="lg"
      >
        Use JSON
      </b-form-checkbox>
      <div
        v-if="!jsonYMLCreate"
      >
        <div class="card-body">
          <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" :style="'width: '+progress+'%'" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div v-if="progress == 0" class="">
            <!-- PICK RESOURCE CONTROLLER -->
            <h4 class="ml-3 mt-5"><i>Choose Resource Controller</i></h4>
            <deployments-list-hpa :namespacesNames="namespacesNames" :selectedDeployment="selectedDeployment" @selectDeployment="selectDeployment" ></deployments-list-hpa>
              <div class="row mt-3">
                <div class="col"></div>
                <div class="col"></div>
                <div class="w-100"></div>
                <div class="col"></div>
                <button :disabled="!selectedDeployment" @click="progress = 33" type="button" class="btn btn-primary mr-5">Next</button>
              </div>
          </div>
          <div v-if="progress == 33" class="">
            <!-- RESOURCE METRICS -->
            <h4 class="ml-3 mt-5"><i>Pick resource metrics</i></h4>
            <metrics-list-hpa :selectedMetrics="selectedMetrics" @addMetric="addMetric"></metrics-list-hpa>
            <hr>
            <!-- CUSTOM METRICS -->
            <h4 class="ml-3"><i>Specify custom metrics</i></h4>
            <custom-metrics-list-hpa :selectedCustomMetrics="selectedCustomMetrics" @addCustomMetric="addCustomMetric"></custom-metrics-list-hpa>
            <div class="row mt-3">
              <button @click="progress = 0" type="button" class="btn btn-primary ml-5">Back</button>
              <div class="col"></div>
              <div class="col"></div>
              <button :disabled="selectedMetrics.length==0 && selectedCustomMetrics.length==0" @click="progress = 66" type="button" class="btn btn-primary mr-5">Next</button>
            </div>
          </div>
          <!-- 666 -->
          <div v-if="progress == 66" class="">
            <h4 class="ml-3 mt-5"><i>Establish target values</i></h4>
            <span class="mt-3 ml-3">
              <div class="mt-3 ml-3" v-if="this.selectedMetrics.map(function(x) {return x.id; }).indexOf('cpu_Utilization')!=-1">
                <label for="customRange"><b>CPU Average Utilization:</b></label>
                <b class="ml-2">{{selectedMetrics[selectedMetrics.map(function(x) {return x.id; }).indexOf('cpu_Utilization')].value}} %</b>
                <input v-model="selectedMetrics[selectedMetrics.map(function(x) {return x.id; }).indexOf('cpu_Utilization')].value" type="range" class="custom-range" min="0" max="100" id="customRange">
              </div>
              <div class="mt-3 ml-3" v-if="this.selectedMetrics.map(function(x) {return x.id; }).indexOf('cpu_AverageValue')!=-1">
                <label for="customRange"><b>CPU Average Utilization:</b></label>
                <b  class="ml-2">{{selectedMetrics[selectedMetrics.map(function(x) {return x.id; }).indexOf('cpu_AverageValue')].value}}</b>
                <input v-model="selectedMetrics[selectedMetrics.map(function(x) {return x.id; }).indexOf('cpu_AverageValue')].value" class="form-control" type="number" placeholder="average value for CPU" >
              </div>
              <div class="mt-3 ml-3" v-if="this.selectedMetrics.map(function(x) {return x.id; }).indexOf('memory_Utilization')!=-1">
                <label for="customRange"><b>Memory Average Utilization:</b></label>
                <b class="ml-2">{{selectedMetrics[selectedMetrics.map(function(x) {return x.id; }).indexOf('memory_Utilization')].value}} %</b>
                <input v-model="selectedMetrics[selectedMetrics.map(function(x) {return x.id; }).indexOf('memory_Utilization')].value" type="range" class="custom-range" min="0" max="100" id="customRange">
              </div>
              <div class="mt-3 ml-3" v-if="this.selectedMetrics.map(function(x) {return x.id; }).indexOf('memory_AverageValue')!=-1">
                <label for="customRange"><b>Memory Average Value:</b></label>
                <b  class="ml-2">{{selectedMetrics[selectedMetrics.map(function(x) {return x.id; }).indexOf('memory_AverageValue')].value}}</b>
                <input v-model="selectedMetrics[selectedMetrics.map(function(x) {return x.id; }).indexOf('memory_AverageValue')].value" class="form-control" type="number" placeholder="average value for Memory" >              </div>
            </span>
            
            <!-- TODO: Custom Metrics Values Filling -->

            <div class="row mt-3">
              <button @click="progress = 33" type="button" class="btn btn-primary ml-5">Back</button>
              <div class="col"></div>
              <div class="col"></div>
              <button @click="progress = 100" type="button" class="btn btn-primary mr-5">Next</button>
            </div>
          </div>
          <div v-if="progress == 100" class="">
            <h4 class="ml-3 mt-5"><i>Finish up...</i></h4>
            <div class="mt-3 ml-3">
              <label for=""><b>Minimum Replicas:</b></label>
              <input v-model="newHPA.minReplicas" class="form-control" type="number" placeholder="1" >
            </div>
            <div class="mt-3 ml-3">
              <label for=""><b>Maximum Replicas:</b></label>
              <input v-model="newHPA.maxReplicas" class="form-control" type="number" placeholder="10" >
            </div>
            <h4 class="ml-3 mt-5"><i>Metadata</i></h4>
            <div class="mt-3 ml-3">
              <label for=""><b>Namespace:</b></label>
              <b-form-select
                v-model="newHPA.namespace"
                placeholder="Namespace"
                :options="namespacesNames"
              />
            </div>
            <div class="mt-3 ml-3">
              <label for=""><b>Horizontal Pod Autoscaler's Name:</b></label>
              <input v-model="newHPA.name" class="form-control" type="text" placeholder="my-hpa" >
            </div>
            <div class="row mt-3">
              <button @click="progress = 66" type="button" class="btn btn-primary ml-5">Back</button>
              <div class="col"></div>
              <div class="w-100"></div>
              <div class="col"></div>
              <div class="col"></div>
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <button
            @click="createHpa()"
            class="btn btn-success mr-2"
            :disabled="progress!=100||!newHPA.name"
          >
            Create
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="$emit('hide')"
          >
            Cancel
          </button>
        </div>
      </div>
      <div v-else>
        <b-form-textarea
          id="textarea"
          v-model="jsonYMLHPABody"
          placeholder="Paste JSON here"
          rows="12"
        />
        <div class="card-footer text-center">
          <button
            @click="submitForm()"
            class="btn btn-success mr-2"
          >
            Save
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="$emit('hide')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DeploymentsListHpa from '../deployments/DeploymentsListHpa.vue'
import MetricsListHpa from '../hpa/MetricsListHpa.vue'
import CustomMetricsListHpa from '../hpa/CustomMetricsListHpa.vue'


export default {
  name: 'HpasForm',
  props: [
    'namespacesNames'
  ],
  components:{
    DeploymentsListHpa,
    MetricsListHpa,
    CustomMetricsListHpa,
  },
  data () {
    return {
      progress:0,
      deploymentsNamespace: '*',
      selectedDeployment: null,
      newHPA: {},
      selectedMetrics:[],
      selectedCustomMetrics:[],
      jsonYMLHPABody: '',


      jsonYMLCreate: false,
    }
  },
  mounted () {
    console.log('HPAs created and mounted')
  },
  methods: {
    selectDeployment(deployment){
      console.log(deployment)
      this.deploymentsNamespace = deployment.metadata.namespace;
      this.selectedDeployment = deployment.metadata.name;
    },
    addMetric(id){
      var index = this.selectedMetrics.map(function(x) {return x.id; }).indexOf(id);
      if(index!=-1){
        this.selectedMetrics.splice(index,1)
      } else{
        var obj = {
          id: id,
          value: null,
        }
        this.selectedMetrics.push(obj)
      }
    },
    addCustomMetric(){  
      console.log("Not implemented yet")
    },
    createHPAJsonYML: function (body) {
      console.log(body)
      const namespace = body.metadata.namespace || 'default';
      const url = `/apis/autoscaling/v2beta2/namespaces/${namespace}/horizontalpodautoscalers`
       const options = {
        headers: {
          'Content-Type': 'application/json',
          }
      };
      this.$kubernetes.post(url, body, options)
        .then(response => {
          console.log(response)
          this.$store.dispatch('hpas/getHpas')
          this.$emit('hide')
        })
        .catch(error => {
          console.log(error)
        })
    },
    createHpa: function () {
      const namespace = this.newHPA.namespace || 'default';
      const url = `/apis/autoscaling/v2beta2/namespaces/${namespace}/horizontalpodautoscalers`
      const body = this.getHPABody()
      const options = {
        headers: {
          'Content-Type': 'application/json',
          }
      };
      console.log(body)
      const promise = this.$kubernetes.post(url, body, options)
        .then(response => {
          console.log(response)
          this.$store.dispatch('hpas/getHpas')
          this.newHPA={};
          this.selectedMetrics=[];
          this.selectedCustomMetrics=[];
        })
        .catch(error => {
          console.log(error)
        })
      return promise
    },
    getHPABody: function () {
      const body =
{
  "apiVersion": "autoscaling/v2beta2",
  "kind": "HorizontalPodAutoscaler",
  "metadata": {
      "name": this.newHPA.name
  },
  "spec": {
      "scaleTargetRef": {
        "apiVersion": "apps/v1",
        "kind": "Deployment",
        "name": this.selectedDeployment
      },
      "minReplicas": Number(this.newHPA.minReplicas) || 1,
      "maxReplicas": Number(this.newHPA.maxReplicas) || 10,
      "metrics": []
  }
}

     this.selectedMetrics.forEach(metric => {
      var resourceName = metric.id.split("_",1);
      var resourceTargetType = metric.id.split("_",2);
      var metricTargetValueKey;

      if(resourceTargetType[1]=='Utilization'){
        metricTargetValueKey = 'averageUtilization'
      } else{
        metricTargetValueKey = 'averageValue'
      }
      body.spec.metrics.push({
        "type": "Resource",
        "resource": {
              "name": resourceName[0],
              "target": {
                  "type": resourceTargetType[1],
              }
            }
      });
      var len = body.spec.metrics.length;
      body.spec.metrics[len-1].resource.target[metricTargetValueKey]=Number(metric.value);
      console.log(body)
     });


      return body
    },
    submitForm: function () {
      if (this.jsonYMLCreate) {
        this.createHPAJsonYML(JSON.parse(this.jsonYMLHPABody))
      } else{
        this.createHpa()
      }
        
    }
  }
}
</script>


<style scoped>

.opacity{
  opacity: 0.5;
}

</style>
