<template>
  <div class="container table-responsive">
    <b-table
      show-empty
      bordered
      :per-page="perPage"
      :current-page="currentPage"
      striped
      hover
      :items="filteredHpas"
      :fields="fields"
      selectable
      @row-selected="onRowSelected"
      select-mode="single"
    >
      <template v-slot:cell(scaleTargetRef)="row">
        <div class="text-center">
          <span class="badge badge-warning">
          {{ row.item.spec.scaleTargetRef.kind }}
          </span>
          <p>{{ row.item.spec.scaleTargetRef.name }}</p>
        </div>
      </template> 
      <template v-slot:cell(currentReplicas)="row">
        <span v-if="row.item.status.currentReplicas!=row.item.status.desiredReplicas" class="badge badge-danger">
          attention
        </span>
        {{row.item.status.currentReplicas}}/{{row.item.status.desiredReplicas}}
      </template>
      <template v-slot:cell(actions)="row">
        <div class="text-center">
          <b-button-group>
            <hpas-list-action-delete :hpa="row.item" />
            <!-- XXX (zdzaz) Need to change the "See logs" Icon -->
            <hpas-list-action-log :hpa="row.item" />
          </b-button-group>
        </div>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="right"
    />
    <hr>
    <div v-if="selectedHpa">
      Horizontal Pod Autoscaler <h4>{{selectedHpa.metadata.name}}</h4>
      <h5 class="text-primary mt-5">Defined Metrics</h5>
      <div class="container">
        <div class="row mt-3 ml-3">
        <div v-for="(metric,index) in selectedHpa.spec.metrics" :key="index">
          <div class="col-sm ">
            
            <div class="">

              <div :class="{ opacity: !selectedHpa.status.currentMetrics }" class="col mb-3 ml-3" style="width:300px">
                <div class="card text-center">
                    <div class="card-body">
                    <div class="mt-2">
                        <span class="badge badge-success">
                          {{metric.type}}
                        </span>
                        <p class="mt-2 lead">
                          {{metric.resource.target.type}} of {{metric.resource.name.toUpperCase()}}
                        </p>
                    </div>
                    <div v-if="selectedHpa.status.currentMetrics" style="font-size:20px" class="col-sm d-inline text-danger">
                      {{selectedHpa.status.currentMetrics[index].resource?selectedHpa.status.currentMetrics[index].resource.current[selectedHpa.spec.metrics[index].resource.target.type=='Utilization'?'averageUtilization':'averageValue']:'?'}}/{{selectedHpa.spec.metrics[index].resource.target.type=='Utilization'?selectedHpa.spec.metrics[index].resource.target.averageUtilization+'%':selectedHpa.spec.metrics[index].resource.target.averageValue}}
                    </div>
                    <div v-else class="row mt-3 ml-3">
                      No current metrics could be retrieved
                    </div>
                    </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
    

  </div>
</template>

<script>
import moment from 'moment'
import HpasListActionDelete from './HpasListActionDelete.vue'
import HpasListActionLog from './HpasListActionLog.vue'


export default {
  name: 'HpasList',
  components: {
    HpasListActionDelete,
    HpasListActionLog,
  },
  props: [
    'namespace',
  ],
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      selectedHpa:null,
      fields: [
        {
          key: 'metadata.name',
          label: 'Name'
        },
        {
          key: 'metadata.namespace',
          label: 'Namespace'
        },
        { key: 'metadata.creationTimestamp', label: 'Created', formatter: 'created' },
        {
          key: 'spec.minReplicas',
          label: 'Min Replicas'
        },
        {
          key: 'currentReplicas',
          label: 'Current Replicas'
        },
        {
          key: 'spec.maxReplicas',
          label: 'Max Replicas'
        },
        {
          key: 'scaleTargetRef',
          label: 'Target Info'
        },
        {
          key: 'actions',
          label: 'Actions'
        }
      ],
      series: [{
        name: "Current Value",
        data: []
      }, {
        name: "Target Value",
        data: []
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: [],
        },
      },
    }
  },
  computed: {
    filteredHpas () {
      if (this.namespace == '*' || this.namespace == undefined){
        return this.$store.state.hpas.hpas;
      } else {
        return this.$store.state.hpas.hpas.filter((obj) => {
          return obj.metadata.namespace == this.namespace
        })
      }
    },
    rows () {
      return this.filteredHpas.length
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    currentValue(currMetric,resourceType){
      if(!currMetric.resource){
        return;
      }
      console.log(resourceType)
      var value = currMetric.resource.current[resourceType.charAt(0).toLowerCase()+resourceType.slice(1)]
      console.log(value)
      return value;
    },
    created: function (timestamp) {
      return moment(timestamp).fromNow()
    },
    onRowSelected(items) {
      this.selectedHpa = items[0];
      // CHART ATTEMPT
      // var arrayX = [];
      // var series_0 = [];
      // var series_1 = [];
      // if(!this.selectedHpa){
      //   return;
      // }
      // if(this.selectedHpa.status.currentMetrics){
      //   this.selectedHpa.status.currentMetrics.forEach((currMetric,indexMetric)=>{
      //     var resourceType =  this.selectedHpa.spec.metrics[indexMetric].resource.target.type;
      //     var resourceName = this.selectedHpa.spec.metrics[indexMetric].resource.name;
      //     if(resourceType && resourceName){
      //       if(resourceType=='Utilization'){
      //       arrayX.push(resourceName+'_'+resourceType);
      //       series_0.push(this.currentValue(currMetric,resourceType));
      //       series_1.push(this.currentTarget(currMetric,indexMetric,resourceType));
      //     }
      //   }
      //   })
      // }

      // this.chartOptions.xaxis.categories = [];
      // this.series[0].data = [];
      // this.series[1].data = [];

      // this.chartOptions.xaxis.categories = arrayX;
      // this.series[0].data = series_0;
      // this.series[1].data = series_1;

    },
  }
}
</script>

<style scoped>

.opacity{
  opacity: 0.8;
}

</style>
